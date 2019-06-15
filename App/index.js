import React from "react";
import { Provider } from "react-redux";

import { AlertProvider } from "./components/Alert";
import Home from "./screens/Home";
import { store } from "./config/store";

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Home />
    </AlertProvider>
  </Provider>
);
