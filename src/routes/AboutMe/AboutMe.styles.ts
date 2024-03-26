import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      width: '1.2em',
      height: '1.2em',
      display: 'inline',
      marginBottom: '-0.25em',
    },
  }),
);
