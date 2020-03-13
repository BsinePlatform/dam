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
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400,700,900', 'sans-serif', 'Font Awesome']
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
        <Redirect to={{ pathname: "/user", state: { from: props.location } }} />
    )
    }
/>
);
export default () => (

    <Router history={hist}>
        <Switch>
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin/dashboard" />
        </Switch>
    </Router>
);