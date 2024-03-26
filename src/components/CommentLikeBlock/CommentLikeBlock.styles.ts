import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    commentLikeBlock: {
      fontFamily: 'IBM Plex Mono',
      color: '#a9b7c6',
      fontSize: theme.typography.body1.fontSize,
      maxWidth: '800px',
      position: 'relative',
    },
    slash: {
      color: theme.palette.text.secondary,
    },
    line: {
      position: 'absolute',
      top: '1.1em',
      bottom: '1.4em',
      left: '0.8em',
      width: '1px',
      backgroundColor: theme.palette.text.secondary,
    },
    childrenWrapper: {
      fontSize: 'inherit',
      paddingLeft: '1.5em',
    },
  }),
);
