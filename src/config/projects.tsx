import React from "react";

import { SkillId } from "./skills";
import { ExperienceId } from "./experience";

interface ProjectBase<Id = string> {
  id: Id;
  experienceId: ExperienceId;
  name: React.ReactNode;
  description: React.ReactNode;
  skills: readonly SkillId[];
  link?: string;
}

export const PROJECTS = (<T extends any>(p: readonly ProjectBase<T>[]) => p)([
  {
    id: "TrucknetFrontend",
    experienceId: "Trucknet",
    name: "Trucknet's front-end",
    description: (
      <>
        Main front-end application of Trucknet - cloud based transport
        optimization platform that utilizes smart freight exchange to improve
        efficiency & profitability.
      </>
    ),
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Redux",
      "MaterialUI",
      "HTML",
      "CSSinJS",
      "Git",
      "GitlabCI",
      "Jest",
      "Cypress",
      "Sentry",
      "Webpack",
      "i18n",
      "VSCode",
      "OOP",
      "FP",
      "DesignPatterns",
    ],
    link: "https://app.trucknet.io",
  },
  {
    id: "TrucknetWebsite",
    experienceId: "Trucknet",
    name: "Trucknet's website",
    description: (
      <>
        Website of Trucknet platform. Was developed by me from the ground zero.
        During the development I integrated Netlify CMS, created functionality
        for blogging and adding vacancies through the CMS, integrated my own
        localization library called{" "}
        <a href="https://github.com/trucknet-io/react-targem" target="_blank">
          react-targem
        </a>
        , optimized the site for SEO.
      </>
    ),
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "MaterialUI",
      "HTML",
      "CSSinJS",
      "Gatsby",
      "GraphQL",
      "NetlifyCMS",
      "NodeJS",
      "Git",
      "GitlabCI",
      "Jest",
      "Sentry",
      "i18n",
      "VSCode",
      "FP",
    ],
    link: "https://trucknet.io",
  },
] as const);

export type ProjectId = typeof PROJECTS[number]["id"];

export type Project = ProjectBase<ProjectId>;
