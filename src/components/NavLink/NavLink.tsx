import clsx from 'clsx';
import React from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom';

import { useStyles } from './NavLink.styles';

import JsonIcon from '~/assets/icons/json.svg?react';

export interface NavLinkProps {
  activeClassName?: string;
  activeOnlyWhenExact?: boolean;
  children: React.ReactNode;
  className?: string;
  hasIcon?: boolean;
  icon?: SvgComponent;
  iconClassName?: string;
  external?: boolean;
  to: string;
  target?: LinkProps['target'];
}

const NavLinkBase: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact,
  });
  const Icon = props.icon || JsonIcon;
  const Component = props.external ? 'a' : Link;

  return (
    // @ts-expect-error expected
    <Component
      className={clsx(
        classes.link,
        match && classes.active,
        match && props.activeClassName,
        props.className,
      )}
      target={props.target}
      {...(props.external ? { href: props.to } : { to: props.to })}
    >
      {props.hasIcon && (
        <Icon className={clsx(classes.icon, props.iconClassName)} />
      )}
      {props.children}
    </Component>
  );
};

export const NavLink = React.memo(NavLinkBase);
