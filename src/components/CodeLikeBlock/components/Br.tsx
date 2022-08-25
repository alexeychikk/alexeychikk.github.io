import React from "react";

import { L, LProps } from "./L";

/**
 * Line-break syntax-highlighting component.
 */
export const Br: React.FC<LProps> = (props) => <L {...props}>&nbsp;</L>;
