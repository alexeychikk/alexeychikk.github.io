import { LoveAnswer, LOVE_SURVEY } from "~/config/loveSurvey";
import { reactNodeToString } from "~/utils/react";

const TOTAL_SCORE = LOVE_SURVEY.reduce(
  (sum, question) => sum + question.score,
  0
);

export function calculateCompatibilityPercent(
  answers: Record<number, LoveAnswer[]>
) {
  const respondentScore = Object.entries(answers).reduce(
    (sum, [index, questionAnswers]) => {
      const question = LOVE_SURVEY[+index];
      const questionImportance = question.score / TOTAL_SCORE;
      if (!questionImportance) return sum;

      const maxAnswerScore = question.answers?.reduce(
        (res, a) => Math.max(res, a.score || 0),
        0
      );
      if (!maxAnswerScore) return sum;

      const answersAverageMatch =
        questionAnswers.reduce(
          (s, a) => s + (a.score || 0) / maxAnswerScore,
          0
        ) / questionAnswers.length;
      return sum + TOTAL_SCORE * questionImportance * answersAverageMatch;
    },
    0
  );

  return Math.min(100, Math.round((respondentScore / TOTAL_SCORE) * 100));
}

export function prepareAnswersForSubmit(
  answers: Record<number, LoveAnswer[]>
): AnswerToSubmit[] {
  return Object.entries(answers)
    .map(([index, options]) => {
      const question = LOVE_SURVEY[+index];
      const questionImportance = question.score / TOTAL_SCORE;
      if (!questionImportance) return null;

      const maxAnswerScore = question.answers?.reduce(
        (res, a) => Math.max(res, a.score || 0),
        0
      );
      if (!maxAnswerScore) return null;

      return {
        questionTitle: reactNodeToString(question.title),
        selectedOptions: options.map((opt) => ({
          title: reactNodeToString(opt.title),
          normalizedScore: +((opt.score || 0) / maxAnswerScore).toFixed(2),
        })),
      };
    })
    .filter(Boolean) as AnswerToSubmit[];
}

type AnswerToSubmit = {
  questionTitle: string;
  selectedOptions: {
    title: string;
    normalizedScore: number;
  }[];
};
