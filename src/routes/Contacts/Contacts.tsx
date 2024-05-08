import React from 'react';

import { useStyles } from './Contacts.styles';

import {
  CodeLikeBlock,
  Kw,
  Sl,
  Br,
  Fn,
  L,
  Vn,
} from '~/components/CodeLikeBlock';
import { GoogleMap } from '~/components/GoogleMap';
import { IfHirable, IfNotHirable } from '~/components/IfHirable';
import { LinkLine } from '~/components/LinkLine';
import { LoveSurvey } from '~/components/LoveSurvey';

export const Contacts: React.FC = () => {
  const classes = useStyles();
  return (
    <CodeLikeBlock>
      <L>
        Currently <Kw>I live</Kw> in <Vn>Kyiv</Vn>, <Sl>Ukraine</Sl>.
      </L>
      <IfHirable>
        <L active git="green">
          <Kw>But</Kw> I definitely consider <Fn>remote</Fn> work.
        </L>
      </IfHirable>
      <IfNotHirable>
        <L git="blue">
          I lived in <Sl>Israel</Sl> for several years, but decided to return
          back to Ukraine.
        </L>
      </IfNotHirable>
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
      <LoveSurvey />
    </CodeLikeBlock>
  );
};

export default Contacts;
