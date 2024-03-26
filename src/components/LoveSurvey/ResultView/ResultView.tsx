import { Snackbar, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import clsx from 'clsx';
import React, { useEffect, useMemo } from 'react';
import { useAsyncFn, useToggle } from 'react-use';

import { HeartsProgress } from '../HeartsProgress';

import { Conclusion } from './Conclusion';
import {
  calculateCompatibilityPercent,
  prepareAnswersForSubmit,
} from './helpers';
import { useStyles } from './ResultView.styles';
import type { SubmitUser } from './SubmitForm';
import { SubmitForm } from './SubmitForm';

import { GrowingNumber } from '~/components/GrowingNumber';
import type { LoveAnswer } from '~/config/loveSurvey';

export interface ResultViewProps {
  className?: string;
  answers: Record<number, LoveAnswer[]>;
}

const ResultViewBase: React.FC<ResultViewProps> = (props) => {
  const classes = useStyles();

  const [isSnackbarOpen, toggleSnackbarOpen] = useToggle(false);

  const compatibilityPercent = useMemo(
    () => calculateCompatibilityPercent(props.answers),
    [props.answers],
  );

  const [submitState, submit] = useAsyncFn(
    async ({ name, email }: SubmitUser) => {
      await fetch(`${import.meta.env.VITE_APP_API_URL}/portfolio/love-survey`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          compatibilityPercent,
          answers: prepareAnswersForSubmit(props.answers),
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      toggleSnackbarOpen(false);
      return true;
    },
    [props.answers],
  );

  useEffect(() => {
    if (submitState.loading) {
      const timeout = setTimeout(toggleSnackbarOpen, 2000, true);
      return () => {
        clearTimeout(timeout);
        toggleSnackbarOpen(false);
      };
    }
  }, [submitState.loading]);

  return (
    <div className={clsx(classes.resultView, props.className)}>
      <Typography color="primary" variant="h3" gutterBottom>
        <GrowingNumber
          to={compatibilityPercent}
          duration={compatibilityPercent <= 3 ? 200 : 1000}
        />
        %
      </Typography>

      <HeartsProgress percentage={compatibilityPercent} />

      <Conclusion compatibilityPercent={compatibilityPercent} />

      <SubmitForm submitState={submitState} onSubmit={submit} />

      <Snackbar
        className={classes.snackbar}
        open={isSnackbarOpen}
        autoHideDuration={10000}
        onClose={toggleSnackbarOpen}
      >
        <Alert severity="info" variant="outlined" onClose={toggleSnackbarOpen}>
          <AlertTitle>It is waking up...</AlertTitle>
          My web-service is running on a free hosting so it may be waking up.
          <br />
          This might take about 30 seconds for the first time.
        </Alert>
      </Snackbar>
    </div>
  );
};

export const ResultView = React.memo(ResultViewBase);
