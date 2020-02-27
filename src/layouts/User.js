import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Login from "components/Login/Login.js";
import Buttom from "components/Login/Buttom.js";
import LoginLogo from "assets/img/bsine/logo.png";
import CustomInput from "components/CustomInput/CustomInput.js";


import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/user" to="/user/login" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function User({ ...rest }) {
  // styles
  const classes = useStyles();
  return (
    <GridContainer className={classes.login} xs={12} sm={12} md={12} lg={12}>
      <Login xs={12} sm={12} md={6} lg={6} className={classes.loginBody}>
        <div>
          <img src={LoginLogo} className={classes.logoImage} />
        </div>
        <div className={classes.loginTitle}>
          <p id="slogan">Feliz por você estar aqui.</p>
        </div>
        <GridItem className={classes.loginInputs} xs={12} sm={12} md={12} lg={12}>
          <GridItem id="alignInputLogin" xs={9} sm={9} md={9} lg={9}>
            <CustomInput
              labelText="Usuário"
              id="user"
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              labelText="Senha"
              id="password"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridItem>
        <GridItem className={classes.loginInputs} xs={12} sm={12} md={12} lg={12}>
          <GridItem id="alignLogin" xs={9} sm={9} md={9} lg={9}>
            <a href="#"><p>Criar uma conta</p></a>
            <a href="#"><p>Esqueci minha senha</p></a>
          </GridItem>
        </GridItem>
        <GridItem className={classes.loginButtom} xs={12} sm={12} md={12} lg={12}>
          <GridItem id="alignButtomLogin" xs={6} sm={6} md={6} lg={6}>
            <Buttom><p><span className={classes.buttomText}>Entrar</span></p></Buttom>
          </GridItem>
        </GridItem>
      </Login>
    </GridContainer>
  );
}
