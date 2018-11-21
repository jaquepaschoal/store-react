import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Menu />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
