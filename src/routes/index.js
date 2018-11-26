import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import Footer from "../components/Footer";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/detail" component={Detail} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
