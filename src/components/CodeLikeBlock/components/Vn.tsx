import React from "react";

import { useStyles } from "../CodeLikeBlock.styles";

export const Vn: React.FC = (props) => {
  const classes = useStyles();
  return <span className={classes.Vn}>{props.children}</span>;
};
