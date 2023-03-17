import React from "react";

import { useStyles } from "../CodeLikeBlock.styles";

/**
 * Comment syntax-highlighting component.
 */
export const Cm: React.FC = (props) => {
  const classes = useStyles();
  return <span className={classes.Cm}>// {props.children}</span>;
};
