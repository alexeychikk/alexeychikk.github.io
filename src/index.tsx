import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/style/index.scss';
import { MainApplication } from './ui/apps';

const Application: React.FunctionComponent<{}> = () => (
  <Router>
    <MainApplication />
  </Router>
);

render(<Application />, document.getElementById('root'));
