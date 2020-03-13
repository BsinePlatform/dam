import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/CardWorkflow/Card.js";
import CardImage from "components/CardItem/CardImage.js";
// bootstrap
import { Row, ButtonGroup, Button } from "react-bootstrap"

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
      
      <div xs={3} sm={3} md={3} lg={3}>
        <Card className={classes.sidebarRight}>
          <div className={classes.firstLineSR}>
            {/* First Line Buttons */}
            <Row className='btt-row'>
              <ButtonGroup id='btt-gp' className='col-3'>
                <Button className='col-4 btn-secondary btt'>Download</Button>
                <Button className='col-4 btn-secondary btt'>Compartilhar</Button>
                <Button className='col-4 btn-secondary btt'>Postar</Button>
              </ButtonGroup>
            </Row>
            {/* Second Line Buttons */}
            <Row className='btt-row'>
              <ButtonGroup id='btt-gp-sl' className='col-1'>
                <Button className='col-6 btn-secondary btt-second'>A</Button>
                <Button className='col-6 btn-secondary btt-second'>B</Button>
              </ButtonGroup>
              <ButtonGroup id='btt-gp-sl' className='col-1'>
                <Button className='col-6 btn-secondary btt-second'>C</Button>
                <Button className='col-6 btn-secondary btt-second'>D</Button>
              </ButtonGroup>
              <ButtonGroup id='btt-gp-sl' className='col-1'>
                <Button className='col-6 btn-secondary btt-second'>E</Button>
                <Button className='col-6 btn-secondary btt-second'>F</Button>
              </ButtonGroup>
            </Row>
            {/* Third Line Buttons */}
            <Row className='btt-row'>
              <ButtonGroup id='btt-gp-tl' className='col-3'>
                <Button className='col-4 btn-secondary btt-third'>Fundamentos</Button>
                <Button className='col-4 btn-secondary btt-third'>Metadados</Button>
                <Button className='col-4 btn-secondary btt-third'>Relações</Button>
              </ButtonGroup>
            </Row>

            {/* Sidebar Right Content */}
            <Row className='btt-row'>
                <p className='col-3 content-title'>INFORMAÇÕES</p>
            </Row>
          </div>
        </Card>
      </div>
      </GridContainer>
  );
}
