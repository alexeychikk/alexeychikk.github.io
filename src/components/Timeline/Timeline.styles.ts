import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    timeline: {
      padding: theme.spacing(0, 2, 0, 3),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
      },
    },
  }),
);
