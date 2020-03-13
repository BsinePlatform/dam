import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/CardWorkflow/Card.js";
import CardImage from "components/CardItem/CardImage.js";
// bootstrap
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap"

import Image from "assets/img/ativos/image-64.png";

import styles from "assets/jss/material-dashboard-react/views/itemStyle.js";

const useStyles = makeStyles(styles);


export default function Item(props) {


  const classes = useStyles();

  return (
      <GridContainer id='item-container' xs={12} sm={12} md={12} lg={12}>
      <GridItem xs={9} sm={9} md={9} lg={9}>
          <CardImage>
              <img src={Image} width='100%' />
          </CardImage>
      </GridItem>
      
      <GridItem xs={3} sm={3} md={3} lg={3}>
        <Card className={classes.sidebarRight}>
          <div className={classes.firstLineSR}>
            {/* First Line Buttons */}
            <Row className='col-12 btt-row'>
              <ButtonToolbar id='btt-gp' className='col-12'>
                <Button className='col-4 btn-secondary btt'>Download</Button>
                <Button className='col-4 btn-secondary btt'>Compartilhar</Button>
                <Button className='col-4 btn-secondary btt'>Postar</Button>
              </ButtonToolbar>
            </Row>
            {/* Second Line Buttons */}
            <Row className='btt-row'>
              <ButtonToolbar id='btt-gp-sl' className='col-4'>
                <Button className='col-6 btn-secondary btt-second'>A</Button>
                <Button className='col-6 btn-secondary btt-second'>B</Button>
              </ButtonToolbar>
              <ButtonToolbar id='btt-gp-sl' className='col-4'>
                <Button className='col-6 btn-secondary btt-second'>C</Button>
                <Button className='col-6 btn-secondary btt-second'>D</Button>
              </ButtonToolbar>
              <ButtonToolbar id='btt-gp-sl' className='col-4'>
                <Button className='col-6 btn-secondary btt-second'>E</Button>
                <Button className='col-6 btn-secondary btt-second'>F</Button>
              </ButtonToolbar>
            </Row>
            {/* Third Line Buttons */}
            <Row className='btt-row'>
              <Col className='content-adjust'>
              <ButtonToolbar id='btt-gp-tl' className='col-12'>
                <Button className='col-4 btn-secondary btt-third'>Fundamentos</Button>
                <Button className='col-4 btn-secondary btt-third'>Metadados</Button>
                <Button className='col-4 btn-secondary btt-third'>Relações</Button>
              </ButtonToolbar>
              </Col>
            </Row>

            {/* Sidebar Right Content */}
            <Row className='btt-row'>
              <Col >
                <p className='content-title'><span>INFORMAÇÕES</span></p>
              </Col>
            </Row>
          </div>
        </Card>
      </GridItem>
      </GridContainer>
  );
}
