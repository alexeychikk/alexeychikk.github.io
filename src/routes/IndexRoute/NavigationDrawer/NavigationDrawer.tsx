import { Divider, Hidden, List } from "@material-ui/core";
import React from "react";
import { LinkedIn, GitHub, MailOutlineRounded } from "@material-ui/icons";

import { ROUTES_META } from "~/config/routesMeta";
import { MobileDrawer } from "~/components/MobileDrawer";

import { ListItemLink } from "./ListItemLink";

interface NavigationDrawerProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NavigationDrawerBase: React.FC<NavigationDrawerProps> = (props) => {
  return (
    <Hidden mdUp>
      <MobileDrawer
        anchor="right"
        open={props.open}
        onOpen={props.onOpen}
        onClose={props.onClose}
      >
        <List>
          {Object.values(ROUTES_META).map(({ label, ...rest }) => (
            <ListItemLink key={rest.to} onClick={props.onClose} {...rest}>
              {label}
            </ListItemLink>
          ))}
        </List>

        <Divider />

        <List>
          <ListItemLink
            onClick={props.onClose}
            icon={GitHub}
            isExternal
            target="_blank"
            to="https://github.com/alexeychikk"
          >
            GitHub
          </ListItemLink>
          <ListItemLink
            onClick={props.onClose}
            icon={LinkedIn}
            isExternal
            target="_blank"
            to="https://www.linkedin.com/in/alex-zinkevych/"
          >
            LinkedIn
          </ListItemLink>
          <ListItemLink
            onClick={props.onClose}
            icon={MailOutlineRounded}
            isExternal
            target="_blank"
            to="mailto:alexdarkmm@gmail.com"
          >
            alexdarkmm@gmail.com
          </ListItemLink>
        </List>
      </MobileDrawer>
    </Hidden>
  );
};

export const NavigationDrawer = React.memo(NavigationDrawerBase);
