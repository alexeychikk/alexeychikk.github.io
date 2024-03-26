interface EducationBase<Id = string> {
  id: Id;
  name: string;
  field: string;
  degree: string;
  grade: string;
  dateFrom: Date;
  dateTo?: Date;
}

export const EDUCATION = (<T extends any>(t: readonly EducationBase<T>[]) => t)(
  [
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
  ] as const,
);

export type EducationId = (typeof EDUCATION)[number]['id'];

export type Education = EducationBase<EducationId>;
