export interface Company {
  name: string;
  description: string;
  link?: string;
}

export enum Position {
  FrontEnd = 'Front-end Developer',
  BackEnd = 'Back-end Developer',
  FullStack = 'Full-stack Developer',
}

export interface Experience {
  id: string;
  company: Company;
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
    company: {
      name: `Innovecs`,
      description: `Innovecs is a globally-recognized software development 
      company and is listed among the top 100 <b>outsourcing companies</b>, 
      Inc. 5,000, and Clutch ratings.`,
      link: 'https://innovecs.com/',
    },
  },
  {
    id: 'Happyold',
    dateFrom: new Date(Date.UTC(2022, 10)),
    dateTo: new Date(Date.UTC(2023, 2)),
    descriptionTitle: 'Achievements',
    position: Position.BackEnd,
    company: {
      name: `CF "Enjoying Life"`,
      description: `As a volunteer I developed and deployed REST API for a web 
      application that allows war refugees to register in a queue for getting 
      <b>humanitarian help</b>.`,
      link: 'https://happyold.com.ua/en',
    },
  },
  {
    id: 'Perimeter81',
    dateFrom: new Date(Date.UTC(2020, 10)),
    dateTo: new Date(Date.UTC(2021, 7)),
    position: Position.BackEnd,
    company: {
      name: 'Perimeter 81',
      description: `<b>Zero Trust Network as a Service</b> designed to simplify 
      secure network, cloud and application access for the modern and 
      distributed workforce.`,
      link: 'https://www.linkedin.com/company/perimeter-81/',
    },
  },
  {
    id: 'Trucknet',
    dateFrom: new Date(Date.UTC(2019, 0)),
    dateTo: new Date(Date.UTC(2020, 5)),
    position: Position.FullStack,
    company: {
      name: 'Trucknet Enterprise LTD',
      description: `Cloud based <b>transport optimization platform</b> that 
      utilizes smart freight exchange to improve efficiency & profitability.`,
      link: 'https://www.linkedin.com/company/busnet-&-trucknet/',
    },
  },
  {
    id: 'Siteplus',
    dateFrom: new Date(Date.UTC(2017, 7)),
    dateTo: new Date(Date.UTC(2018, 7)),
    position: Position.FrontEnd,
    company: {
      name: 'Siteplus Pte LTD',
      description: `<b>B2B website builder</b> that features Drag & Drop / 
      WYSIWYG editor, responsive grid, hundreds of templates, content blocks, 
      online store and more.`,
      link: 'https://www.linkedin.com/company/siteplus-pte-ltd/about/',
    },
  },
  {
    id: 'DevsterLab',
    dateFrom: new Date(Date.UTC(2016, 1)),
    dateTo: new Date(Date.UTC(2017, 7)),
    position: Position.FrontEnd,
    company: {
      name: 'Devster Lab',
      description: `An <b>outsourcing company</b>, but also a team of friends - 
      programmers, designers, dreamers, and innovators - who understand 
      business. Working at this company felt like being at home with my family.`,
      link: 'https://www.linkedin.com/company/devster-lab/about/',
    },
  },
  {
    id: 'Freelancer',
    dateFrom: new Date(Date.UTC(2015, 0)),
    dateTo: new Date(Date.UTC(2016, 0)),
    descriptionTitle: 'About',
    position: Position.FullStack,
    company: {
      name: 'Freelancer',
      description: `During this period of my life I worked on various 
      <b>projects for the university</b> I studied in. This 
      kick-started my career as a web developer.`,
    },
  },
];

export const IS_HIRABLE = !!EXPERIENCE[0].dateTo;
