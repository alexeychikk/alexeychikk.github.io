import { createStyles, makeStyles } from '@material-ui/core';

import { delayNthChildAnimation } from '~/utils/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    heartsProgress: {
      display: 'flex',
      alignItems: 'center',
    },
    heartsWrapper: {
      position: 'relative',
    },
    heartsEmpty: {
      display: 'flex',
    },
    heartsFilled: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
    heartBracket: {
      fontSize: '1.3em',
    },
    filledHeartIcon: {
      color: theme.palette.secondary.main,
      opacity: 0,
      animation: '0.2s ease-in-out azFadeIn',
      animationFillMode: 'both',
      ...delayNthChildAnimation(10, 0.1),
    },
    emptyHeartIcon: {
      opacity: 100,
    },
    fadeOutHeartIcon: {
      animation: '0.2s ease-in-out azFadeOut',
      animationFillMode: 'both',
      ...delayNthChildAnimation(10, 0.1),
    },
  }),
);
