import { Typography } from '@material-ui/core';
import React from 'react';
import cn from 'classnames';

import { SkillItemElement } from './SkillItem';
import { SkillsFolderElement } from './SkillsFolder';

import { useStyles } from './SkillsExplorer.styles';

export type SkillsExplorerProps = {
  className?: string;
  children:
    | SkillItemElement
    | SkillItemElement[]
    | SkillsFolderElement
    | SkillsFolderElement[];
  heading: React.ReactNode;
};

export const SkillsExplorer: React.FC<SkillsExplorerProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={cn(classes.root, props.className)}>
      <Typography className={classes.heading} variant="subtitle1">
        {props.heading}
      </Typography>
      <div className={classes.childrenWrapper}>{props.children}</div>
    </div>
  );
};
