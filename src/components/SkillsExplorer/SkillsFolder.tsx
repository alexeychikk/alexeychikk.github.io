import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useCallback, useState } from "react";

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
  const [expanded, setExpanded] = useState<boolean>(true);
  const Icon = props.icon || FolderIcon;

  const handleExpandedChange = useCallback(
    (e: React.ChangeEvent<{}>, isExpanded: boolean) => {
      if (!props.expandable) {
        return;
      }
      setExpanded(isExpanded);
    },
    [props.expandable]
  );

  return (
    <Accordion
      classes={{
        root: classes.skillsFolder,
        expanded: classes.expanded,
      }}
      expanded={expanded}
      onChange={handleExpandedChange}
      elevation={0}
    >
      <AccordionSummary
        classes={{
          root: classes.summaryRoot,
          expanded: classes.expanded,
          content: classes.summaryContent,
        }}
      >
        {props.expandable && <ExpandMore className={classes.expandIcon} />}
        <Icon className={classes.icon} />
        <Typography className={classes.name} variant="body1">
          {props.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.childrenWrapper}>
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
};

SkillsFolderBase.defaultProps = {
  expandable: true,
};

export const SkillsFolder = React.memo(SkillsFolderBase);
