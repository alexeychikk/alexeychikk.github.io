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
    heading: {
      flex: 1,
      color: '#fff',
      lineHeight: 1,
      textTransform: 'uppercase',
      padding: theme.spacing(1.5, 2.5),
      backgroundColor: theme.palette.background.paper,
      zIndex: 2,
      top: 0,
      '& > *': {
        color: '#fff',
        textDecoration: 'none'
      }
    },
    childrenWrapper: {
      padding: theme.spacing(0, 2.5),
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  })
);
