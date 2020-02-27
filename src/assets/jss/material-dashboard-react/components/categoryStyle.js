import {
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const categoryStyle = {
  category: {
    border: "0",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    // width: "272px",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    marginTop: '15px',
    marginBottom: '5px',
    fontSize: "16px",
    height: "58px",
    textAlign: "center",
    fontFamily: 'Lato',
    fontWeight: '700' 
    
    // "& span": {
    //   margin: 'auto'
    // }
  }
};

export default categoryStyle;
