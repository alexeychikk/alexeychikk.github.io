import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import cn from 'classnames';

import JsonIcon from '~/assets/icons/json.svg';

import { useStyles } from './NavLink.styles';
import { Typography } from '@material-ui/core';

interface NavLinkProps {
  to: string;
  activeOnlyWhenExact?: boolean;
  className?: string;
  icon?: SvgComponent;
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();
  const match = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact
  });
  const Icon = props.icon || JsonIcon;

  return (
    <Link
      className={cn(classes.link, match && classes.active, props.className)}
      to={props.to}
    >
      <Icon className={classes.icon} />
      <Typography variant="body1">{props.children}</Typography>
    </Link>
  );
};
