import React from "react";
import { Emoji } from "~/components/Emoji";

import { useStyles } from "./ResultView.styles";

export interface ConclusionProps {
  compatibilityPercent: number;
}

const ConclusionBase: React.FC<ConclusionProps> = ({
  compatibilityPercent,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.conclusion}>
      {compatibilityPercent <= 15 && (
        <span>
          I don't think we are made for each other <Emoji label="sad">😞</Emoji>
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
          We have a decent chance of getting along <Emoji label="meh">🤔</Emoji>
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
          Well, well, well, it looks like we've got some chemistry brewing here!
          Let's see where this attraction takes us{" "}
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
  );
};

export const Conclusion = React.memo(ConclusionBase);
