import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout";
import { RouterView } from "./router";

export default class extends React.Component<{}> {
  render = () => {
    return (
      <Router>
        <Layout>
          <RouterView />
        </Layout>
      </Router>
    );
  };
}
