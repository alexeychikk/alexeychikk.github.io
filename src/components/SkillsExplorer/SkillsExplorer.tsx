import clsx from 'clsx';
import React from 'react';

import type { SkillItemElement } from './SkillItem';
import { useStyles } from './SkillsExplorer.styles';
import type { SkillsFolderElement } from './SkillsFolder';

export interface SkillsExplorerProps {
  className?: string;
  children:
    | SkillItemElement
    | SkillItemElement[]
    | SkillsFolderElement
    | SkillsFolderElement[];
}

export const SkillsExplorer: React.FC<SkillsExplorerProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={clsx(classes.skillsExplorer, props.className)}>
      <div className={classes.childrenWrapper}>{props.children}</div>
    </div>
  );
};
