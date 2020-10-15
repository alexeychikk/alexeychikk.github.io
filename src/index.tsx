import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { THEME } from "~/config/theme";
import { IndexRoute } from "~/routes";
import { SkillsProvider } from "~/components/SkillsProvider";

import * as serviceWorker from "./serviceWorker";

const Application: React.FC<{}> = () => (
  <MuiThemeProvider theme={THEME}>
    <CssBaseline />
    <Router>
      <SkillsProvider>
        <IndexRoute />
      </SkillsProvider>
    </Router>
  </MuiThemeProvider>
);

render(<Application />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
