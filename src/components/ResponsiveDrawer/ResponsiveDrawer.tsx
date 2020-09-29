import { Drawer, Hidden } from '@material-ui/core';
import React, { useCallback } from 'react';
import cn from 'classnames';

import { useStyles } from './ResponsiveDrawer.styles';

export interface ResponsiveDrawerProps {
  className?: string;
}

export const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = (props) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <nav className={cn(classes.root, props.className)}>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {props.children}
        </Drawer>
      </Hidden>

      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {props.children}
        </Drawer>
      </Hidden>
    </nav>
  );
};
