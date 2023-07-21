import React, { useMemo } from "react";
import clsx from "clsx";
import { useAsyncFn } from "react-use";
import { Typography } from "@material-ui/core";

import { LoveAnswer } from "~/config/loveSurvey";
import { GrowingNumber } from "~/components/GrowingNumber";

import { HeartsProgress } from "../HeartsProgress";
import { useStyles } from "./ResultView.styles";
import {
  calculateCompatibilityPercent,
  prepareAnswersForSubmit,
} from "./helpers";
import { Conclusion } from "./Conclusion";
import { SubmitForm, SubmitUser } from "./SubmitForm";

export interface ResultViewProps {
  className?: string;
  answers: Record<number, LoveAnswer[]>;
}

const ResultViewBase: React.FC<ResultViewProps> = (props) => {
  const classes = useStyles();

  const compatibilityPercent = useMemo(
    () => calculateCompatibilityPercent(props.answers),
    [props.answers]
  );

  const [submitState, submit] = useAsyncFn(
    async ({ name, email }: SubmitUser) => {
      await fetch(`${process.env.REACT_APP_API_URL}/portfolio/love-survey`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          compatibilityPercent,
          answers: prepareAnswersForSubmit(props.answers),
        }),
        headers: { "Content-Type": "application/json" },
      });
      return true;
    },
    [props.answers]
  );

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
    </div>
  );
};

export const ResultView = React.memo(ResultViewBase);
