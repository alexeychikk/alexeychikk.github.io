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
      <L>
        <Cm>I started coding when I was a teenager.</Cm>
      </L>
      <L>
        <Cm>My first programming language was C++.</Cm>
      </L>

      <Br />

      <L git="blue">
        <Kw>I have</Kw> extensive experience in building scalable{" "}
        <Fn>REST microservices</Fn> and <Fn>monolithic back-ends</Fn>, creating
        web <Fn>API integrations</Fn>, as well as developing responsive and
        efficient <Fn>front-end</Fn> web-applications, <Vn>refactoring</Vn> and{" "}
        <Vn>improving</Vn> existing codebases and even <Vn>migrating</Vn> them
        to a different technology stack / programming language.
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
    </CodeLikeBlock>
  );
};

export default AboutMe;
