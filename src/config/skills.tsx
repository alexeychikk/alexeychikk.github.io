import React from "react";

import { ReactComponent as FolderFunctionsIcon } from "~/assets/icons/folder-functions-open.svg";
import { ReactComponent as JSIcon } from "~/assets/icons/javascript.svg";
import { ReactComponent as TSIcon } from "~/assets/icons/typescript.svg";
import { ReactComponent as CSharpIcon } from "~/assets/icons/csharp.svg";
import { ReactComponent as HaxeIcon } from "~/assets/icons/haxe.svg";
import { ReactComponent as CoffeeScriptIcon } from "~/assets/icons/coffeescript.svg";

import { ReactComponent as FolderClientIcon } from "~/assets/icons/folder-client-open.svg";
import { ReactComponent as ReactIcon } from "~/assets/icons/react_ts.svg";
import { ReactComponent as ReduxIcon } from "~/assets/icons/redux-store.svg";
import { ReactComponent as MaterialUiIcon } from "~/assets/icons/material-ui.svg";
import { ReactComponent as HtmlIcon } from "~/assets/icons/html.svg";
import { ReactComponent as CssIcon } from "~/assets/icons/css.svg";
import { ReactComponent as SassIcon } from "~/assets/icons/sass.svg";
import { ReactComponent as JssIcon } from "~/assets/icons/jss.svg";
import { ReactComponent as GatsbyIcon } from "~/assets/icons/gatsby.svg";
import { ReactComponent as GraphqlIcon } from "~/assets/icons/graphql.svg";
import { ReactComponent as NetlifyIcon } from "~/assets/icons/netlify.svg";
import { ReactComponent as StorybookIcon } from "~/assets/icons/storybook.svg";
import { ReactComponent as AngularIcon } from "~/assets/icons/angular.svg";

import { ReactComponent as FolderServerIcon } from "~/assets/icons/folder-server-open.svg";
import { ReactComponent as NodeJsIcon } from "~/assets/icons/nodejs.svg";
import { ReactComponent as NestJsIcon } from "~/assets/icons/nestjs.svg";
import { ReactComponent as ExpressIcon } from "~/assets/icons/expressjs.svg";
import { ReactComponent as FastifyIcon } from "~/assets/icons/fastify.svg";
import { ReactComponent as SocketIoIcon } from "~/assets/icons/socket-io.svg";
import { ReactComponent as MongoDBIcon } from "~/assets/icons/mongodb.svg";
import { ReactComponent as RedisIcon } from "~/assets/icons/redis.svg";
import { ReactComponent as PostgreSqlIcon } from "~/assets/icons/postgresql.svg";
import { ReactComponent as AWSIcon } from "~/assets/icons/aws.svg";
import { ReactComponent as DockerIcon } from "~/assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "~/assets/icons/kubernetes.svg";

import { ReactComponent as FolderToolsIcon } from "~/assets/icons/folder-tools-open.svg";
import { ReactComponent as GitIcon } from "~/assets/icons/git.svg";
import { ReactComponent as GitlabIcon } from "~/assets/icons/gitlab.svg";
import { ReactComponent as JestIcon } from "~/assets/icons/jest.svg";
import { ReactComponent as CypressIcon } from "~/assets/icons/cypress.svg";
import { ReactComponent as SentryIcon } from "~/assets/icons/sentry.svg";
import { ReactComponent as WebpackIcon } from "~/assets/icons/webpack.svg";
import { ReactComponent as I18nIcon } from "~/assets/icons/i18n.svg";
import { ReactComponent as VsCodeIcon } from "~/assets/icons/vscode.svg";
import { ReactComponent as WebStormIcon } from "~/assets/icons/webstorm.svg";

import { ReactComponent as FolderDocsIcon } from "~/assets/icons/folder-docs-open.svg";
import { ReactComponent as ReadmeIcon } from "~/assets/icons/readme.svg";

interface SkillCategoryBase<Id = string> {
  id: Id;
  name: React.ReactNode;
  icon: SvgComponent;
}

const skillCategories = (<T extends any>(t: readonly SkillCategoryBase<T>[]) =>
  t)([
  {
    id: "Languages",
    name: "Languages",
    icon: FolderFunctionsIcon,
  },
  {
    id: "FrontEnd",
    name: "Front End",
    icon: FolderClientIcon,
  },
  {
    id: "BackEnd",
    name: "Back End",
    icon: FolderServerIcon,
  },
  {
    id: "Tools",
    name: "Tools",
    icon: FolderToolsIcon,
  },
  {
    id: "Knowledge",
    name: "Knowledge",
    icon: FolderDocsIcon,
  },
] as const);

export type SkillCategoryId = typeof skillCategories[number]["id"];

export type SkillCategory = SkillCategoryBase<SkillCategoryId>;

export type SkillCategoriesMap = { [key in SkillCategoryId]: SkillCategory };

export const SKILL_CATEGORIES: Readonly<SkillCategory[]> = skillCategories;

export const SKILL_CATEGORIES_MAP = skillCategories.reduce(
  (res: Partial<SkillCategoriesMap>, category) => {
    res[category.id] = category;
    return res;
  },
  {}
) as SkillCategoriesMap;

interface SkillBase<Id = string> {
  id: Id;
  categoryId: SkillCategoryId;
  hint?: React.ReactNode;
  icon: SvgComponent;
  name: string;
}

const skills = (<T extends any>(t: readonly SkillBase<T>[]) => t)([
  // Languages
  {
    id: "JavaScript",
    categoryId: "Languages",
    name: "JavaScript",
    icon: JSIcon,
  },
  {
    id: "TypeScript",
    categoryId: "Languages",
    name: "TypeScript",
    icon: TSIcon,
  },
  {
    id: "CSharp",
    categoryId: "Languages",
    name: "C#",
    hint: "(background)",
    icon: CSharpIcon,
  },
  {
    id: "Haxe",
    categoryId: "Languages",
    name: "Haxe",
    hint: "(background)",
    icon: HaxeIcon,
  },
  {
    id: "CoffeeScript",
    categoryId: "Languages",
    name: "CoffeeScript",
    hint: "(background)",
    icon: CoffeeScriptIcon,
  },
  // FrontEnd
  {
    id: "React",
    categoryId: "FrontEnd",
    name: "React",
    icon: ReactIcon,
  },
  {
    id: "Redux",
    categoryId: "FrontEnd",
    name: "Redux",
    hint: "(reselect, recompose)",
    icon: ReduxIcon,
  },
  {
    id: "MaterialUI",
    categoryId: "FrontEnd",
    name: "Material UI",
    icon: MaterialUiIcon,
  },
  { id: "HTML", categoryId: "FrontEnd", name: "HTML", icon: HtmlIcon },
  { id: "CSS", categoryId: "FrontEnd", name: "CSS", icon: CssIcon },
  { id: "SASS", categoryId: "FrontEnd", name: "SASS", icon: SassIcon },
  { id: "CSSinJS", categoryId: "FrontEnd", name: "CSS in JS", icon: JssIcon },
  { id: "Gatsby", categoryId: "FrontEnd", name: "Gatsby", icon: GatsbyIcon },
  { id: "GraphQL", categoryId: "FrontEnd", name: "GraphQL", icon: GraphqlIcon },
  {
    id: "NetlifyCMS",
    categoryId: "FrontEnd",
    name: "Netlify CMS",
    icon: NetlifyIcon,
  },
  {
    id: "Storybook",
    categoryId: "FrontEnd",
    name: "Storybook",
    icon: StorybookIcon,
  },
  {
    id: "Angular",
    categoryId: "FrontEnd",
    name: "Angular",
    hint: "(background)",
    icon: AngularIcon,
  },
  // BackEnd
  { id: "NodeJS", categoryId: "BackEnd", name: "Node.js", icon: NodeJsIcon },
  { id: "NestJS", categoryId: "BackEnd", name: "NestJS", icon: NestJsIcon },
  { id: "Express", categoryId: "BackEnd", name: "Express", icon: ExpressIcon },
  { id: "Fastify", categoryId: "BackEnd", name: "Fastify", icon: FastifyIcon },
  {
    id: "SocketIO",
    categoryId: "BackEnd",
    name: "Socket.io",
    icon: SocketIoIcon,
  },
  { id: "MongoDB", categoryId: "BackEnd", name: "MongoDB", icon: MongoDBIcon },
  {
    id: "Redis",
    categoryId: "BackEnd",
    name: "Redis",
    icon: RedisIcon,
  },
  {
    id: "PostgreSQL",
    categoryId: "BackEnd",
    name: "PostgreSQL",
    hint: "(background)",
    icon: PostgreSqlIcon,
  },
  {
    id: "AWS",
    categoryId: "BackEnd",
    name: "AWS",
    hint: "(SQS, S3, SNS)",
    icon: AWSIcon,
  },
  {
    id: "Docker",
    categoryId: "BackEnd",
    name: "Docker",
    hint: "(background)",
    icon: DockerIcon,
  },
  {
    id: "Kubernetes",
    categoryId: "BackEnd",
    name: "Kubernetes",
    hint: "(fundamentals)",
    icon: KubernetesIcon,
  },
  // Tools
  { id: "Git", categoryId: "Tools", name: "Git", icon: GitIcon },
  { id: "GitlabCI", categoryId: "Tools", name: "Gitlab CI", icon: GitlabIcon },
  { id: "Jest", categoryId: "Tools", name: "Jest", icon: JestIcon },
  { id: "Cypress", categoryId: "Tools", name: "Cypress", icon: CypressIcon },
  { id: "Sentry", categoryId: "Tools", name: "Sentry", icon: SentryIcon },
  { id: "Webpack", categoryId: "Tools", name: "Webpack", icon: WebpackIcon },
  { id: "i18n", categoryId: "Tools", name: "i18n", icon: I18nIcon },
  { id: "VSCode", categoryId: "Tools", name: "VS Code", icon: VsCodeIcon },
  { id: "WebStorm", categoryId: "Tools", name: "WebStorm", icon: WebStormIcon },
  // Knowledge
  { id: "OOP", categoryId: "Knowledge", name: "OOP", icon: ReadmeIcon },
  {
    id: "FP",
    categoryId: "Knowledge",
    name: "Functional Programming",
    icon: ReadmeIcon,
  },
  { id: "TDD", categoryId: "Knowledge", name: "TDD", icon: ReadmeIcon },
  {
    id: "DesignPatterns",
    categoryId: "Knowledge",
    name: "Design Patterns",
    icon: ReadmeIcon,
  },
] as const);

export type SkillId = typeof skills[number]["id"];

export type Skill = SkillBase<SkillId>;

export type SkillsMap = { [key in SkillId]: Skill };

export const SKILLS: Readonly<Skill[]> = skills;

export const MAX_SKILL_NAME_LENGTH = Math.max(
  ...SKILLS.map((skill) => skill.name.length)
);

export const SKILLS_MAP = skills.reduce((res: Partial<SkillsMap>, skill) => {
  res[skill.id] = skill;
  return res;
}, {}) as SkillsMap;
