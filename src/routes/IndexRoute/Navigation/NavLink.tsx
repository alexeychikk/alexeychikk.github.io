import { Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './NavLink.styles';

import { NavLink as BaseNavLink } from '~/components/NavLink';

interface NavLinkProps {
  to: string;
  activeOnlyWhenExact?: boolean;
  icon?: SvgComponent;
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();

  return (
    <BaseNavLink
      className={classes.link}
      activeClassName={classes.active}
      hasIcon
      {...props}
    >
      <Typography variant="body1">{props.children}</Typography>
    </BaseNavLink>
  );
};
