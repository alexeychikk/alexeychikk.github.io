import React from 'react';

import {
  SkillItem,
  SkillsExplorer,
  SkillsFolder
} from '~/components/SkillsExplorer';

import FolderSrcIcon from '~/assets/icons/folder-src-open.svg';
import FolderFunctionsIcon from '~/assets/icons/folder-functions-open.svg';
import JSIcon from '~/assets/icons/javascript.svg';
import TSIcon from '~/assets/icons/typescript.svg';
import CSharpIcon from '~/assets/icons/csharp.svg';
import CoffeeScriptIcon from '~/assets/icons/coffeescript.svg';

import FolderClientIcon from '~/assets/icons/folder-client-open.svg';
import ReactIcon from '~/assets/icons/react_ts.svg';
import ReduxIcon from '~/assets/icons/redux-store.svg';
import MaterialUiIcon from '~/assets/icons/material-ui.svg';
import HtmlIcon from '~/assets/icons/html.svg';
import CssIcon from '~/assets/icons/css.svg';
import SassIcon from '~/assets/icons/sass.svg';
import JssIcon from '~/assets/icons/jss.svg';
import GatsbyIcon from '~/assets/icons/gatsby.svg';
import NetlifyIcon from '~/assets/icons/netlify.svg';
import AngularIcon from '~/assets/icons/angular.svg';

import FolderNodeIcon from '~/assets/icons/folder-node-open.svg';
import NodeJsIcon from '~/assets/icons/nodejs.svg';
import MongoDBIcon from '~/assets/icons/mongodb.svg';
import SocketIoIcon from '~/assets/icons/socket-io.svg';
import AWSIcon from '~/assets/icons/aws.svg';
import DockerIcon from '~/assets/icons/docker.svg';
import KubernetesIcon from '~/assets/icons/kubernetes.svg';

import FolderDocsIcon from '~/assets/icons/folder-docs-open.svg';
import ReadmeIcon from '~/assets/icons/readme.svg';

import FolderToolsIcon from '~/assets/icons/folder-tools-open.svg';
import GitIcon from '~/assets/icons/git.svg';
import GitlabIcon from '~/assets/icons/gitlab.svg';
import JestIcon from '~/assets/icons/jest.svg';
import CypressIcon from '~/assets/icons/cypress.svg';
import SentryIcon from '~/assets/icons/sentry.svg';
import WebpackIcon from '~/assets/icons/webpack.svg';
import ParcelIcon from '~/assets/icons/parcel.svg';
import I18nIcon from '~/assets/icons/i18n.svg';
import VsCodeIcon from '~/assets/icons/vscode.svg';

export interface MySkillsProps {
  className?: string;
}

export const MySkills: React.FC<MySkillsProps> = (props) => {
  return (
    <SkillsExplorer className={props.className}>
      <SkillsFolder icon={FolderSrcIcon} name="My Skills" expandable={false}>
        <SkillsFolder icon={FolderFunctionsIcon} name="Languages">
          <SkillItem icon={JSIcon}>JavaScript</SkillItem>
          <SkillItem icon={TSIcon}>TypeScript</SkillItem>
          <SkillItem icon={CSharpIcon} hint="(background)">
            C#
          </SkillItem>
          <SkillItem icon={CoffeeScriptIcon} hint="(background)">
            CoffeeScript
          </SkillItem>
        </SkillsFolder>

        <SkillsFolder icon={FolderClientIcon} name="Front End">
          <SkillItem icon={ReactIcon}>React</SkillItem>
          <SkillItem icon={ReduxIcon} hint="(reselect, recompose)">
            Redux
          </SkillItem>
          <SkillItem icon={MaterialUiIcon}>Material UI</SkillItem>
          <SkillItem icon={HtmlIcon}>HTML</SkillItem>
          <SkillItem icon={CssIcon}>CSS</SkillItem>
          <SkillItem icon={SassIcon}>SASS</SkillItem>
          <SkillItem icon={JssIcon}>CSS in JS</SkillItem>
          <SkillItem icon={GatsbyIcon}>Gatsby</SkillItem>
          <SkillItem icon={NetlifyIcon}>Netlify CMS</SkillItem>
          <SkillItem icon={AngularIcon} hint="(background)">
            Angular
          </SkillItem>
        </SkillsFolder>

        <SkillsFolder icon={FolderNodeIcon} name="Back End">
          <SkillItem icon={NodeJsIcon}>Node.js</SkillItem>
          <SkillItem icon={MongoDBIcon}>MongoDB</SkillItem>
          <SkillItem icon={SocketIoIcon}>Socket.io</SkillItem>
          <SkillItem icon={AWSIcon} hint="(background)">
            AWS
          </SkillItem>
          <SkillItem icon={DockerIcon} hint="(background)">
            Docker
          </SkillItem>
          <SkillItem icon={KubernetesIcon} hint="(background)">
            Kubernetes
          </SkillItem>
        </SkillsFolder>

        <SkillsFolder icon={FolderToolsIcon} name="Tools">
          <SkillItem icon={GitIcon}>Git</SkillItem>
          <SkillItem icon={GitlabIcon}>Gitlab CI</SkillItem>
          <SkillItem icon={JestIcon}>Jest</SkillItem>
          <SkillItem icon={CypressIcon}>Cypress</SkillItem>
          <SkillItem icon={SentryIcon}>Sentry</SkillItem>
          <SkillItem icon={WebpackIcon}>Webpack</SkillItem>
          <SkillItem icon={ParcelIcon}>Parcel</SkillItem>
          <SkillItem icon={I18nIcon}>i18n</SkillItem>
          <SkillItem icon={VsCodeIcon}>VS Code</SkillItem>
        </SkillsFolder>

        <SkillsFolder icon={FolderDocsIcon} name="Knowledge">
          <SkillItem icon={ReadmeIcon}>OOP</SkillItem>
          <SkillItem icon={ReadmeIcon}>Functional Programming</SkillItem>
          <SkillItem icon={ReadmeIcon}>TDD</SkillItem>
          <SkillItem icon={ReadmeIcon}>Design Patterns</SkillItem>
        </SkillsFolder>
      </SkillsFolder>
    </SkillsExplorer>
  );
};
