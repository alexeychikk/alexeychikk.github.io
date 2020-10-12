import React from "react";

import { ReactComponent as FolderSrcIcon } from "~/assets/icons/folder-src-open.svg";
import { Br, CodeLikeBlock, Fn, Kw, Sl, Vn } from "~/components/CodeLikeBlock";

import { useStyles } from "./AboutMe.styles";

export const AboutMe: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <p>
        <Kw>Hi</Kw>, my <Vn>name</Vn> is <Sl>Alex</Sl>!
      </p>
      <p>
        <Kw>I am</Kw> a <Fn>full-stack web developer</Fn>.
      </p>
      <p>
        <Kw>Currently</Kw> I am <Sl>open</Sl> to new <Fn>job opportunities</Fn>!
      </p>

      <Br />

      <p>
        <Kw>I love</Kw> to write <Vn>clean</Vn>, <Vn>readable</Vn> and{" "}
        <Vn>maintainable</Vn> <Fn>code</Fn>.
      </p>
      <p>
        <Kw>My</Kw> main <Fn>stack</Fn> is: <Vn>JavaScript / TypeScript</Vn>,{" "}
        <Vn>React</Vn>, <Vn>Node.js</Vn> and <Vn>MongoDB</Vn>.
      </p>

      <Br />

      <p>
        <Kw>You can</Kw> find all of my <Fn>skills</Fn> in the <Vn>sidebar</Vn>{" "}
        on the <Sl>left</Sl>
      </p>
      <p>
        (<Kw>swipe</Kw> or <Kw>tap</Kw> the <Sl>green folder</Sl>{" "}
        <FolderSrcIcon className={classes.icon} /> if you&apos;re using a{" "}
        <Fn>mobile device</Fn>).
      </p>

      <Br />

      <p>
        <Kw>I started</Kw> coding when <Kw>I was</Kw> a <Sl>teenager</Sl>.
      </p>
      <p>
        <Kw>My</Kw> first <Vn>programming language</Vn> was <Fn>C++</Fn>.
      </p>
      <p>
        <Kw>Then</Kw> I learned <Fn>C#</Fn> and started <Kw>writing</Kw> simple{" "}
        <Vn>games</Vn> for <Sl>fun</Sl>.
      </p>

      <Br />

      <p>
        <Kw>But one day</Kw>, all the <Sl>cool guys</Sl> started{" "}
        <Kw>talking</Kw> about <Fn>JS</Fn> and how <Vn>awesome</Vn> and{" "}
        <Vn>powerful</Vn> it is.
      </p>
      <p>
        <Kw>So I followed</Kw> the <Vn>mainstream</Vn> and dedicated all my{" "}
        <Vn>efforts</Vn> to become as good <Fn>web developer</Fn> as I can
        possibly <Kw>be</Kw>.
      </p>
    </CodeLikeBlock>
  );
};

export default AboutMe;
