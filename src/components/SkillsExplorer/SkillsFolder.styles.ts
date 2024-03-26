import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    skillsFolder: {
      position: 'relative',
      '&$expanded': {
        margin: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {},
    summaryRoot: {
      height: '26px',
      minHeight: '26px',
      cursor: 'pointer',
      padding: 0,
      '&::before': {
        content: "''",
        position: 'absolute',
        display: 'block',
        top: 0,
        height: '26px',
        left: '-2000px',
        right: '-2000px',
      },
      '&:hover::before': {
        backgroundColor: '#5f717630',
      },
      '&$expanded': {
        minHeight: '26px',
      },
    },
    summaryContent: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      '&$expanded': {
        margin: 0,
      },
    },
    expandIcon: {
      marginLeft: theme.spacing(-0.5),
      zIndex: 1,
      transform: 'rotate(-90deg)',
      transition: 'transform 250ms',
      '$summaryContent$expanded > &': {
        transform: 'rotate(0)',
      },
    },
    icon: {
      width: '22px',
      height: '22px',
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(1),
      zIndex: 1,
      '&:first-child': {
        marginLeft: 0,
      },
    },
    name: {
      lineHeight: 1,
      zIndex: 1,
    },
    hint: {
      marginLeft: '0.5em',
      color: theme.palette.text.secondary,
      lineHeight: '1.5',
      zIndex: 1,
    },
    childrenWrapper: {
      display: 'block',
      flexBasis: '100%',
      padding: theme.spacing(0.5, 0, 0.5, 1.5),
      zIndex: 1,
    },
  }),
);
