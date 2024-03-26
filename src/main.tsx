import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { SkillsProvider } from '~/components/SkillsProvider';
import { THEME } from '~/config/theme';
import { IndexRoute } from '~/routes';

const Application: React.FC = () => (
  <MuiThemeProvider theme={THEME}>
    <CssBaseline />
    <Router>
      <SkillsProvider>
        <IndexRoute />
      </SkillsProvider>
    </Router>
  </MuiThemeProvider>
);

render(<Application />, document.getElementById('root'));
