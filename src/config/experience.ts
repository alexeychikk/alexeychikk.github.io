export enum Position {
  FrontEnd = 'Front-end Developer',
  BackEnd = 'Back-end Developer',
  FullStack = 'Full-stack Developer',
}

export interface Experience {
  id: string;
  dateFrom: Date;
  dateTo?: Date;
  descriptionTitle?: string;
  position: Position;
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'Innovecs',
    dateFrom: new Date(Date.UTC(2023, 8)),
    position: Position.FullStack,
  },
  {
    id: 'Happyold',
    dateFrom: new Date(Date.UTC(2022, 10)),
    dateTo: new Date(Date.UTC(2023, 2)),
    descriptionTitle: 'Achievements',
    position: Position.BackEnd,
  },
  {
    id: 'Perimeter81',
    dateFrom: new Date(Date.UTC(2020, 10)),
    dateTo: new Date(Date.UTC(2021, 7)),
    position: Position.BackEnd,
  },
  {
    id: 'Trucknet',
    dateFrom: new Date(Date.UTC(2019, 0)),
    dateTo: new Date(Date.UTC(2020, 5)),
    position: Position.FullStack,
  },
  {
    id: 'Siteplus',
    dateFrom: new Date(Date.UTC(2017, 7)),
    dateTo: new Date(Date.UTC(2018, 7)),
    position: Position.FrontEnd,
  },
  {
    id: 'DevsterLab',
    dateFrom: new Date(Date.UTC(2016, 1)),
    dateTo: new Date(Date.UTC(2017, 7)),
    position: Position.FrontEnd,
  },
  {
    id: 'Freelancer',
    dateFrom: new Date(Date.UTC(2015, 0)),
    dateTo: new Date(Date.UTC(2016, 0)),
    descriptionTitle: 'About',
    position: Position.FullStack,
  },
];

export const IS_HIRABLE = !!EXPERIENCE[0].dateTo;
