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
            marginTop: "25px"
        }, 
        "& button": {
            height: '52px',
            width: '50%',
            background: "#43425D",
            fontSize: "26px",
            fontWeight: "400",
            color: "#fff",
            border: "0",
            borderRadius: "10px",
            fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
            lineHeight: "1.5em",
            textDecoration: "capitalize",
            transition: 'transform .2s'
        },
        "& button:hover": {
            background: "#272551",
            transform: 'scale(1.01)'
        }
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
            marginTop: "10px",
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
            marginTop: "0px",
        },
        "& div":{
            margin: "0px",
            padding: "10px 0px",
            },
        "& div input":{
            paddingTop: "5px",
            border: '0',
            borderRadius: '0',
            borderColor: '#000',
            opacity: '50%',
            borderBottom: 'solid 0.5px',
            // fontFamily: 'FontAwesome',
            fontStyle: 'normal',
            fontWeight: 'normal',
            textDecoration: 'inherit'
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
  