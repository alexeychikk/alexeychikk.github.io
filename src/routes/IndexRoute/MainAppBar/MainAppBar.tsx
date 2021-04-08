import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  MailOutlineRounded,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as FolderSrcIcon } from "~/assets/icons/folder-src-open.svg";

import { Navigation } from "../Navigation";
import { Breadcrumbs } from "../Breadcrumbs";

import { useStyles } from "./MainAppBar.styles";

export interface MainAppBarProps {
  className?: string;
  onSkillsDrawerOpen: () => void;
  onNavigationDrawerOpen: () => void;
}

const MainAppBarBase: React.FC<MainAppBarProps> = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.headingWrapper}>
          <Hidden mdUp>
            <FolderSrcIcon
              className={classes.folderIcon}
              onClick={props.onSkillsDrawerOpen}
            />
          </Hidden>
          <Typography className={classes.myName} variant="subtitle1">
            <Link to="/">Alex Zinkevych</Link>
          </Typography>
          <Hidden smDown>
            <a
              href="https://github.com/alexeychikk"
              target="_blank"
              rel="external nofollow"
            >
              <IconButton aria-label="GitHub">
                <GitHub />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-zinkevych/"
              target="_blank"
              rel="external nofollow"
            >
              <IconButton aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </a>
            <a href="mailto:alexdarkmm@gmail.com" target="_blank">
              <IconButton aria-label="E-Mail">
                <MailOutlineRounded />
              </IconButton>
            </a>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open navigation drawer"
              onClick={props.onNavigationDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
        <Hidden smDown>
          <Navigation className={classes.navigation} />
        </Hidden>
      </Toolbar>
      <Hidden mdUp>
        <Breadcrumbs className={classes.mobileBreadcrumbs} />
      </Hidden>
    </AppBar>
  );
};

export const MainAppBar = React.memo(MainAppBarBase);
