import { Hidden, Toolbar } from "@material-ui/core";
import React, { useCallback, useState } from "react";

import { ResponsiveDrawer } from "~/components/ResponsiveDrawer";

import { useStyles } from "./IndexRoute.styles";
import { MainAppBar } from "./MainAppBar";
import { MySkills } from "./MySkills";
import { NavigationDrawer } from "./NavigationDrawer";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentRoutes } from "./ContentRoutes";

export const IndexRoute: React.FC = () => {
  const classes = useStyles();

  const [isSkillsDrawerOpen, setSkillsDrawerOpen] = useState(false);
  const [isNavigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

  const openSkillsDrawer = useCallback(() => {
    setSkillsDrawerOpen(true);
  }, []);
  const closeSkillsDrawer = useCallback(() => {
    setSkillsDrawerOpen(false);
  }, []);
  const openNavigationDrawer = useCallback(() => {
    setNavigationDrawerOpen(true);
  }, []);
  const closeNavigationDrawer = useCallback(() => {
    setNavigationDrawerOpen(false);
  }, []);

  return (
    <div className={classes.indexRoute}>
      <MainAppBar
        onNavigationDrawerOpen={openNavigationDrawer}
        onSkillsDrawerOpen={openSkillsDrawer}
      />

      <ResponsiveDrawer
        isMobileOpen={isSkillsDrawerOpen}
        onMobileOpen={openSkillsDrawer}
        onMobileClose={closeSkillsDrawer}
      >
        <Hidden smDown>
          <Toolbar /> {/* For proper top gap */}
        </Hidden>
        <MySkills />
      </ResponsiveDrawer>

      <NavigationDrawer
        open={isNavigationDrawerOpen}
        onOpen={openNavigationDrawer}
        onClose={closeNavigationDrawer}
      />

      <div className={classes.content}>
        <Toolbar /> {/* For proper top gap */}
        <Hidden smDown>
          <Breadcrumbs />
        </Hidden>
        <ContentRoutes />
      </div>
    </div>
  );
};

export default IndexRoute;
