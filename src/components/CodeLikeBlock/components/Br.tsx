import React from 'react';

import type { LProps } from './L';
import { L } from './L';

/**
 * Line-break syntax-highlighting component.
 */
export const Br: React.FC<LProps> = (props) => <L {...props}>&nbsp;</L>;
