import type { ComponentType } from 'svelte';

// https://github.com/PKief/vscode-material-icon-theme/blob/main/icons
import AngularIcon from '../assets/icons/angular.svg?component';
import AWSIcon from '../assets/icons/aws.svg?component';
import CoffeeScriptIcon from '../assets/icons/coffeescript.svg?component';
import CSharpIcon from '../assets/icons/csharp.svg?component';
import CssIcon from '../assets/icons/css.svg?component';
import CypressIcon from '../assets/icons/cypress.svg?component';
import DockerIcon from '../assets/icons/docker.svg?component';
import ExpressIcon from '../assets/icons/expressjs.svg?component';
import FastifyIcon from '../assets/icons/fastify.svg?component';
import FolderClientIcon from '../assets/icons/folder-client-open.svg?component';
import FolderDocsIcon from '../assets/icons/folder-docs-open.svg?component';
import FolderFunctionsIcon from '../assets/icons/folder-functions-open.svg?component';
import FolderServerIcon from '../assets/icons/folder-server-open.svg?component';
import FolderToolsIcon from '../assets/icons/folder-tools-open.svg?component';
import GatsbyIcon from '../assets/icons/gatsby.svg?component';
import GitIcon from '../assets/icons/git.svg?component';
import GitlabIcon from '../assets/icons/gitlab.svg?component';
import GraphqlIcon from '../assets/icons/graphql.svg?component';
import HaxeIcon from '../assets/icons/haxe.svg?component';
import HtmlIcon from '../assets/icons/html.svg?component';
import I18nIcon from '../assets/icons/i18n.svg?component';
import JSIcon from '../assets/icons/javascript.svg?component';
import JestIcon from '../assets/icons/jest.svg?component';
import JssIcon from '../assets/icons/jss.svg?component';
import KubernetesIcon from '../assets/icons/kubernetes.svg?component';
import MaterialUiIcon from '../assets/icons/material-ui.svg?component';
import MongoDBIcon from '../assets/icons/mongodb.svg?component';
import NestJsIcon from '../assets/icons/nestjs.svg?component';
import NetlifyIcon from '../assets/icons/netlify.svg?component';
import NodeJsIcon from '../assets/icons/nodejs.svg?component';
import PostgreSqlIcon from '../assets/icons/postgresql.svg?component';
import ReactIcon from '../assets/icons/react_ts.svg?component';
import ReadmeIcon from '../assets/icons/readme.svg?component';
import RedisIcon from '../assets/icons/redis.svg?component';
import ReduxIcon from '../assets/icons/redux-store.svg?component';
import SassIcon from '../assets/icons/sass.svg?component';
import SentryIcon from '../assets/icons/sentry.svg?component';
import SocketIoIcon from '../assets/icons/socket-io.svg?component';
import StorybookIcon from '../assets/icons/storybook.svg?component';
import SvelteIcon from '../assets/icons/svelte.svg?component';
import TSIcon from '../assets/icons/typescript.svg?component';
import VsCodeIcon from '../assets/icons/vscode.svg?component';
import WebpackIcon from '../assets/icons/webpack.svg?component';
import WebStormIcon from '../assets/icons/webstorm.svg?component';

export interface SkillCategory {
  id: string;
  name: string;
  icon: ComponentType;
}

const skillCategories: SkillCategory[] = [
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
];

export type SkillCategoriesMap = { [id: string]: SkillCategory };

export const SKILL_CATEGORIES: Readonly<SkillCategory[]> = skillCategories;

export const SKILL_CATEGORIES_MAP = skillCategories.reduce(
  (res: Partial<SkillCategoriesMap>, category) => {
    res[category.id] = category;
    return res;
  },
  {},
) as SkillCategoriesMap;

export interface Skill {
  id: string;
  categoryId: string;
  hint?: string;
  icon: ComponentType;
  name: string;
}

const skills: Skill[] = [
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
  {
    id: 'Svelte',
    categoryId: 'FrontEnd',
    name: 'Svelte',
    hint: '(this website)',
    icon: SvelteIcon,
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
    icon: PostgreSqlIcon,
  },
  {
    id: 'AWS',
    categoryId: 'BackEnd',
    name: 'AWS',
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
];

export type SkillsMap = { [id: string]: Skill };

export const SKILLS: Readonly<Skill[]> = skills;

export const MAX_SKILL_NAME_LENGTH = Math.max(
  ...SKILLS.map((skill) => skill.name.length),
);

export const SKILLS_MAP = skills.reduce((res: Partial<SkillsMap>, skill) => {
  res[skill.id] = skill;
  return res;
}, {}) as SkillsMap;
