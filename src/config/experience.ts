export interface Company {
  name: string;
  link?: string;
}

export enum Position {
  FrontEnd = "Front-end Developer",
  BackEnd = "Back-end Developer",
  FullStack = "Full-stack Developer",
}

export interface Experience<Id = string> {
  id: Id;
  company: Company;
  dateFrom: Date;
  dateTo: Date;
  position: Position;
}

export const EXPERIENCE = (<T>(p: readonly Experience<T>[]) => p)([
  {
    id: "Trucknet",
    company: {
      name: "Trucknet Enterprise LTD",
      link: "https://www.linkedin.com/company/busnet-&-trucknet/",
    },
    dateFrom: new Date(Date.UTC(2019, 4)),
    dateTo: new Date(Date.UTC(2020, 5)),
    position: Position.FullStack,
  },
  {
    id: "Siteplus",
    company: {
      name: "Siteplus Pte LTD",
      link: "https://www.linkedin.com/company/siteplus-pte-ltd/about/",
    },
    dateFrom: new Date(Date.UTC(2017, 7)),
    dateTo: new Date(Date.UTC(2018, 7)),
    position: Position.FrontEnd,
  },
  {
    id: "DevsterLab",
    company: {
      name: "Devster Lab",
      link: "https://www.linkedin.com/company/devster-lab/about/",
    },
    dateFrom: new Date(Date.UTC(2016, 1)),
    dateTo: new Date(Date.UTC(2017, 7)),
    position: Position.FrontEnd,
  },
  {
    id: "Freelancer",
    company: {
      name: "Freelancer",
    },
    dateFrom: new Date(Date.UTC(2014, 0)),
    dateTo: new Date(Date.UTC(2016, 1)),
    position: Position.FullStack,
  },
] as const);
