import React from "react";
import clsx from "clsx";

import { L, LProps } from "~/components/CodeLikeBlock";
import { LinkOpen, LinkOpenProps } from "~/components/LinkOpen";

import { useStyles } from "./LinkLine.styles";

export interface LinkLineProps extends LProps, LinkOpenProps {
  label: React.ReactNode;
}

const LinkLineBase: React.FC<LinkLineProps> = ({
  className,
  label,
  to,
  hasLinkIcon,
  children,
  external,
  ...props
}) => {
  const classes = useStyles();
  return (
    <L className={clsx(classes.linkLine, className)} {...props}>
      <span>{label}:</span>{" "}
      <LinkOpen to={to} hasLinkIcon={hasLinkIcon} external={external}>
        {children}
      </LinkOpen>
    </L>
  );
};

export const LinkLine = React.memo(LinkLineBase);
