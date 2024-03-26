import type React from 'react';

import ProjectsIcon from '~/assets/icons/folder-app-open.svg?react';

export type RouteMeta = {
  to: string;
  label: React.ReactNode;
  icon?: SvgComponent;
  activeOnlyWhenExact?: boolean;
  hidden?: boolean;
};

export const ROUTES_META: { [key: string]: RouteMeta } = {
  '/': {
    to: '/',
    label: 'About Me',
    activeOnlyWhenExact: true,
  },
  '/experience': {
    to: '/experience',
    label: 'Experience',
  },
  '/education': {
    to: '/education',
    label: 'Education',
  },
  '/contacts': {
    to: '/contacts',
    label: 'Contacts',
  },
  '/projects': {
    to: '/projects',
    label: 'Projects',
    icon: ProjectsIcon,
    hidden: true,
  },
};
