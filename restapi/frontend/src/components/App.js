import React, { Fragment } from "react";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

export default App;
