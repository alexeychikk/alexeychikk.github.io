import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    resultView: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        height: '100%',
        justifyContent: 'center',
      },
    },
    conclusion: {
      marginTop: '1.2em',
      maxWidth: '70%',
      opacity: 0,
      animation: '1s ease-in-out 1s azFadeIn',
      animationFillMode: 'both',
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: '75%',
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
    },
    submitForm: {
      border: `1px solid`,
      borderRadius: '4px',
      borderColor: 'rgba(0,0,0,0)',
      marginTop: '1.5em',
      width: '88px',
      minWidth: '88px',
      height: '40px',
      minHeight: '40px',
      opacity: 0,
      overflow: 'hidden',
      animation: '1s ease-in-out 1.5s azFadeIn',
      animationFillMode: 'both',
      transition: 'all 1s ease-in-out',
      '&$isFormOpened:not($isSubmitDone)': {
        borderColor: theme.palette.divider,
        width: '200px',
        minWidth: '200px',
        height: '200px',
        minHeight: '200px',
      },
      '&$isSubmitDone:not($isFormOpened)': {
        animation: '1s ease-in-out 0s azFadeOut',
        pointerEvents: 'none',
      },
    },
    inputsWrapper: {
      overflow: 'hidden',
      height: 0,
      opacity: 0,
      transition: 'all 1s ease-in-out',
      '$isFormOpened:not($isSubmitDone) &': {
        animation: '1s ease-in-out 1s azFadeIn',
        animationFillMode: 'both',
        height: '140px',
      },
    },
    formInput: {
      // to override MuiFormControl-root
      '$inputsWrapper &': {
        margin: theme.spacing(1, 2),
      },
    },
    isFormOpened: {},
    isSubmitDone: {},
    submitButton: {
      '$isFormOpened &': {
        transition: 'all 1s ease-in-out',
      },
    },
    heartUnicode: {
      fontSize: '1.4em',
      lineHeight: 1,
      color: theme.palette.secondary.main,
    },
    snackbar: {
      textAlign: 'left',
    },
  }),
);
