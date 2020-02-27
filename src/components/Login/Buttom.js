import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/buttomStyle.js";

const useStyles = makeStyles(styles);

export default function Buttom(props) {
  const classes = useStyles();
  const { className, children, name, ...rest } = props;
  const buttomClasses = classNames({
    [classes.buttom]: true,
    [className]: className !== undefined
  });
  return (
    <div className={buttomClasses} {...rest}>
      {children}
    </div>
  );
}

Buttom.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};
