import { Link } from "@material-ui/core";
import { Link as LinkIcon } from "@material-ui/icons";
import React from "react";

import { CodeLikeBlock, Kw, Sl, Br, Fn, L } from "~/components/CodeLikeBlock";
import { GoogleMap } from "~/components/GoogleMap";

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
          <L>
            Tel:{" "}
            <Link href="tel:+972587988196" target="_blank">
              +972 5879 88 196
            </Link>
          </L>
          <L>
            E-mail:{" "}
            <Link href="mailto:alexdarkmm@gmail.com" target="_blank">
              alexdarkmm@gmail.com
            </Link>
          </L>
          <L>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/alex-zinkevych/"
              target="_blank"
            >
              <LinkIcon className={classes.linkIcon} /> Alex Zinkevych
            </Link>
          </L>
          <L>
            GitHub:{" "}
            <Link href="https://github.com/alexeychikk" target="_blank">
              <LinkIcon className={classes.linkIcon} /> alexeychikk
            </Link>
          </L>
          <Br />
        </div>
      </div>
    </CodeLikeBlock>
  );
};

export default Contacts;
