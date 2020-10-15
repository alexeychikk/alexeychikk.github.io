import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AboutMe from "~/routes/AboutMe";
import Experience from "~/routes/Experience";
import Education from "~/routes/Education";
import Contacts from "~/routes/Contacts";
import Projects from "~/routes/Projects";

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
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Suspense>
  );
};
