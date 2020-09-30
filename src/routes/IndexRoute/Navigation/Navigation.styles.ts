import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: 'rgb(37, 37, 38)',
      alignItems: 'center'
    }
  })
);
