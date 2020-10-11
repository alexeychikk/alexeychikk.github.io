import React from "react";

import { useStyles } from "../CodeLikeBlock.styles";

export const Sl: React.FC = (props) => {
  const classes = useStyles();
  return <span className={classes.Sl}>{props.children}</span>;
};
