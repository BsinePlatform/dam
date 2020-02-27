/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import User from "layouts/User.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400,700,900', 'sans-serif']
  }
});

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
ReactDOM.render(

  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
