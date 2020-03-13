import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import api from "../services/api";
import { login } from "../services/auth";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Login from "components/Login/Login.js";
import Buttom from "components/Login/Buttom.js";
import LoginLogo from "assets/img/bsine/logo.png";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Container, Form, Row, Col, Button } from "react-bootstrap"


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

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  // constructor(props){
  //   const useStyles = makeStyles(styles);
  //   const classes = useStyles();
  // }

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/blog-overview");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
  // styles
  return (
    <GridContainer  xs={12} sm={12} md={12} lg={12}>
      <Login xs={12} sm={12} md={6} lg={6} >
        <div>
          <img src={LoginLogo}  />
        </div>
        <div >
          <p id="slogan">Feliz por você estar aqui.</p>
        </div>
          <Form onSubmit={this.handleSignIn}>
        <GridItem  xs={12} sm={12} md={12} lg={12}>
          <GridItem id="alignInputLogin" xs={9} sm={9} md={9} lg={9}>
            {/* <CustomInput
              type="email" placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })}
              labelText="Usuário"
              id="user"
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })}
              labelText="Senha"
              id="password"
              formControlProps={{
                fullWidth: true
              }}
            /> */}
            <Form.Group>
              <Form.Control type="email" onKeyUp={this.handleLoginKeyUp} placeholder="Usuário" onChange={e => this.setState({ email: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })} />
            </Form.Group>
          </GridItem>
        </GridItem>
        <GridItem  xs={12} sm={12} md={12} lg={12}>
          <GridItem id="alignLogin" xs={9} sm={9} md={9} lg={9}>
            <a href="#"><p>Criar uma conta</p></a>
            <a href="#"><p>Esqueci minha senha</p></a>
          </GridItem>
        </GridItem>
        <GridItem  xs={12} sm={12} md={12} lg={12}>
          <GridItem  xs={12} sm={12} md={12} lg={12}>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </GridItem>
        </GridItem>
        </Form>
      </Login>
    </GridContainer>
  );
}
}

export default withRouter(SignIn);