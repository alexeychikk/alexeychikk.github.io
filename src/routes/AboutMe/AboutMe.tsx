import React from "react";

import { ReactComponent as FolderSrcIcon } from "~/assets/icons/folder-src-open.svg";
import {
  Br,
  CodeLikeBlock,
  Cm,
  Fn,
  Kw,
  Sl,
  Vn,
  L,
} from "~/components/CodeLikeBlock";
import { IfHirable, IfNotHirable } from "~/components/IfHirable";
import { LinkOpen } from "~/components/LinkOpen";

import { useStyles } from "./AboutMe.styles";

export const AboutMe: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <L>
        <Kw>Hi</Kw>, my name is <Sl>Alex</Sl>!
      </L>
      <L>
        <Kw>I am</Kw> a <Fn>full-stack web developer</Fn>.
      </L>
      <L active git="green">
        <IfHirable>
          <Kw>Currently</Kw> I am <Sl>open</Sl> to new{" "}
          <Fn>job opportunities</Fn>!
        </IfHirable>
        <IfNotHirable>
          <Kw>Currently</Kw> I am not looking for a new job but feel free to{" "}
          <LinkOpen to="/contacts" hasLinkIcon>
            contact
          </LinkOpen>{" "}
          me.
        </IfNotHirable>
      </L>

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
        <Kw>I started</Kw> coding when I was a <Sl>teenager</Sl>.
      </L>
      <L>
        <Kw>My</Kw> first <Vn>programming language</Vn> was <Fn>C++</Fn>.
      </L>
      <L>
        <Kw>Then</Kw> I learned <Fn>C#</Fn> and started writing simple{" "}
        <Vn>games</Vn> for fun.
      </L>

      <Br />

      <L git="blue">
        <Kw>But one day</Kw>, all the cool guys started talking about{" "}
        <Fn>JS</Fn> and how <Vn>awesome</Vn> and <Vn>powerful</Vn> it is.
      </L>
      <L git="blue">
        <Kw>So I followed</Kw> the mainstream and dedicated all my{" "}
        <Vn>efforts</Vn> to become as good <Fn>web developer</Fn> as I can
        possibly be.
      </L>

      <Br />

      <L>
        <Cm>f*ck russia</Cm>
      </L>
    </CodeLikeBlock>
  );
};

export default AboutMe;
