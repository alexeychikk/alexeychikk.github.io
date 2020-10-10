import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: theme.typography.h6.fontSize,
      paddingTop: theme.spacing(2),
      alignItems: 'start'
    },
    lines: {},
    line: {
      width: theme.spacing(7),
      textAlign: 'right',
      marginRight: theme.spacing(4),
      color: theme.palette.text.secondary
    },
    sampleLine: {
      position: 'fixed',
      top: '-100px',
      visibility: 'hidden'
    },
    childrenWrapper: {
      flex: 1,
      color: '#a9b7c6',
      maxWidth: '1024px',
      '& p': {
        margin: 0
      },
      '& b': {
        color: theme.palette.primary.main
      },
      '& strong': {
        color: theme.palette.primary.light,
        fontWeight: 'normal'
      },
      '& i': {
        color: theme.palette.secondary.light,
        fontStyle: 'normal'
      },
      '& em': {
        color: theme.palette.secondary.main,
        fontStyle: 'normal'
      }
    }
  })
);
