import React from "react";
import clsx from "clsx";

import { SkillItemElement } from "./SkillItem";
import { SkillsFolderElement } from "./SkillsFolder";

import { useStyles } from "./SkillsExplorer.styles";

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
