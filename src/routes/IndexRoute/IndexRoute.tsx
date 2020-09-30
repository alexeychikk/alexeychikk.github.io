import { AppBar, Button, Hidden, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import React, { Suspense, useCallback, useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import FolderSrcIcon from '~/assets/icons/folder-src-open.svg';
import { ResponsiveDrawer } from '~/components/ResponsiveDrawer';
import AboutMe from '~/routes/AboutMe';
import Experience from '~/routes/Experience';
import Education from '~/routes/Education';
import Contacts from '~/routes/Contacts';

import { useStyles } from './IndexRoute.styles';
import { MySkills } from './MySkills';
import { Navigation } from './Navigation';

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
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default IndexRoute;
