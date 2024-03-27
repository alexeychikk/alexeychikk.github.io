/* eslint-disable react-refresh/only-export-components */
import type React from 'react';

import AngularIcon from '~/assets/icons/angular.svg?react';
import AWSIcon from '~/assets/icons/aws.svg?react';
import CoffeeScriptIcon from '~/assets/icons/coffeescript.svg?react';
import CSharpIcon from '~/assets/icons/csharp.svg?react';
import CssIcon from '~/assets/icons/css.svg?react';
import CypressIcon from '~/assets/icons/cypress.svg?react';
import DockerIcon from '~/assets/icons/docker.svg?react';
import ExpressIcon from '~/assets/icons/expressjs.svg?react';
import FastifyIcon from '~/assets/icons/fastify.svg?react';
import FolderClientIcon from '~/assets/icons/folder-client-open.svg?react';
import FolderDocsIcon from '~/assets/icons/folder-docs-open.svg?react';
import FolderFunctionsIcon from '~/assets/icons/folder-functions-open.svg?react';
import FolderServerIcon from '~/assets/icons/folder-server-open.svg?react';
import FolderToolsIcon from '~/assets/icons/folder-tools-open.svg?react';
import GatsbyIcon from '~/assets/icons/gatsby.svg?react';
import GitIcon from '~/assets/icons/git.svg?react';
import GitlabIcon from '~/assets/icons/gitlab.svg?react';
import GraphqlIcon from '~/assets/icons/graphql.svg?react';
import HaxeIcon from '~/assets/icons/haxe.svg?react';
import HtmlIcon from '~/assets/icons/html.svg?react';
import I18nIcon from '~/assets/icons/i18n.svg?react';
import JSIcon from '~/assets/icons/javascript.svg?react';
import JestIcon from '~/assets/icons/jest.svg?react';
import JssIcon from '~/assets/icons/jss.svg?react';
import KubernetesIcon from '~/assets/icons/kubernetes.svg?react';
import MaterialUiIcon from '~/assets/icons/material-ui.svg?react';
import MongoDBIcon from '~/assets/icons/mongodb.svg?react';
import NestJsIcon from '~/assets/icons/nestjs.svg?react';
import NetlifyIcon from '~/assets/icons/netlify.svg?react';
import NodeJsIcon from '~/assets/icons/nodejs.svg?react';
import PostgreSqlIcon from '~/assets/icons/postgresql.svg?react';
import ReactIcon from '~/assets/icons/react_ts.svg?react';
import ReadmeIcon from '~/assets/icons/readme.svg?react';
import RedisIcon from '~/assets/icons/redis.svg?react';
import ReduxIcon from '~/assets/icons/redux-store.svg?react';
import SassIcon from '~/assets/icons/sass.svg?react';
import SentryIcon from '~/assets/icons/sentry.svg?react';
import SocketIoIcon from '~/assets/icons/socket-io.svg?react';
import StorybookIcon from '~/assets/icons/storybook.svg?react';
import TSIcon from '~/assets/icons/typescript.svg?react';
import VsCodeIcon from '~/assets/icons/vscode.svg?react';
import WebpackIcon from '~/assets/icons/webpack.svg?react';
import WebStormIcon from '~/assets/icons/webstorm.svg?react';

interface SkillCategoryBase<Id = string> {
  id: Id;
  name: React.ReactNode;
  icon: SvgComponent;
}

const skillCategories = (<T extends any>(t: readonly SkillCategoryBase<T>[]) =>
  t)([
  {
    id: 'Languages',
    name: 'Languages',
    icon: FolderFunctionsIcon,
  },
  {
    id: 'FrontEnd',
    name: 'Front End',
    icon: FolderClientIcon,
  },
  {
    id: 'BackEnd',
    name: 'Back End',
    icon: FolderServerIcon,
  },
  {
    id: 'Tools',
    name: 'Tools',
    icon: FolderToolsIcon,
  },
  {
    id: 'Knowledge',
    name: 'Knowledge',
    icon: FolderDocsIcon,
  },
] as const);

export type SkillCategoryId = (typeof skillCategories)[number]['id'];

export type SkillCategory = SkillCategoryBase<SkillCategoryId>;

export type SkillCategoriesMap = { [key in SkillCategoryId]: SkillCategory };

export const SKILL_CATEGORIES: Readonly<SkillCategory[]> = skillCategories;

export const SKILL_CATEGORIES_MAP = skillCategories.reduce(
  (res: Partial<SkillCategoriesMap>, category) => {
    res[category.id] = category;
    return res;
  },
  {},
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
    id: 'JavaScript',
    categoryId: 'Languages',
    name: 'JavaScript',
    icon: JSIcon,
  },
  {
    id: 'TypeScript',
    categoryId: 'Languages',
    name: 'TypeScript',
    icon: TSIcon,
  },
  {
    id: 'CSharp',
    categoryId: 'Languages',
    name: 'C#',
    hint: '(background)',
    icon: CSharpIcon,
  },
  {
    id: 'Haxe',
    categoryId: 'Languages',
    name: 'Haxe',
    hint: '(background)',
    icon: HaxeIcon,
  },
  {
    id: 'CoffeeScript',
    categoryId: 'Languages',
    name: 'CoffeeScript',
    hint: '(background)',
    icon: CoffeeScriptIcon,
  },
  // FrontEnd
  {
    id: 'React',
    categoryId: 'FrontEnd',
    name: 'React',
    icon: ReactIcon,
  },
  {
    id: 'Redux',
    categoryId: 'FrontEnd',
    name: 'Redux',
    hint: '(reselect, recompose)',
    icon: ReduxIcon,
  },
  {
    id: 'MaterialUI',
    categoryId: 'FrontEnd',
    name: 'Material UI',
    icon: MaterialUiIcon,
  },
  { id: 'HTML', categoryId: 'FrontEnd', name: 'HTML', icon: HtmlIcon },
  { id: 'CSS', categoryId: 'FrontEnd', name: 'CSS', icon: CssIcon },
  { id: 'SASS', categoryId: 'FrontEnd', name: 'SASS', icon: SassIcon },
  { id: 'CSSinJS', categoryId: 'FrontEnd', name: 'CSS in JS', icon: JssIcon },
  { id: 'Gatsby', categoryId: 'FrontEnd', name: 'Gatsby', icon: GatsbyIcon },
  { id: 'GraphQL', categoryId: 'FrontEnd', name: 'GraphQL', icon: GraphqlIcon },
  {
    id: 'NetlifyCMS',
    categoryId: 'FrontEnd',
    name: 'Netlify CMS',
    icon: NetlifyIcon,
  },
  {
    id: 'Storybook',
    categoryId: 'FrontEnd',
    name: 'Storybook',
    icon: StorybookIcon,
  },
  {
    id: 'Angular',
    categoryId: 'FrontEnd',
    name: 'Angular',
    hint: '(background)',
    icon: AngularIcon,
  },
  // BackEnd
  { id: 'NodeJS', categoryId: 'BackEnd', name: 'Node.js', icon: NodeJsIcon },
  { id: 'NestJS', categoryId: 'BackEnd', name: 'NestJS', icon: NestJsIcon },
  { id: 'Express', categoryId: 'BackEnd', name: 'Express', icon: ExpressIcon },
  { id: 'Fastify', categoryId: 'BackEnd', name: 'Fastify', icon: FastifyIcon },
  {
    id: 'SocketIO',
    categoryId: 'BackEnd',
    name: 'Socket.io',
    icon: SocketIoIcon,
  },
  { id: 'MongoDB', categoryId: 'BackEnd', name: 'MongoDB', icon: MongoDBIcon },
  {
    id: 'Redis',
    categoryId: 'BackEnd',
    name: 'Redis',
    icon: RedisIcon,
  },
  {
    id: 'PostgreSQL',
    categoryId: 'BackEnd',
    name: 'PostgreSQL',
    hint: '(background)',
    icon: PostgreSqlIcon,
  },
  {
    id: 'AWS',
    categoryId: 'BackEnd',
    name: 'AWS',
    hint: '(SQS, S3, SNS)',
    icon: AWSIcon,
  },
  {
    id: 'Docker',
    categoryId: 'BackEnd',
    name: 'Docker',
    hint: '(background)',
    icon: DockerIcon,
  },
  {
    id: 'Kubernetes',
    categoryId: 'BackEnd',
    name: 'Kubernetes',
    hint: '(fundamentals)',
    icon: KubernetesIcon,
  },
  // Tools
  { id: 'Git', categoryId: 'Tools', name: 'Git', icon: GitIcon },
  { id: 'GitlabCI', categoryId: 'Tools', name: 'Gitlab CI', icon: GitlabIcon },
  { id: 'Jest', categoryId: 'Tools', name: 'Jest', icon: JestIcon },
  { id: 'Cypress', categoryId: 'Tools', name: 'Cypress', icon: CypressIcon },
  { id: 'Sentry', categoryId: 'Tools', name: 'Sentry', icon: SentryIcon },
  { id: 'Webpack', categoryId: 'Tools', name: 'Webpack', icon: WebpackIcon },
  { id: 'i18n', categoryId: 'Tools', name: 'i18n', icon: I18nIcon },
  { id: 'VSCode', categoryId: 'Tools', name: 'VS Code', icon: VsCodeIcon },
  { id: 'WebStorm', categoryId: 'Tools', name: 'WebStorm', icon: WebStormIcon },
  // Knowledge
  { id: 'OOP', categoryId: 'Knowledge', name: 'OOP', icon: ReadmeIcon },
  {
    id: 'FP',
    categoryId: 'Knowledge',
    name: 'Functional Programming',
    icon: ReadmeIcon,
  },
  { id: 'TDD', categoryId: 'Knowledge', name: 'TDD', icon: ReadmeIcon },
  {
    id: 'DesignPatterns',
    categoryId: 'Knowledge',
    name: 'Design Patterns',
    icon: ReadmeIcon,
  },
] as const);

export type SkillId = (typeof skills)[number]['id'];

export type Skill = SkillBase<SkillId>;

export type SkillsMap = { [key in SkillId]: Skill };

export const SKILLS: Readonly<Skill[]> = skills;

export const MAX_SKILL_NAME_LENGTH = Math.max(
  ...SKILLS.map((skill) => skill.name.length),
);

export const SKILLS_MAP = skills.reduce((res: Partial<SkillsMap>, skill) => {
  res[skill.id] = skill;
  return res;
}, {}) as SkillsMap;
