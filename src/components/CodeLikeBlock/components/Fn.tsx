import React from "react";

import { useStyles } from "../CodeLikeBlock.styles";

export const Fn: React.FC = (props) => {
  const classes = useStyles();
  return <span className={classes.Fn}>{props.children}</span>;
};
