import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AboutMe from '~/src/routes/AboutMe';
import Experience from '~/src/routes/Experience';
import Education from '~/src/routes/Education';
import Contacts from '~/src/routes/Contacts';

export const ContentRoutes: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Suspense>
  );
};
