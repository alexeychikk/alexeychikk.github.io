import React from "react";

import { useStyles } from "../CodeLikeBlock.styles";

export const Kw: React.FC = (props) => {
  const classes = useStyles();
  return <span className={classes.Kw}>{props.children}</span>;
};
