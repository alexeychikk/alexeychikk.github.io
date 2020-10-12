import React from "react";

import {
  SkillItem,
  SkillsExplorer,
  SkillsFolder,
} from "~/components/SkillsExplorer";

import { ReactComponent as FolderSrcIcon } from "~/assets/icons/folder-src-open.svg";
import { ReactComponent as FolderFunctionsIcon } from "~/assets/icons/folder-functions-open.svg";
import { ReactComponent as JSIcon } from "~/assets/icons/javascript.svg";
import { ReactComponent as TSIcon } from "~/assets/icons/typescript.svg";
import { ReactComponent as CSharpIcon } from "~/assets/icons/csharp.svg";
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
import { ReactComponent as NetlifyIcon } from "~/assets/icons/netlify.svg";
import { ReactComponent as AngularIcon } from "~/assets/icons/angular.svg";

import { ReactComponent as FolderServerIcon } from "~/assets/icons/folder-server-open.svg";
import { ReactComponent as NodeJsIcon } from "~/assets/icons/nodejs.svg";
import { ReactComponent as MongoDBIcon } from "~/assets/icons/mongodb.svg";
import { ReactComponent as SocketIoIcon } from "~/assets/icons/socket-io.svg";
import { ReactComponent as AWSIcon } from "~/assets/icons/aws.svg";
import { ReactComponent as DockerIcon } from "~/assets/icons/docker.svg";
import { ReactComponent as KubernetesIcon } from "~/assets/icons/kubernetes.svg";

import { ReactComponent as FolderDocsIcon } from "~/assets/icons/folder-docs-open.svg";
import { ReactComponent as ReadmeIcon } from "~/assets/icons/readme.svg";

import { ReactComponent as FolderToolsIcon } from "~/assets/icons/folder-tools-open.svg";
import { ReactComponent as GitIcon } from "~/assets/icons/git.svg";
import { ReactComponent as GitlabIcon } from "~/assets/icons/gitlab.svg";
import { ReactComponent as JestIcon } from "~/assets/icons/jest.svg";
import { ReactComponent as CypressIcon } from "~/assets/icons/cypress.svg";
import { ReactComponent as SentryIcon } from "~/assets/icons/sentry.svg";
import { ReactComponent as WebpackIcon } from "~/assets/icons/webpack.svg";
import { ReactComponent as I18nIcon } from "~/assets/icons/i18n.svg";
import { ReactComponent as VsCodeIcon } from "~/assets/icons/vscode.svg";

export interface MySkillsProps {
  className?: string;
}

const MySkillsBase: React.FC<MySkillsProps> = (props) => {
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

        <SkillsFolder icon={FolderServerIcon} name="Back End">
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

export const MySkills = React.memo(MySkillsBase);
