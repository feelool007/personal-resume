import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { paths } from "./paths";

class RouterView extends React.Component<{}> {
  render = () => {
    return (
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/profile" />} />
        {paths.map((p, index) => {
          const Page = React.lazy(() => import("../pages/" + p.name));
          return (
            <Route
              key={index}
              path={p.to}
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Page />
                </Suspense>
              )}
            />
          );
        })}
        {/* redirect to home page (profile page) if does not match any path */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    );
  };
}

export default RouterView;
