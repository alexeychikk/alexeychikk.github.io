import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    timeline: {
      margin: 0,
    },
    itemConnector: {
      backgroundColor: theme.palette.secondary.light,
    },
  }),
);
