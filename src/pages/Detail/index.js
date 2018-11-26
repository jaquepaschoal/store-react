import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerImg, Description, Content, Price } from "./style";

class Detail extends Component {
  render() {
    return (
      <Content>
        <ContainerImg>
          <img
            src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg"
            alt=""
          />
        </ContainerImg>
        <Description>
          <div>
            <h1>Camiseta Trok</h1>
            <span>Element</span>
          </div>
          <div>
            <Price>R$50,00</Price>
            <button>Adicionar ao carrinho</button>
          </div>
        </Description>
      </Content>
    );
  }
}

export default Detail;
