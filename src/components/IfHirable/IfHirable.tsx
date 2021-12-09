import React from "react";

import { IS_HIRABLE } from "~/config/experience";

export const IfHirable: React.FC = (props) => {
  return IS_HIRABLE ? <>{props.children}</> : null;
};

export const IfNotHirable: React.FC = (props) => {
  return !IS_HIRABLE ? <>{props.children}</> : null;
};
