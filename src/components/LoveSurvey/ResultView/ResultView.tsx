import React, { useMemo } from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

import { LoveAnswer, LOVE_SURVEY } from "~/config/loveSurvey";
import { Emoji } from "~/components/Emoji";
import { GrowingNumber } from "~/components/GrowingNumber";

import { HeartsProgress } from "../HeartsProgress";
import { useStyles } from "./ResultView.styles";

export interface ResultViewProps {
  className?: string;
  answers: Record<number, LoveAnswer[]>;
}

const ResultViewBase: React.FC<ResultViewProps> = (props) => {
  const classes = useStyles();

  const compatibilityPercent = useMemo(() => {
    const totalScore = LOVE_SURVEY.reduce(
      (sum, question) => sum + question.score,
      0
    );

    const respondentScore = Object.entries(props.answers).reduce(
      (sum, [index, answers]) => {
        const question = LOVE_SURVEY[+index];
        const questionImportance = question.score / totalScore;
        if (!questionImportance) return sum;
        const maxAnswerScore = question.answers?.reduce(
          (res, a) => Math.max(res, a.score || 0),
          0
        );
        if (!maxAnswerScore) return sum;
        const answersAverageMatch =
          answers.reduce((s, a) => s + (a.score || 0) / maxAnswerScore, 0) /
          answers.length;
        return sum + totalScore * questionImportance * answersAverageMatch;
      },
      0
    );

    return Math.min(100, Math.round((respondentScore / totalScore) * 100));
  }, [props.answers]);

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

      <div className={classes.conclusion}>
        {compatibilityPercent <= 15 && (
          <span>
            I don't think we are made for each other{" "}
            <Emoji label="sad">😞</Emoji>
          </span>
        )}
        {compatibilityPercent > 15 && compatibilityPercent <= 35 && (
          <span>
            These relationships are going to be tougher to navigate than a corn
            maze after a few too many drinks <Emoji label="monkey">🙈</Emoji>
          </span>
        )}
        {compatibilityPercent > 35 && compatibilityPercent < 50 && (
          <span>
            We have a decent chance of getting along{" "}
            <Emoji label="meh">🤔</Emoji>
          </span>
        )}
        {compatibilityPercent >= 50 && compatibilityPercent < 75 && (
          <span>
            Are you free next weekend? I know a nice place where we can discuss
            how you can improve your survey score <Emoji label="hmm">😏</Emoji>
          </span>
        )}
        {compatibilityPercent >= 75 && compatibilityPercent < 90 && (
          <span>
            Well, well, well, it looks like we've got some chemistry brewing
            here! Let's see where this attraction takes us{" "}
            <Emoji label="interesting">🙃</Emoji>
          </span>
        )}
        {compatibilityPercent >= 90 && compatibilityPercent < 100 && (
          <span>
            Holy cow, we're practically made for each other! I can't wait to see
            what kind of adventures we'll have together{" "}
            <Emoji label="wow">🤩</Emoji>
          </span>
        )}
        {compatibilityPercent === 100 && (
          <span>
            Marry me <Emoji label="ring">💍</Emoji>
          </span>
        )}
      </div>
    </div>
  );
};

export const ResultView = React.memo(ResultViewBase);
