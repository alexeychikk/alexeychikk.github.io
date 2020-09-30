import React from 'react';
import cn from 'classnames';

import { useStyles } from './Navigation.styles';
import { NavLink } from './NavLink';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={cn(classes.root, props.className)}>
      <NavLink to="/" activeOnlyWhenExact>
        About Me
      </NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  );
};
