import React from "react";
import { Link, LinkProps, useRouteMatch } from "react-router-dom";
import clsx from "clsx";

import { ReactComponent as JsonIcon } from "~/assets/icons/json.svg";

import { useStyles } from "./NavLink.styles";

export interface NavLinkProps {
  activeClassName?: string;
  activeOnlyWhenExact?: boolean;
  children: React.ReactNode;
  className?: string;
  hasIcon?: boolean;
  icon?: SvgComponent;
  iconClassName?: string;
  isExternal?: boolean;
  to: string;
  target?: LinkProps["target"];
}

const NavLinkBase: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact,
  });
  const Icon = props.icon || JsonIcon;
  const Component = props.isExternal ? "a" : Link;

  return (
    // @ts-ignore
    <Component
      className={clsx(
        classes.link,
        match && classes.active,
        match && props.activeClassName,
        props.className
      )}
      target={props.target}
      {...(props.isExternal ? { href: props.to } : { to: props.to })}
    >
      {props.hasIcon && (
        <Icon className={clsx(classes.icon, props.iconClassName)} />
      )}
      {props.children}
    </Component>
  );
};

export const NavLink = React.memo(NavLinkBase);
