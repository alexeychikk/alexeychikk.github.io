import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { ResponsiveDrawer } from '~/components/ResponsiveDrawer';

import { useStyles } from './IndexRoute.styles';
import { MySkills } from './MySkills';

export const IndexRoute: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.heading} variant="subtitle1">
            <Link to="/">Alex Zinkevych</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer>
        <Toolbar />
        <MySkills />
      </ResponsiveDrawer>
    </div>
  );
};

export default IndexRoute;
