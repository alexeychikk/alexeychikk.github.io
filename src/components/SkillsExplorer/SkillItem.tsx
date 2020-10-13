import { Typography } from "@material-ui/core";
import React from "react";

import { useStyles } from "./SkillItem.styles";

export interface SkillItemProps {
  children: React.ReactNode;
  icon: SvgComponent;
  hint?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export type SkillItemElement = React.ReactElement<SkillItemProps>;

const SkillItemBase: React.FC<SkillItemProps> = (props) => {
  const classes = useStyles();
  const Icon = props.icon;

  return (
    <div className={classes.skillItem} onClick={props.onClick}>
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
