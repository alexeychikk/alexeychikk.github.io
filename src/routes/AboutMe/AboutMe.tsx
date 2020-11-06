import React from "react";

import { ReactComponent as FolderSrcIcon } from "~/assets/icons/folder-src-open.svg";
import {
  Br,
  CodeLikeBlock,
  Fn,
  Kw,
  Sl,
  Vn,
  L,
} from "~/components/CodeLikeBlock";
import { IfHirable } from "~/components/IfHirable";

import { useStyles } from "./AboutMe.styles";

export const AboutMe: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <L>
        <Kw>Hi</Kw>, my <Vn>name</Vn> is <Sl>Alex</Sl>!
      </L>
      <L>
        <Kw>I am</Kw> a <Fn>full-stack web developer</Fn>.
      </L>
      <IfHirable>
        <L active git="green">
          <Kw>Currently</Kw> I am <Sl>open</Sl> to new{" "}
          <Fn>job opportunities</Fn>!
        </L>
      </IfHirable>

      <Br />

      <L>
        <Kw>I love</Kw> to write <Vn>clean</Vn>, <Vn>readable</Vn> and{" "}
        <Vn>maintainable</Vn> <Fn>code</Fn>.
      </L>
      <L>
        <Kw>My</Kw> main <Fn>stack</Fn> is: <Vn>JavaScript / TypeScript</Vn>,{" "}
        <Vn>React</Vn>, <Vn>Node.js</Vn> and <Vn>MongoDB</Vn>.
      </L>

      <Br />

      <L>
        <Kw>You can</Kw> find all of my <Fn>skills</Fn> in the <Vn>sidebar</Vn>{" "}
        on the <Sl>left</Sl>
      </L>
      <L>
        (<Kw>swipe</Kw> or <Kw>tap</Kw> the <Sl>green folder</Sl>{" "}
        <FolderSrcIcon className={classes.icon} /> if you&apos;re using a{" "}
        <Fn>mobile device</Fn>).
      </L>

      <Br />

      <L>
        <Kw>I started</Kw> coding when <Kw>I was</Kw> a <Sl>teenager</Sl>.
      </L>
      <L>
        <Kw>My</Kw> first <Vn>programming language</Vn> was <Fn>C++</Fn>.
      </L>
      <L>
        <Kw>Then</Kw> I learned <Fn>C#</Fn> and started <Kw>writing</Kw> simple{" "}
        <Vn>games</Vn> for <Sl>fun</Sl>.
      </L>

      <Br />

      <L git="blue">
        <Kw>But one day</Kw>, all the <Sl>cool guys</Sl> started{" "}
        <Kw>talking</Kw> about <Fn>JS</Fn> and how <Vn>awesome</Vn> and{" "}
        <Vn>powerful</Vn> it is.
      </L>
      <L git="blue">
        <Kw>So I followed</Kw> the <Vn>mainstream</Vn> and dedicated all my{" "}
        <Vn>efforts</Vn> to become as good <Fn>web developer</Fn> as I can
        possibly <Kw>be</Kw>.
      </L>
    </CodeLikeBlock>
  );
};

export default AboutMe;
