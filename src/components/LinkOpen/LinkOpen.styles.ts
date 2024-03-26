import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    linkOpen: {
      whiteSpace: 'nowrap',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.light,
      },
      '& > *': {
        fontSize: 'inherit',
        display: 'inline-block',
        verticalAlign: 'bottom',
      },
      '& svg': {
        position: 'relative',
      },
    },
    icon: {
      marginLeft: '0.5em',
    },
  }),
);
