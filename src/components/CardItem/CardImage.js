import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/cardImageStyle.js";

const useStyles = makeStyles(styles);

export default function CardImage(props) {
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardImageClasses = classNames({
    [classes.cardImage]: true,
    [classes.cardImagePlain]: plain,
    [classes.cardImageProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={cardImageClasses} {...rest}>
      {children}
    </div>
  );
}

CardImage.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node
};
