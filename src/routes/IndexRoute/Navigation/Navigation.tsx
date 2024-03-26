import clsx from 'clsx';
import React from 'react';

import { useStyles } from './Navigation.styles';
import { NavLink } from './NavLink';

import { useRoutesMeta } from '~/hooks';

interface NavigationProps {
  className?: string;
}

const NavigationBase: React.FC<NavigationProps> = (props) => {
  const classes = useStyles();
  const routes = useRoutesMeta();

  return (
    <div className={clsx(classes.navigation, props.className)}>
      {routes.map((route) => (
        <NavLink
          key={route.to}
          to={route.to}
          icon={route.icon}
          activeOnlyWhenExact={route.activeOnlyWhenExact}
        >
          {route.label}
        </NavLink>
      ))}
    </div>
  );
};

export const Navigation = React.memo(NavigationBase);
