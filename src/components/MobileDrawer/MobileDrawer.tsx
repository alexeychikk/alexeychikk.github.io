import { SwipeableDrawer } from "@material-ui/core";
import React from "react";
import cn from "classnames";

import { isIOS } from "~/config/browser";

import { useStyles } from "./MobileDrawer.styles";

export interface MobileDrawerProps {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = (props) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      classes={{
        paper: cn(classes.mobileDrawerPaper, props.className),
      }}
      variant="temporary"
      open={props.open}
      onOpen={props.onOpen}
      onClose={props.onClose}
      disableBackdropTransition={!isIOS}
      disableDiscovery={isIOS}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {props.children}
    </SwipeableDrawer>
  );
};
