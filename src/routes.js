import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/navbar";

import Login from "./module/login/views/index";
import Home from "./module/home/views/home";
import Registro from "./module/login/views/registrar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
        <div>
          <NavBar />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Home} />
          <Route exact path="/registrar" component={Registro} />
        </div>
      </Router>
    );
  }
}

export default Routes;
