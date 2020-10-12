import { Drawer, Hidden } from "@material-ui/core";
import React from "react";
import cn from "classnames";

import { MobileDrawer } from "~/components/MobileDrawer";

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
    <nav className={cn(classes.responsiveDrawer, props.className)}>
      <Hidden mdUp>
        <MobileDrawer
          open={props.isMobileOpen}
          onOpen={props.onMobileOpen}
          onClose={props.onMobileClose}
        >
          {props.children}
        </MobileDrawer>
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
