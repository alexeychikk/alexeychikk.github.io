import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    drawerPaper: {
      borderRight: 'none',
      width: '320px'
    }
  })
);
