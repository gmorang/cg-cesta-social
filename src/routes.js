import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/navbar";

import Login from "./module/login/views/index";
import Layout from "./components/layout";
import Home from "./module/home/views/home";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Home} />
        </div>
      </Router>
    );
  }
}

export default Routes;
