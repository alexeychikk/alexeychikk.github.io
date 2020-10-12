import {
  Button,
  SwipeableDrawer,
  SwipeableDrawerProps,
  Toolbar,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";

import { isIOS } from "~/config/browser";

import { useStyles } from "./MobileDrawer.styles";

export interface MobileDrawerProps {
  anchor?: SwipeableDrawerProps["anchor"];
  children: React.ReactNode;
  className?: string;
  hasBackButton?: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = (props) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      classes={{
        paper: clsx(classes.mobileDrawerPaper, props.className),
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
      anchor={props.anchor}
    >
      {props.hasBackButton && (
        <Toolbar className={classes.toolbar}>
          <Button startIcon={<ArrowBackIos />} onClick={props.onClose}>
            Back
          </Button>
        </Toolbar>
      )}
      {props.children}
    </SwipeableDrawer>
  );
};

MobileDrawer.defaultProps = {
  hasBackButton: true,
};
