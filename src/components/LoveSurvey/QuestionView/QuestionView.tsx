import React, { useCallback } from "react";
import clsx from "clsx";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@material-ui/core";

import {
  LoveQuestion,
  LoveAnswer,
  LoveQuestionType,
} from "~/config/loveSurvey";

import { useStyles } from "./QuestionView.styles";

export interface QuestionViewProps {
  className?: string;
  question: LoveQuestion;
  answers?: LoveAnswer[];
  onAnswersChange: (answers: LoveAnswer[], question: LoveQuestion) => void;
}

const QuestionViewBase: React.FC<QuestionViewProps> = (props) => {
  const classes = useStyles();

  const handleRadioAnswer = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const answer = props.question.answers![+event.target.value];
      props.onAnswersChange([answer], props.question);
    },
    [props.question, props.onAnswersChange]
  );

  const handleCheckAnswer = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const answer = props.question.answers![+event.target.value];
      const newAnswers = props.answers?.includes(answer)
        ? props.answers.filter((a) => a !== answer)
        : (props.answers || []).concat(answer);
      props.onAnswersChange(newAnswers, props.question);
    },
    [props.question, props.answers, props.onAnswersChange]
  );

  return (
    <div className={clsx(classes.loveQuestion, props.className)}>
      <Typography gutterBottom variant="h5">
        {props.question.title}
      </Typography>
      {!!props.question.description && (
        <Typography gutterBottom variant="body1">
          {props.question.description}
        </Typography>
      )}

      {props.question.type === LoveQuestionType.Radio && (
        <RadioGroup
          value={
            props.answers?.[0]
              ? props.question.answers?.indexOf(props.answers[0])
              : -1
          }
          onChange={handleRadioAnswer}
        >
          {props.question.answers?.map((answer, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={answer.title}
            />
          ))}
        </RadioGroup>
      )}

      {props.question.type === LoveQuestionType.Check && (
        <FormGroup>
          {props.question.answers?.map((answer, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={!!props.answers?.includes(answer)}
                  onChange={handleCheckAnswer}
                  value={index}
                />
              }
              label={answer.title}
            />
          ))}
        </FormGroup>
      )}
    </div>
  );
};

export const QuestionView = React.memo(QuestionViewBase);
