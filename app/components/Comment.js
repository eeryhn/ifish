/* REVIEW: So this has...gotten messy.  Cleanup.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Markdown from 'react-markdown'
import CommentForm from './CommentForm';
import { UserContext } from './UserContext';

const styles = theme => ({
  root: {
    padding: '.5rem 0 0 .75rem',
    borderLeft: `2px solid ${fade(theme.palette.common.black, 0.1)}`,
    marginBottom: '1rem',
    '&:hover': {
      backgroundColor: fade(theme.palette.grey[900], .01),
      borderLeft: `2px solid ${theme.palette.grey[500]}`
    }
  },
  userInfo: {
    color: theme.palette.grey['700'],
    fontSize: '.75rem',
    marginBottom: '.3rem',
    paddingRight: '.5rem'
  },
  commentBody: {
    padding: '0 .3rem .875rem .3rem'
  },
  children: {
    margin: '.1rem 0 .25rem .2rem',
    padding: '0',
  }
});

class Comment extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      replying: false,
      expanded: true,
      toggleText: 'hide'
    }
  }

  toggleView(e) {
    e.stopPropagation();
    this.setState({
      toggleText: this.state.expanded ? 'show' : 'hide',
      expanded: !this.state.expanded
    });
  }

  setFocused(bool) {
    this.state.focused = bool;
  }

  onMouseInOut(e, bool) {
    if(this.props.setHighlight) {
      this.props.setHighlight(this.props.data.block_id, bool);
    }
  }

  onClick(e) {
    this.props.setFocus(this.props.data.block_id);
  }

  render() {
    const { classes, children } = this.props;
    const { pageId, name, user_id, content, block_id } = this.props.data;
    const date = new Date(this.props.data.created_at);
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

    let attr = {
      className: classes.root,
      display: `${this.props.hidden ? 'none' : 'block'}`
    }

    if(this.props.setHighlight) {
      attr.onMouseEnter = e => {this.onMouseInOut(e, true)};
      attr.onMouseLeave = e => {this.onMouseInOut(e, false)};
    }

    if(this.props.setFocus) {
      attr.onClick = e => {this.onClick(e)};
    }

    return(
      <Box
        {...attr}
      >
        <Box className={classes.userInfo} display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography variant="body2">
              {`${user_id}:${name} @ ${dateStr}`}
            </Typography>
          </Box>
          <Button size="small" onClick={(e) => this.toggleView(e)}>
            {this.state.toggleText}
          </Button>
        </Box>
        <Box hidden={!this.state.expanded}>
          <Box className={classes.commentBody}>
            <Markdown source={content}/>
            <UserContext.Consumer>
              { user => {
                if(user) return(
                  <Box ml={1.5} my={1}>
                    <Box display="flex" justifyContent="flex-end">
                      <Button size="small"
                        variant={`${this.state.replying ? "outlined" : 'text'}`}
                        onClick={() => this.setState({replying: !this.state.replying})}
                      >
                        Reply
                      </Button>
                    </Box>
                    <CommentForm
                      pageId={pageId}
                      blockId={block_id}
                      parentId ={this.props.cid}
                      updateComments={this.props.updateComments}
                      onSubmit={(e) => {this.setState({replying: false})}}
                      replying={this.state.replying}
                    />
                  </Box>
                )
                else return;
              }}
            </UserContext.Consumer>
          </Box>
          { children.length > 0 &&
            <Box className={classes.children}>
              {children}
            </Box>
          }
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Comment);
