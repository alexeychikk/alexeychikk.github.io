import React from 'react';

import { IS_DEV } from './browser';

import { Emoji } from '~/components/Emoji';

export enum LoveQuestionType {
  Radio = 'Radio',
  Check = 'Check',
  Custom = 'Custom',
}

export interface LoveQuestion {
  title: React.ReactNode;
  description?: React.ReactNode;
  type: LoveQuestionType;
  score: number;
  doesWrongAnswerTriggerEnd?: boolean;
  wrongAnswerInfo?: React.ReactNode;
  answers?: LoveAnswer[];
  testAnswerIndexes?: number[];
}

export interface LoveAnswer {
  title: React.ReactNode;
  score?: number;
}

export const LOVE_SURVEY: LoveQuestion[] = [
  {
    title: (
      <>
        This quick test will show how (in)compatible we are{' '}
        <Emoji label="smile">😅</Emoji>
      </>
    ),
    description: (
      <>
        The fact that you've found my love survey already tells me a lot about
        you, but let's see how you pass the test!
      </>
    ),
    type: LoveQuestionType.Custom,
    score: 0,
  },
  {
    title: <>Pick your gender:</>,
    type: LoveQuestionType.Radio,
    score: 1,
    doesWrongAnswerTriggerEnd: true,
    wrongAnswerInfo: (
      <>
        I make love to women only <Emoji label="oops">🤷‍♂️</Emoji>
      </>
    ),
    answers: [
      { title: <>Female</>, score: 1 },
      { title: <>Male</> },
      { title: <>Other</> },
    ],
    testAnswerIndexes: [0],
  },
  {
    title: <>Whose side are you on?</>,
    type: LoveQuestionType.Radio,
    score: 5,
    answers: [
      {
        title: (
          <>
            I support Russia <Emoji label="crap">💩</Emoji>
          </>
        ),
      },
      {
        title: (
          <>
            I stand with Ukraine <Emoji label="ua">💙💛</Emoji>
          </>
        ),
        score: 1,
      },
      { title: <>I don't care</> },
    ],
    testAnswerIndexes: [1],
  },
  {
    title: <>What type of relationships do you prefer?</>,
    type: LoveQuestionType.Radio,
    score: 10,
    answers: [
      { title: <>Monogamy</>, score: 10 },
      { title: <>Open relationships</>, score: 2 },
      { title: <>Polygamy</> },
      { title: <>Polyamory</>, score: 1 },
      {
        title: (
          <>
            I ain't need nobody
            <Emoji label="broken">💔</Emoji>
          </>
        ),
      },
    ],
    testAnswerIndexes: [1],
  },
  {
    title: <>Do you work in IT?</>,
    score: 5,
    type: LoveQuestionType.Radio,
    answers: [{ title: <>Yes</>, score: 10 }, { title: <>No</> }],
    testAnswerIndexes: [0],
  },
  {
    title: <>Are you a programmer?</>,
    score: 5,
    type: LoveQuestionType.Radio,
    answers: [{ title: <>Yes</>, score: 10 }, { title: <>No</> }],
    testAnswerIndexes: [1],
  },
  {
    title: <>What genres of music do you prefer?</>,
    score: 7,
    type: LoveQuestionType.Check,
    answers: [
      { title: <>Pop</>, score: 3 },
      { title: <>Hip-Hop / R&B</>, score: 5 },
      { title: <>Electronic / Dance</>, score: 1 },
      { title: <>Rock / Metal</>, score: 4 },
      { title: <>Classical</>, score: 6 },
      { title: <>Jazz / Fusion</>, score: 20 },
      { title: <>Other</>, score: 2 },
    ],
    testAnswerIndexes: [1, 4],
  },
  {
    title: <>How religious are you?</>,
    score: 10,
    type: LoveQuestionType.Radio,
    answers: [
      { title: <>Atheist</>, score: 5 },
      { title: <>Agnostic</>, score: 10 },
      { title: <>Christian</>, score: 3 },
      { title: <>Muslim</>, score: 1 },
      { title: <>Judaist</>, score: 0 },
      { title: <>Buddhist</>, score: 7 },
      { title: <>Other</>, score: 3 },
    ],
    testAnswerIndexes: [5],
  },
  {
    title: <>Which word(s) better describe(s) you?</>,
    score: 8,
    type: LoveQuestionType.Check,
    answers: [
      { title: <>Kind</>, score: 10 },
      { title: <>Evil</> },
      { title: <>Curious</>, score: 10 },
      { title: <>Dead inside</>, score: 1 },
      { title: <>Smart</>, score: 7 },
      { title: <>Stupid</>, score: 5 },
      { title: <>Hard-working</>, score: 7 },
      { title: <>Lazy</>, score: 5 },
      { title: <>Creative</>, score: 10 },
      { title: <>Pragmatic</>, score: 8 },
    ],
    testAnswerIndexes: [2, 4, 8],
  },
  {
    title: <>Would you rather be:</>,
    score: 7,
    type: LoveQuestionType.Radio,
    answers: [
      { title: <>Rich</>, score: 5 },
      { title: <>Happy</>, score: 10 },
      { title: <>Famous</>, score: 2 },
    ],
    testAnswerIndexes: [2],
  },
  {
    title: <>Do you like video-games?</>,
    score: 9,
    type: LoveQuestionType.Radio,
    answers: [
      { title: <>Not at all</> },
      { title: <>Never tried</>, score: 1 },
      { title: <>Played several times</>, score: 3 },
      { title: <>Absolutely love</>, score: 12 },
      { title: <>I developed one</>, score: 13 },
    ],
    testAnswerIndexes: [2],
  },
  {
    title: <>How good is your English?</>,
    score: 6,
    type: LoveQuestionType.Radio,
    answers: [
      { title: <>Beginner</>, score: 1 },
      { title: <>Intermediate</>, score: 5 },
      { title: <>Advanced</>, score: 10 },
      { title: <>Proficient</>, score: 11 },
      { title: <>Native</>, score: 9 },
      { title: <>אני לא מבין</> },
    ],
    testAnswerIndexes: [2],
  },
  {
    title: <>What is your diet?</>,
    score: 4,
    type: LoveQuestionType.Radio,
    answers: [
      { title: <>Vegetarian</>, score: 8 },
      { title: <>Vegan</>, score: 7 },
      { title: <>Paleo</>, score: 10 },
      { title: <>Keto</>, score: 7 },
      { title: <>Kosher</>, score: 1 },
      { title: <>Omnivore</>, score: 10 },
      { title: <>Other</>, score: 6 },
    ],
    testAnswerIndexes: [0],
  },
  {
    title: <>Do you smoke/drink?</>,
    score: 10,
    type: LoveQuestionType.Radio,
    answers: [
      { title: <>Smoke</> },
      { title: <>Drink</>, score: 2 },
      { title: <>Smoke and Drink</> },
      { title: <>Drink on special occasions</>, score: 8 },
      { title: <>I'm clean</>, score: 10 },
    ],
    testAnswerIndexes: [3],
  },
];

export const INITIAL_ANSWERS: Record<number, LoveAnswer[]> = IS_DEV
  ? LOVE_SURVEY.reduce(
      (res, question, index) => {
        if (!question.testAnswerIndexes?.length) return res;
        res[index] = question.testAnswerIndexes.map(
          (index) => question.answers![index],
        );
        return res;
      },
      {} as Record<number, LoveAnswer[]>,
    )
  : {};
