// @ts-expect-error this import is required in react 16, but TS reports it as unused
import React from 'react';
import { render } from 'react-dom';

import { Application } from './App';

render(<Application />, document.getElementById('root'));
