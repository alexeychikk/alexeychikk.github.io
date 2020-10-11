import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "~/config/theme";
import { IndexRoute } from "~/routes";

import * as serviceWorker from "./serviceWorker";

const Application: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <IndexRoute />
    </Router>
  </MuiThemeProvider>
);

render(<Application />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
