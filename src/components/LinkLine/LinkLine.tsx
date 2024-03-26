import clsx from 'clsx';
import React from 'react';

import { useStyles } from './LinkLine.styles';

import type { LProps } from '~/components/CodeLikeBlock';
import { L } from '~/components/CodeLikeBlock';
import type { LinkOpenProps } from '~/components/LinkOpen';
import { LinkOpen } from '~/components/LinkOpen';

export interface LinkLineProps extends LProps, LinkOpenProps {
  label: React.ReactNode;
}

const LinkLineBase: React.FC<LinkLineProps> = ({
  className,
  label,
  to,
  hasLinkIcon,
  children,
  external,
  ...props
}) => {
  const classes = useStyles();
  return (
    <L className={clsx(classes.linkLine, className)} {...props}>
      <span>{label}:</span>{' '}
      <LinkOpen to={to} hasLinkIcon={hasLinkIcon} external={external}>
        {children}
      </LinkOpen>
    </L>
  );
};

export const LinkLine = React.memo(LinkLineBase);
