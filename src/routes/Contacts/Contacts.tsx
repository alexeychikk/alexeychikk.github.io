import React from "react";

import { CodeLikeBlock, Kw, Sl, Br, Fn, L } from "~/components/CodeLikeBlock";
import { GoogleMap } from "~/components/GoogleMap";
import { LinkLine } from "~/components/LinkLine";

import { useStyles } from "./Contacts.styles";

export const Contacts: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <L>
        <Kw>I live</Kw> in <Sl>Kyiv</Sl>, Ukraine.
      </L>
      <L active git="green">
        <Kw>But</Kw> I definitely consider <Fn>remote</Fn> work.
      </L>

      <Br />

      <div className={classes.mapWrapper}>
        <L className={classes.map}>
          <GoogleMap address="Kyiv" title="My Location" />
        </L>

        <div className={classes.contactInfo}>
          <LinkLine label="E-mail" to="mailto:alexdarkmm@gmail.com" external>
            alexdarkmm@gmail.com
          </LinkLine>
          <LinkLine
            label="LinkedIn"
            to="https://www.linkedin.com/in/alex-zinkevych/"
            hasLinkIcon
            external
          >
            Alex Zinkevych
          </LinkLine>
          <LinkLine
            label="GitHub"
            to="https://github.com/alexeychikk"
            hasLinkIcon
            external
          >
            alexeychikk
          </LinkLine>
          <Br />
        </div>
      </div>
    </CodeLikeBlock>
  );
};

export default Contacts;
