import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    toolbar: {
      padding: 0
    },
    heading: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      lineHeight: 1,
      textTransform: 'uppercase',
      paddingLeft: theme.spacing(2.5),
      backgroundColor: theme.palette.background.paper,
      height: '46px',
      width: '320px',
      '& > *': {
        color: '#fff',
        textDecoration: 'none'
      }
    }
  })
);
