import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/CardItem/Card.js";
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
    'Catálogo 2020',
    'Flyer - My Brand',
    'Cartão de Visita - My Brand',
    'Folder - My Brand',
    'MANUAL DO FUNCIONÁRIO',
    'Cardápio - My Brand'
    ];
  let cardType = [
    'PSD',
    'JPEG',
    'PNG',
    'JPG',
    'PDF',
    'AI'
    ];
  let cardResume = [
    'Novo catálogo de produtos',
    'Flyer simples',
    'Cartão de visita padrão 2020',
    'Folder campanha de verão',
    'Regras e direitos dos funcionários',
    'Cardápio lojas shopping'
    ];
  let cardActivity = [
    'criado agora',
    'atualizado há 5 minutos',
    'criado ontem',
    'atualizado há 1 semana',
    'editado há 2 meses',
    'criado em 20/08/2019',
    'atualizado há 1 ano'
    ];
  let cardAtivos = [
    Catalogo,
    Cardapio,
    CartaoVisita,
    Flyer,
    Folder,
    Livro,
  ];
  let categories = [];
  let categoriesTitle = [
    'impressos',
    'imagens',
    'redes sociais',
    'vídeos',
    'áudios',
    'manuais'
  ];

  for(let i=0; i<6; i++){
    // Categories
    categories.push(
      <GridItem xs={12} sm={6} md={4} lg={2}>
          <Category>
              <div className={classes.categoryName}>{categoriesTitle[i]}</div>
          </Category>
      </GridItem>
    )

    // Cards
    cards.push(
      <GridItem xs={12} sm={6} md={4} lg={2}>
        <Card>
            <CardImage>
              <img src={cardAtivos[i]} height='142' />
            </CardImage>
          <CardBody>
            <h4 className={classes.cardTitle}>{cardTitles[i]}</h4>
            <p className={classes.cardCategory}>
              {cardResume[i]}
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> {cardActivity[i]}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    )
  }
  
  return (
    <div>
      <GridContainer xs={12} sm={12} md={12} lg={12}>
          {categories}
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <p className={classes.categoryMore}>+ Ver todos</p>
        </GridItem>
      </GridContainer>
      <GridContainer xs={12} sm={12} md={12} lg={12}>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <div className={classes.categoryTitle}>
            <span className={classes.categoryTitle}>Impressos</span>
            <span className={classes.categorySubTitle}> / 158 ativos</span>
          </div>
          <hr></hr>
        </GridItem>
      </GridContainer>
      <GridContainer xs={12} sm={12} md={12} lg={12}>
        {cards}
      </GridContainer>
      
    </div>
  );
}
