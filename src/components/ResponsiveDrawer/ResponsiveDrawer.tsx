import { Drawer, Hidden, SwipeableDrawer } from "@material-ui/core";
import React from "react";
import cn from "classnames";

import { useStyles } from "./ResponsiveDrawer.styles";

export interface ResponsiveDrawerProps {
  children: React.ReactNode;
  className?: string;
  isMobileOpen: boolean;
  onMobileOpen: () => void;
  onMobileClose: () => void;
}

const ResponsiveDrawerBase: React.FC<ResponsiveDrawerProps> = (props) => {
  const classes = useStyles();

  return (
    <nav className={cn(classes.root, props.className)}>
      <Hidden mdUp>
        <SwipeableDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="temporary"
          open={props.isMobileOpen}
          onOpen={props.onMobileOpen}
          onClose={props.onMobileClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {props.children}
        </SwipeableDrawer>
      </Hidden>

      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
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

export const ResponsiveDrawer = React.memo(ResponsiveDrawerBase);
