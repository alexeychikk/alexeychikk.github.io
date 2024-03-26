import {
  Breadcrumbs as MuiBreadcrumbs,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useStyles } from './Breadcrumbs.styles';

import JsonIcon from '~/assets/icons/json.svg?react';
import { ROUTES_META } from '~/config/routesMeta';

interface BreadcrumbsProps {
  className?: string;
}

const BreadcrumbsBase: React.FC<BreadcrumbsProps> = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const route = ROUTES_META[location.pathname];
  const Icon = route.icon || JsonIcon;

  const restRoutes = useMemo(
    () => Object.values(ROUTES_META).filter((r) => r !== route),
    [route],
  );

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => setMenuAnchorEl(null), []);

  return (
    <>
      <MuiBreadcrumbs
        className={clsx(classes.breadcrumbs, props.className)}
        separator={<NavigateNext />}
      >
        <Typography className={classes.item} variant="body1">
          src
        </Typography>
        <Typography
          className={clsx(classes.item, classes.active)}
          variant="body1"
          onClick={handleMenuOpen}
        >
          <Icon className={classes.icon} />
          {route.label}
        </Typography>
      </MuiBreadcrumbs>

      <Menu
        getContentAnchorEl={null}
        anchorEl={menuAnchorEl}
        keepMounted
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          className: classes.menu,
        }}
        autoFocus={false}
      >
        {restRoutes.map(({ to, label, icon: RIcon = JsonIcon }) => (
          <MenuItem key={to} onClick={handleMenuClose}>
            <Link className={classes.link} to={to}>
              <Typography className={classes.item} variant="body1">
                <RIcon className={classes.icon} />
                {label}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const Breadcrumbs = React.memo(BreadcrumbsBase);
