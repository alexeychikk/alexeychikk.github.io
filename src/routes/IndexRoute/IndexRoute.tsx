import { AppBar, Button, Hidden, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import FolderSrcIcon from '~/src/assets/icons/folder-src-open.svg';
import { ResponsiveDrawer } from '~/src/components/ResponsiveDrawer';

import { useStyles } from './IndexRoute.styles';
import { MySkills } from './MySkills';
import { Navigation } from './Navigation';
import { Breadcrumbs } from './Breadcrumbs';
import { ContentRoutes } from './ContentRoutes';

export const IndexRoute: React.FC = () => {
  const classes = useStyles();

  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const openMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(true);
  }, []);
  const closeMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(false);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.headingWrapper}>
            <Hidden mdUp>
              <FolderSrcIcon
                className={classes.toolbarIcon}
                onClick={openMobileDrawer}
              />
            </Hidden>
            <Typography variant="subtitle1">
              <Link to="/">Alex Zinkevych</Link>
            </Typography>
          </div>
          <Navigation className={classes.navigation} />
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer
        isMobileOpen={isMobileDrawerOpen}
        onMobileOpen={openMobileDrawer}
        onMobileClose={closeMobileDrawer}
      >
        <Hidden mdUp>
          <Toolbar className={classes.mobileDrawerToolbar}>
            <Button startIcon={<ArrowBackIos />} onClick={closeMobileDrawer}>
              Back
            </Button>
          </Toolbar>
        </Hidden>
        <Hidden smDown>
          <Toolbar /> {/* For proper top gap */}
        </Hidden>
        <MySkills />
      </ResponsiveDrawer>

      <div className={classes.content}>
        <Toolbar /> {/* For proper top gap */}
        <Breadcrumbs />
        <ContentRoutes />
      </div>
    </div>
  );
};

export default IndexRoute;
