import { Link } from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";

import { useStyles } from "./LinkOpen.styles";

export interface LinkOpenProps {
  className?: string;
  href: string;
  hasLinkIcon?: boolean;
}

export const LinkOpen: React.FC<LinkOpenProps> = (props) => {
  const classes = useStyles();
  return (
    <Link
      className={clsx(classes.linkOpen, props.className)}
      href={props.href}
      target="_blank"
      rel="external nofollow"
    >
      <span>{props.children}</span>
      {props.hasLinkIcon && <OpenInNew className={classes.icon} />}
    </Link>
  );
};
