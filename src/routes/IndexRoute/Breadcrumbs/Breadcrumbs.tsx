import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import JsonIcon from '~/assets/icons/json.svg';
import { routesMeta } from '~/config/routesMeta';

import { useStyles } from './Breadcrumbs.styles';

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = React.memo((props) => {
  const classes = useStyles();
  const location = useLocation();
  const route = routesMeta[location.pathname];
  const Icon = route.icon || JsonIcon;

  return (
    <MuiBreadcrumbs
      className={cn(classes.root, props.className)}
      separator={<NavigateNext />}
    >
      <Typography className={classes.item} variant="body1">
        src
      </Typography>
      <Typography className={cn(classes.item, classes.active)} variant="body1">
        <Icon className={classes.icon} />
        {route.label}
      </Typography>
    </MuiBreadcrumbs>
  );
});
