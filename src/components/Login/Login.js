import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/loginStyle.js";

const useStyles = makeStyles(styles);

export default function Login(props) {
  const classes = useStyles();
  const { className, children, name, ...rest } = props;
  const loginClasses = classNames({
    [classes.login]: true,
    [classes.loginBody]: true,
    [classes.logoImage]: true,
    [classes.loginTitle]: true,
    [classes.loginInputs]: true,
    [classes.loginLinks]: true,
    [classes.loginButtom]: true,
    [className]: className !== undefined
  });
  return (
    <div className={loginClasses} {...rest}>
      {children}
    </div>
  );
}

Login.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};
