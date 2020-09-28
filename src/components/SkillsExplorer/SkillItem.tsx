import { Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './SkillItem.styles';

export type SkillItemProps = {
  icon: SvgComponent;
  hint?: React.ReactNode;
};

export type SkillItemElement = React.ReactElement<SkillItemProps>;

export const SkillItem: React.FC<SkillItemProps> = (props) => {
  const classes = useStyles();
  const Icon = props.icon;

  return (
    <div className={classes.root}>
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
