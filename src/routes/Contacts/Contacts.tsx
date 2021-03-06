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
        <Kw>I live</Kw> in <Sl>Tel Aviv</Sl>, Israel.
      </L>
      <L active git="green">
        <Kw>But</Kw> I definitely consider <Fn>remote</Fn> work.
      </L>

      <Br />

      <div className={classes.mapWrapper}>
        <L className={classes.map}>
          <GoogleMap />
        </L>

        <div className={classes.contactInfo}>
          <LinkLine label="Tel" href="tel:+972587988196">
            +972 5879 88 196
          </LinkLine>
          <LinkLine label="E-mail" href="mailto:alexdarkmm@gmail.com">
            alexdarkmm@gmail.com
          </LinkLine>
          <LinkLine
            label="LinkedIn"
            href="https://www.linkedin.com/in/alex-zinkevych/"
            hasLinkIcon
          >
            Alex Zinkevych
          </LinkLine>
          <LinkLine
            label="GitHub"
            href="https://github.com/alexeychikk"
            hasLinkIcon
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
