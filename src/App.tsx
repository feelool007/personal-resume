import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout";
import store from "./store";
import { RouterView } from "./router";

export default class extends React.Component<{}> {
  render = () => {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <RouterView />
          </Layout>
        </Router>
      </Provider>
    );
  };
}
