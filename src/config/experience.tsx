import React from "react";

import { Fn, Sl } from "~/components/CodeLikeBlock";
import { LinkOpen } from "~/components/LinkOpen";

export interface Company {
  name: string;
  description: React.ReactNode;
  link?: string;
}

export enum Position {
  FrontEnd = "Front-end Developer",
  BackEnd = "Back-end Developer",
  FullStack = "Full-stack Developer",
}

interface ExperienceBase<Id = string> {
  id: Id;
  company: Company;
  dateFrom: Date;
  dateTo?: Date;
  descriptionTitle?: React.ReactNode;
  position: Position;
}

export const EXPERIENCE = (<T extends any>(t: readonly ExperienceBase<T>[]) =>
  t)([
  {
    id: "Happyold",
    company: {
      name: `Charitable foundation "Життєлюб"`,
      description: (
        <>
          As a <Fn>volunteer</Fn> I developed and deployed REST API for a web
          application that allows war refugees to register in a queue for
          getting <Fn>humanitarian help</Fn>. <br />
          Live app:{" "}
          <LinkOpen to="https://vpo.happyold.com.ua/" external>
            vpo.happyold.com.ua
          </LinkOpen>
        </>
      ),
      link: "https://happyold.com.ua/",
    },
    dateFrom: new Date(Date.UTC(2022, 10)),
    dateTo: new Date(Date.UTC(2023, 2)),
    descriptionTitle: <>Achievements</>,
    position: Position.BackEnd,
  },
  {
    id: "Perimeter81",
    company: {
      name: "Perimeter 81",
      description: (
        <>
          <Fn>Zero Trust Network as a Service</Fn> designed to simplify secure
          network, cloud and application access for the modern and distributed
          workforce.
        </>
      ),
      link: "https://www.linkedin.com/company/perimeter-81/",
    },
    dateFrom: new Date(Date.UTC(2020, 10)),
    dateTo: new Date(Date.UTC(2021, 7)),
    position: Position.BackEnd,
  },
  {
    id: "Trucknet",
    company: {
      name: "Trucknet Enterprise LTD",
      description: (
        <>
          Cloud based <Fn>transport optimization platform</Fn> that utilizes
          smart freight exchange to improve efficiency & profitability.
        </>
      ),
      link: "https://www.linkedin.com/company/busnet-&-trucknet/",
    },
    dateFrom: new Date(Date.UTC(2019, 0)),
    dateTo: new Date(Date.UTC(2020, 5)),
    position: Position.FullStack,
  },
  {
    id: "Siteplus",
    company: {
      name: "Siteplus Pte LTD",
      description: (
        <>
          <Fn>B2B website builder</Fn> that features Drag & Drop / WYSIWYG
          editor, responsive grid, hundreds of templates, content blocks, online
          store and more.
        </>
      ),
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
      description: (
        <>
          An <Fn>outsourcing company</Fn>, but also a team of friends -
          programmers, designers, dreamers, and innovators - who understand
          business. Working at this company felt like being at home with my{" "}
          <Sl>family</Sl>.
        </>
      ),
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
      description: (
        <>
          During this period of my life I worked on various{" "}
          <Fn>projects for the university</Fn> I studied in. This kick-started
          my career as a web developer.
        </>
      ),
    },
    dateFrom: new Date(Date.UTC(2015, 0)),
    dateTo: new Date(Date.UTC(2016, 0)),
    descriptionTitle: <>About</>,
    position: Position.FullStack,
  },
] as const);

export type ExperienceId = typeof EXPERIENCE[number]["id"];

export type Experience = ExperienceBase<ExperienceId>;

export const IS_HIRABLE = true; // !!EXPERIENCE[0].dateTo;
