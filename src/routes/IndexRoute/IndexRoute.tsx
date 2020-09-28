import React from 'react';

import { useStyles } from './IndexRoute.styles';
import { MySkills } from './MySkills';

export const IndexRoute: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MySkills />
    </div>
  );
};
