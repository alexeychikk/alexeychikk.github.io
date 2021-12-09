import { Link as MuiLink } from "@material-ui/core";
import { OpenInNew as OpenInNewIcon } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { useStyles } from "./LinkOpen.styles";

export interface LinkOpenProps {
  className?: string;
  to: string;
  external?: boolean;
  hasLinkIcon?: boolean;
}

export const LinkOpen: React.FC<LinkOpenProps> = (props) => {
  const classes = useStyles();
  const className = clsx(classes.linkOpen, props.className);

  const content = (
    <>
      <span>{props.children}</span>
      {props.hasLinkIcon && <OpenInNewIcon className={classes.icon} />}
    </>
  );

  return props.external ? (
    <MuiLink
      className={className}
      href={props.to}
      target="_blank"
      rel="external nofollow"
    >
      {content}
    </MuiLink>
  ) : (
    <Link className={className} to={props.to}>
      {content}
    </Link>
  );
};
