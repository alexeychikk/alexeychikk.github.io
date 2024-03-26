import {
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  LinearProgress,
  Divider,
} from '@material-ui/core';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import React, { useState, useCallback } from 'react';

import { useStyles } from './LoveSurvey.styles';
import { QuestionView } from './QuestionView';
import { ResultView } from './ResultView';

import { Emoji } from '~/components/Emoji';
import { IS_DEV } from '~/config/browser';
import type { LoveAnswer } from '~/config/loveSurvey';
import { LOVE_SURVEY, INITIAL_ANSWERS } from '~/config/loveSurvey';

interface LoveSurveyProps {
  className?: string;
}

const LoveSurveyBase: React.FC<LoveSurveyProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [wasExpandedBefore, setWasExpandedBefore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    IS_DEV ? LOVE_SURVEY.length - 1 : 0,
  );
  const [answers, setAnswers] =
    useState<Record<number, LoveAnswer[]>>(INITIAL_ANSWERS);
  const question = LOVE_SURVEY[currentQuestionIndex];
  const prevQuestion = LOVE_SURVEY[currentQuestionIndex - 1];
  const totalIncompatibility =
    !!prevQuestion?.doesWrongAnswerTriggerEnd &&
    !answers[currentQuestionIndex - 1][0].score;

  const openSurvey = useCallback(() => {
    setExpanded(true);
    setWasExpandedBefore(true);
  }, []);

  const closeSurvey = useCallback(() => {
    setExpanded(false);
  }, []);

  const goNext = useCallback(() => {
    if (currentQuestionIndex === LOVE_SURVEY.length) return;
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }, [currentQuestionIndex]);

  const goBack = useCallback(() => {
    if (currentQuestionIndex === 0) return;
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }, [currentQuestionIndex]);

  const handleAnswersChange = useCallback(
    (newAnswers: LoveAnswer[]) => {
      setAnswers({ ...answers, [currentQuestionIndex]: newAnswers });
    },
    [currentQuestionIndex, answers],
  );

  return (
    <div
      className={clsx(
        classes.loveSurvey,
        expanded && classes.expanded,
        !expanded && wasExpandedBefore && classes.collapsed,
        props.className,
      )}
    >
      <IconButton
        className={classes.loveButton}
        onClick={openSurvey}
        disableRipple
      >
        <FavoriteBorderIcon className={classes.loveIcon} />
      </IconButton>

      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <DialogTitle className={classes.title} disableTypography>
            The <Emoji label="love">❤️</Emoji> survey
            <IconButton className={classes.closeButton} onClick={closeSurvey}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <Divider className={classes.topDivider} />

          <DialogContent className={classes.dialogContent}>
            {!totalIncompatibility &&
              currentQuestionIndex < LOVE_SURVEY.length && (
                <QuestionView
                  question={question}
                  answers={answers[currentQuestionIndex]}
                  onAnswersChange={handleAnswersChange}
                />
              )}
            {currentQuestionIndex === LOVE_SURVEY.length && (
              <ResultView answers={answers} />
            )}
            {totalIncompatibility && (
              <Typography gutterBottom variant="h5">
                {prevQuestion.wrongAnswerInfo || (
                  <>
                    Sorry, we are totally incompatible{' '}
                    <Emoji label="oops">🤷‍♂️</Emoji>
                  </>
                )}
              </Typography>
            )}
          </DialogContent>

          {currentQuestionIndex < LOVE_SURVEY.length && (
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={(currentQuestionIndex / LOVE_SURVEY.length) * 100}
            />
          )}

          {currentQuestionIndex < LOVE_SURVEY.length && (
            <DialogActions>
              {currentQuestionIndex > 0 && (
                <Button autoFocus onClick={goBack} color="secondary">
                  Back
                </Button>
              )}

              <Button
                autoFocus
                onClick={goNext}
                color="primary"
                variant="contained"
                disabled={
                  totalIncompatibility ||
                  (!!question.answers?.length && !answers[currentQuestionIndex])
                }
              >
                Next
              </Button>
            </DialogActions>
          )}
        </div>
      </div>
    </div>
  );
};

export const LoveSurvey = React.memo(LoveSurveyBase);
