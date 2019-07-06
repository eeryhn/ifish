import CommentLayout from '../components/CommentLayout';
import Link from 'next/link';
import Commentable from '../components/Commentable';

const content =
  <div id="0" commentable={true}>
    <h1>Hello World</h1>
    <div>
      <p id="test" commentable={true}>
        Welcome to my playground?  Kind of messy and dusty and built from scrapmetal, sawdust, and the questionable gluestick I found in my desk a few years ago.
      </p>
      <p>
        Not really.  I haven't seen a gluestick in years.
      </p>
      <p>
        Speaking somewhat seriously, though, this would probably count as a journal or a blog or a sandbox.  Maybe a lab if we're feeling a bit of fluff.
        We all have little toys and trinkets we want to make.  Thoughts and ideas, cool problems, elegant solutions, topped off with somewhat-useful-but-not-currently-in-use trivia.
        We throw it all into the magic binary void and call it sharing, because it kind of is.
      </p>
      <p>
        You never know what's out there, right?  So this is me, sharing.
      </p>

      <div id="1" commentable={true}>
        <h3 id="2" commentable={true}>And all this sidebar nonsense is...</h3>
        <div>
          <p id="4" commentable={true}>
            A few years ago - and it's kind of alarming that it's really been a few years now - I was ripping apart the PHP documentation trying to find
            information on this or that.  Mind, my experience with official docs up to that point was more or less limited to the Java docs.
          </p>
          <p id="5" commentable={true}>I still have nightmares</p>
          <p id="6" commentable={true}>
            Actually that's a joke.  The Java documentation is home to me.  PHP not so much, but my point is actually that I'd never seen comments on
            a manual.  The idea was entirely foreign to me.  The idea that I would find answers there even more so.
          </p>
          <p>
            It probably shouldn't have been surprising.  I would argue manuals should at least try to be the end all be all of knowledge
            about a thing, and if enough people share a problem that they'd feel inclined to comment about it, maybe it's time for revision.
            Especially if revision would probably take around 5-10 minutes to disperse.
            But that's not entirely fair to the creators, or anybody else, really.
          </p>
          <p>
            Anyway, I thought the notes in the margins might always have their place in the margins.  I wouldn't expect them to be
            always useful, but they can and do tell stories, and that should be reason enough to keep them around.
          </p>
          <p>
            So this is that.  Well, an attempt, at any rate.  Because  I thought it might
            be fun to see traces of thoughts on what we're reading, as we're reading.  Our windows (or my windows) stay large enough these days to entertain the idea.
            As for mobile...maybe we're getting there.  In the meantime, I wouldn't expect any of this to work on a phone for...ever.
          </p>
          <p id="7" commentable={true}>
            So that's it.  Welcome to prototype 0.01 (not that anybody asked, but 0.00 was a bigger flop) and my box of gimmicks.
          </p>
        </div>
      </div>

      <div id="double-test" commentable={true}>
        <h3>Tests and some such somethings</h3>
        Every now and again you'll want to do something like, idk, make a div and
        give it content, and then give it children, and maybe it'll get a little
        confused because one of its children.
        <p>Or maybe many of its children?</p>
        Are not actually nodes.  We want to make sure we have these cases handled
        otherwise they'll come back and haunt us in our sleep.
      </div>
    </div>
  </div>

export default function Index() {
  return (
    <CommentLayout content={content} pageId="intro"/>
  );
}
