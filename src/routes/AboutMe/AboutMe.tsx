import React from "react";

import { Br, CodeLikeBlock } from "~/components/CodeLikeBlock";

export const AboutMe: React.FC = () => {
  return (
    <CodeLikeBlock>
      <p>
        <b>Hi</b>, my <em>name</em> is <i>Alex</i>!
      </p>
      <p>
        <b>I am</b> a <strong>full-stack web developer</strong>.
      </p>

      <Br />

      <p>
        <b>I love</b> to write <em>clean</em>, <em>readable</em> and{" "}
        <em>maintainable</em> <strong>code</strong>.
      </p>
      <p>
        <b>My</b> main <strong>stack</strong> is:{" "}
        <em>JavaScript / TypeScript</em>, <em>React</em>, <em>Node.js</em> and{" "}
        <em>MongoDB</em>.
      </p>

      <Br />

      <p>
        <b>You can</b> find all of my <strong>skills</strong> in the{" "}
        <em>sidebar</em> on the <i>left</i>
      </p>
      <p>
        (<b>swipe</b> or <b>tap</b> the <i>green folder</i> if you&apos;re using
        a <strong>mobile device</strong>).
      </p>

      <Br />

      <p>
        <b>I started</b> coding when <b>I was</b> a <i>teenager</i>.
      </p>
      <p>
        <b>My</b> first <em>programming language</em> was <strong>C++</strong>.
      </p>
      <p>
        <b>Then</b> I learned <strong>C#</strong> and started <b>writing</b>{" "}
        simple <em>games</em> for <i>fun</i>.
      </p>

      <Br />

      <p>
        <b>But one day</b>, all the <i>cool guys</i> started <b>talking</b>{" "}
        about <strong>JS</strong> and how <em>awesome</em> and <em>powerful</em>{" "}
        it is.
      </p>
      <p>
        <b>So I followed</b> the <em>mainstream</em> and dedicated all my{" "}
        <em>efforts</em> to become as good <strong>web developer</strong> as I
        can possibly <b>be</b>.
      </p>
    </CodeLikeBlock>
  );
};

export default AboutMe;
