import type { ComponentType } from 'svelte';

import IconFolderAppOpen from '../assets/icons/folder-app-open.svg?component';

export type RouteMeta = {
  to: string;
  label: string;
  icon?: ComponentType;
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
    icon: IconFolderAppOpen,
    hidden: true,
  },
};
