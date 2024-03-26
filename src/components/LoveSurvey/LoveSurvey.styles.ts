import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    loveSurvey: {
      height: '56px',
      padding: theme.spacing(1, 1, 0, 1),
    },
    loveButton: {
      marginLeft: 'auto',
      display: 'block',
      background:
        'linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,0),rgb(45,45,45),rgba(0,0,0,0),rgba(0,0,0,0))',
      backgroundSize: '400% auto',
      '$expanded &': {
        display: 'none',
      },
      '$loveSurvey:not($expanded)$loveSurvey:not($collapsed) &': {
        animation: '10s ease-in-out 3s $flickering',
      },
    },
    loveIcon: {
      color: 'rgb(45,45,45)',
      '$loveButton:hover &': {
        color: theme.palette.secondary.main,
      },
      '$expanded &': {
        display: 'none',
      },
    },
    contentWrapper: {
      position: 'absolute',
      bottom: 0,
      right: theme.spacing(1),
      backgroundColor: 'rgb(45,45,45)',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      animationDuration: '0.5s',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'both',
      overflow: 'hidden',
      opacity: 0,
      zIndex: -1,
      '$expanded &': {
        animationName: '$expansion',
      },
      '$collapsed &': {
        animationName: '$collapse',
        animationDelay: '0.3s',
      },
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
      '$expanded &': {
        opacity: 100,
        transitionDelay: '0.5s',
      },
      '$collapsed &': {
        transitionDelay: 0,
      },
    },
    title: {
      fontFamily: 'inherit',
    },
    topDivider: {
      marginBottom: theme.spacing(1),
    },
    dialogContent: {
      overflowX: 'hidden',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    expanded: {},
    collapsed: {},

    '@keyframes expansion': {
      '0%': {
        zIndex: 0,
        opacity: 100,
      },
      '40%': {
        borderRadius: '4px',
        opacity: 100,
      },
      '100%': {
        borderRadius: '4px',
        width: 'calc(100% - 16px)',
        height: '100%',
        opacity: 100,
        zIndex: 0,
      },
    },
    '@keyframes collapse': {
      '0%': {
        borderRadius: '4px',
        width: 'calc(100% - 16px)',
        height: '100%',
        opacity: 100,
        zIndex: 0,
      },
      '70%': {
        zIndex: 0,
        borderRadius: '4px',
        opacity: 80,
      },
      '99.9%': {
        zIndex: 0,
        opacity: 10,
      },
      '100%': {
        zIndex: -1,
      },
    },
    '@keyframes flickering': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '10%': {
        backgroundPosition: '-150% 50%',
      },
      '50%': {
        backgroundPosition: '-150% 50%',
      },
      '60%': {
        backgroundPosition: '0% 50%',
      },
    },
  }),
);
