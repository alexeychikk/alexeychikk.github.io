import React from 'react';

import { useStyles } from '../CodeLikeBlock.styles';

/**
 * String literal syntax-highlighting component.
 */
export const Sl: React.FC = (props) => {
  const classes = useStyles();
  return <span className={classes.Sl}>{props.children}</span>;
};
