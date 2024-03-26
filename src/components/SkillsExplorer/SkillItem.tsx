import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './SkillItem.styles';

export interface SkillItemProps {
  children: React.ReactNode;
  icon: SvgComponent;
  hint?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active?: boolean;
}

export type SkillItemElement = React.ReactElement<SkillItemProps>;

const SkillItemBase: React.FC<SkillItemProps> = (props) => {
  const classes = useStyles();
  const Icon = props.icon;

  return (
    <div
      className={clsx(classes.skillItem, props.active && classes.active)}
      onClick={props.onClick}
    >
      <Icon className={classes.icon} />
      <Typography className={classes.childrenWrapper} variant="body1">
        {props.children}
      </Typography>
      {props.hint && (
        <Typography className={classes.hint} variant="body2">
          {props.hint}
        </Typography>
      )}
    </div>
  );
};

export const SkillItem = React.memo(SkillItemBase);
