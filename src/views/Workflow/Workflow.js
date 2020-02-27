import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/CardWorkflow/Card.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardImage from "components/CardItem/CardImage.js";
import Category from "components/Category/Category.js";


import Catalogo from "assets/img/ativos/catalogo.png";
import Cardapio from "assets/img/ativos/cardapio.png";
import CartaoVisita from "assets/img/ativos/cartao-visita.png";
import Flyer from "assets/img/ativos/flyer.png";
import Folder from "assets/img/ativos/folder.png";
import Livro from "assets/img/ativos/livro.jpg";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


export default function Dashboard(props) {

  const id = props.match.params.id;
  console.log(id);

  const classes = useStyles();
  let cards = []
  let cardTitles = [
    'Teste 01',
    'Projeto 01',
    'Flyer Palestra',
    'Criação da Capa',
    'Tarefa X',
    'Teste 02',
    ];
  let cardResume = [
    'Novo catálogo de produtos',
    'Flyer simples',
    'Cartão de visita padrão 2020',
    'Folder campanha de verão',
    'Regras e direitos dos funcionários',
    'Cardápio lojas shopping'
    ];
  // let cardActivity = [
  //   'criado agora',
  //   'atualizado há 5 minutos',
  //   'criado ontem',
  //   'atualizado há 1 semana',
  //   'editado há 2 meses',
  //   'criado em 20/08/2019',
  //   'atualizado há 1 ano'
  //   ];
  // let cardColorClasses = [
  //   cardHeaderPlan,
  //   cardHeaderExec,
  //   cardHeaderImp,
  //   cardHeaderFinal
  // ];
  let categories = [];
  let titles = [
    'Planejada',
    'Executando',
    'Impasse',
    'Finalizada'
  ];

  for(let i=0; i<4; i++){
    // Categories
    // categories.push(
    //   <GridItem xs={12} sm={6} md={4} lg={2}>
    //       <Category>
    //           <div className={classes.categoryName}>{categoriesTitle[i]}</div>
    //       </Category>
    //   </GridItem>
    // )

    // Cards
    cards.push(
      <GridItem xs={6} sm={6} md={3} lg={3}>
        <CardHeader xs={6} sm={6} md={3} lg={12}>
          <div className={classes.cardHeaderPlan}>
          </div>
          <p className={classes.cardCategoryTitle}>{titles[i]}</p>
        </CardHeader>
        <Card className={classes.cardWorkflowAdd}>
            <div>+</div>
        </Card>
        <Card className={classes.cardWorkflow}>
          <CardBody>
            <h4 className={classes.cardTitle}>{cardTitles[i]}</h4>
          </CardBody>
        </Card>
      </GridItem>
    )
  }
  
  return (
    <div>
      <GridContainer xs={12} sm={12} md={12} lg={12}>
        {/* <GridItem xs={12} sm={12} md={12} lg={12}>
          <div className={classes.categoryTitle}>
            <span className={classes.categoryTitle}>Impressos</span>
            <span className={classes.categorySubTitle}> / 158 ativos</span>
          </div>
          <hr></hr>
        </GridItem> */}
      </GridContainer>
      <GridContainer xs={12} sm={12} md={12} lg={12}>
        {cards}
      </GridContainer>
      
    </div>
  );
}
