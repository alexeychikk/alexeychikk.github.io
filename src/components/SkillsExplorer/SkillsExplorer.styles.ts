import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    childrenWrapper: {
      flex: 1,
      padding: theme.spacing(1, 1.5, 0, 2.5),
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  })
);
