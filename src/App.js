import React from "react";

import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store";

import Routes from "./routes";

import "./styles/global";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
