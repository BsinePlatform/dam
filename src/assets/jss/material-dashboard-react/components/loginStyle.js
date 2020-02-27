import {
    container,
    blackColor,
    hexToRgb,
    grayColor
  } from "assets/jss/material-dashboard-react.js";
  
  const loginStyle = () => ({
    login: {
        margin: "auto",
        boxShadow: "none",
        height: '100%',
        position: "relative",
        transition: "all 150ms ease 0s",
        "& #alignLogin": {
            margin:"auto",
            marginTop: "0px"
        },
    },
    loginBody: {
        margin: "auto",
        marginTop: "10%",
        marginBottom: "30px",
        verticalAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "none",
        position: "relative",
        height: "570px",
        width: "576px",
        color: grayColor[7],
        border: "0",
        borderRadius: "3px",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        display: "block"
    },
    logoImage: {
        "& div":{
        textAlign: "center",
        // margin: "35px",
        // height: "120px",
        },
        "& div img":{
            marginTop: "30px",
            width: "60%"
        }
    },
    loginTitle: {
        "& div #slogan":{
            marginTop: "30px",
            marginBottom: "10px"
        },
        fontSize: "34px",
        fontWeight: "500",
        color: "#43425D",
    },
    loginInputs: {
        textAlign: "center",
        "& #alignInputLogin": {
            margin:"auto",
            marginTop: "0px"
        },
        "& div":{
            margin: "0px",
            paddingTop: "10px",
            },
        "& div input":{
            paddingTop: "10px",
            }
    },
    loginLinks: {
        "& a":{
        fontSize: "14px",
        textAlign: "left",
        textDecoration: "underline"
        },
    },
    loginButtom: {
        "& #alignButtomLogin": {
            margin:"auto",
            marginTop: "25px"
        },
    },
    container: {
      ...container,
      height: "-webkit-fill-available",
      minHeight: "50px"
    },
  });
  
  export default loginStyle;
  