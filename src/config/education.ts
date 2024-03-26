export interface Education {
  id: string;
  name: string;
  field?: string;
  degree: string;
  grade?: string;
  dateFrom: Date;
  dateTo?: Date;
  description?: string;
}

export const EDUCATION: Education[] = [
  {
    id: 'Life',
    name: `Life`,
    degree: 'Self Education',
    dateFrom: new Date(Date.UTC(1995, 1)),
    description: `I am curious about the world and the way it works. I always 
    try to learn something new every day no matter whether it is about 
    programming, science, technology or music.`,
  },
  {
    id: 'University',
    name: `Open International University of Human Development "Ukraine"`,
    field: 'Software Engineering',
    degree: "Master's degree",
    grade: '93',
    dateFrom: new Date(Date.UTC(2014, 8)),
    dateTo: new Date(Date.UTC(2016, 7)),
  },
  {
    id: 'College',
    name: `Industrial and Economic College of National Aviation University`,
    field: 'Software Engineering',
    degree: "Associate's degree",
    grade: '5 (by the five-point system)',
    dateFrom: new Date(Date.UTC(2010, 8)),
    dateTo: new Date(Date.UTC(2014, 7)),
  },
];
