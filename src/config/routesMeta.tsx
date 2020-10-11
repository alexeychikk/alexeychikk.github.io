import React from "react";

export type RouteMeta = {
  to: string;
  label: React.ReactNode;
  icon?: SvgComponent;
  activeOnlyWhenExact?: boolean;
};

export const routesMeta: { [key: string]: RouteMeta } = {
  "/": {
    to: "/",
    label: "About Me",
    activeOnlyWhenExact: true,
  },
  "/experience": {
    to: "/experience",
    label: "Experience",
  },
  "/education": {
    to: "/education",
    label: "Education",
  },
  "/contacts": {
    to: "/contacts",
    label: "Contacts",
  },
};
