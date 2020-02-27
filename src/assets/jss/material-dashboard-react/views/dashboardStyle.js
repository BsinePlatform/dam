import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: '0',
    marginBottom: "0",
    // textAlign: "center",
    margin: "auto"
  },
  cardWorkflowAdd: {
    height: "35px",
    marginBottom: "10px",
    "& div": {
      margin: "auto",
      opacity: "50%",
      color: "#43425D",
      textAlign: "center",
      fontSize: "30px",
      fontFamily: "'Roboto', 'Lato', 'Helvetica', 'Arial', sans-serif",
      fontWeight: '400'
    }
  },
  cardCategoryTitle: {
    // color: grayColor[0],
    color: '#43425D',
    marginTop: "10px",
    fontSize: "18px",
    fontFamily: "'Roboto', 'Lato', 'Helvetica', 'Arial', sans-serif",
    fontWeight: '400',
    textAlign: "center",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontFamily: "'Roboto', 'Lato', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontWeight: '400',
    // fontSize: "16px",
    fontSize: "18px",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  categoryName: {
      margin: 'auto',
      textTransform: 'uppercase'
  },
  categoryTitle: {
    marginTop: '0px',
    marginBottom: '0px',
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    fontSize: "18px",
    fontWeight: "500",
  },
  categoryTitleWorkflow: {
    marginTop: '20px',
    marginBottom: '0px',
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    fontSize: "18px",
    fontWeight: "500",
  },
  categorySubTitle: {
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    color: "#C0C0C0"
  },
  categoryMore: {
    margin: "5px",
    fontFamily: "'Lato', 'Helvetica', 'Arial', sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    color: "#C0C0C0",
    float: 'right'
  },
  cardHeaderPlan: {
    padding: "4.5px",
    background: "#EF6756"
  },
  cardHeaderExec: {
    padding: "4.5px",
    background: "#64C8D6"
  },
  cardHeaderImp: {
    padding: "4.5px",
    background: "#FAB117"
  },
  cardHeaderFinal: {
    padding: "4.5px",
    background: "#A3CE62"
  }
};

export default dashboardStyle;
