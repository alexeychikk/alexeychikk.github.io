import { Link } from "@material-ui/core";
import { Link as LinkIcon } from "@material-ui/icons";
import React from "react";

import { CodeLikeBlock, Kw, Sl, Br, Fn } from "~/components/CodeLikeBlock";
import { GoogleMap } from "~/components/GoogleMap";

import { useStyles } from "./Contacts.styles";

export const Contacts: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <p>
        <Kw>I live</Kw> in <Sl>Tel Aviv</Sl>, Israel.
      </p>
      <p>
        <Kw>But</Kw> I definitely consider <Fn>remote</Fn> work.
      </p>

      <Br />

      <div className={classes.mapWrapper}>
        <GoogleMap className={classes.map} />

        <div className={classes.contactInfo}>
          <p>
            Tel:{" "}
            <Link href="tel:+972587988196" target="_blank">
              +972 5879 88 196
            </Link>
          </p>
          <p>
            E-mail:{" "}
            <Link href="mailto:alexdarkmm@gmail.com" target="_blank">
              alexdarkmm@gmail.com
            </Link>
          </p>
          <p>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/alex-zinkevych/"
              target="_blank"
            >
              <LinkIcon className={classes.linkIcon} /> Alex Zinkevych
            </Link>
          </p>
          <p>
            GitHub:{" "}
            <Link href="https://github.com/alexeychikk" target="_blank">
              <LinkIcon className={classes.linkIcon} /> alexeychikk
            </Link>
          </p>
          <Br />
        </div>
      </div>
    </CodeLikeBlock>
  );
};

export default Contacts;
