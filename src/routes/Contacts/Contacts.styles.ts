import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    mapWrapper: {
      width: '100%',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    map: {
      order: 2,
      [theme.breakpoints.up('lg')]: {
        width: '60%',
      },
    },
    contactInfo: {
      order: 1,
      [theme.breakpoints.up('lg')]: {
        order: 3,
      },
    },
  }),
);
