import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Container, Image, Description } from "./style";

class Cart extends Component {
  render() {
    return (
      <Container>
        <Table>
          <tbody>
            <tr>
              <th />
              <th className="left">Produto</th>
              <th>Valor</th>
              <th>Qtd</th>
              <th>Subtotal</th>
              <th />
            </tr>
            <tr>
              <Image>
                <img
                  src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg"
                  alt="produto"
                />
              </Image>
              <td className="left">
                <p>Camiseta Trok</p>
                <span>Element</span>
              </td>
              <Description className="spotlight">R$50,00</Description>
              <Description>
                <input type="text" value="0" />
              </Description>
              <Description className="spotlight">R$100,00</Description>
              <Description>
                <i class="fa fa-times" />
              </Description>
            </tr>
            <tr>
              <Image>
                <img
                  src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg"
                  alt="produto"
                />
              </Image>
              <td className="left">
                <p>Camiseta Trok</p>
                <span>Element</span>
              </td>
              <Description className="spotlight">R$50,00</Description>
              <Description>
                <input type="text" value="0" />
              </Description>
              <Description className="spotlight">R$100,00</Description>
              <Description>
                <i class="fa fa-times" />
              </Description>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Cart;
