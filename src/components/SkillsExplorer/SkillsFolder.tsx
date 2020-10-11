import { Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";

import { ReactComponent as FolderIcon } from "~/assets/icons/folder-open.svg";

import { SkillItemElement } from "./SkillItem";
import { useStyles } from "./SkillsFolder.styles";

export interface SkillsFolderProps {
  children:
    | SkillsFolderElement
    | SkillsFolderElement[]
    | SkillItemElement
    | SkillItemElement[];
  name: React.ReactNode;
  icon?: SvgComponent;
  expandable?: boolean;
}

export type SkillsFolderElement = React.ReactElement<SkillsFolderProps>;

const SkillsFolderBase: React.FC<SkillsFolderProps> = (props) => {
  const classes = useStyles();
  const Icon = props.icon || FolderIcon;

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        {props.expandable && <ExpandMore className={classes.expandIcon} />}
        <Icon className={classes.icon} />
        <Typography className={classes.name} variant="body1">
          {props.name}
        </Typography>
      </div>
      <div className={classes.childrenWrapper}>{props.children}</div>
    </div>
  );
};

SkillsFolderBase.defaultProps = {
  expandable: true,
};

export const SkillsFolder = React.memo(SkillsFolderBase);
