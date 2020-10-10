import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'relative'
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '26px',
      cursor: 'pointer',
      '&::before': {
        content: "''",
        position: 'absolute',
        display: 'block',
        top: 0,
        height: '26px',
        left: '-2000px',
        right: '-2000px'
      },
      '&:hover::before': {
        backgroundColor: '#5f717630'
      }
    },
    expandIcon: {
      marginLeft: theme.spacing(-0.5),
      zIndex: 1
    },
    icon: {
      width: '22px',
      height: '22px',
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(1),
      zIndex: 1,
      '&:first-child': {
        marginLeft: 0
      }
    },
    name: {
      lineHeight: 1,
      zIndex: 1
    },
    childrenWrapper: {
      flexBasis: '100%',
      padding: theme.spacing(0.5, 0, 0.5, 1.5),
      zIndex: 1
    }
  })
);
