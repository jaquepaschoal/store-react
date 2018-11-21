import React from "react";
import { Container } from "./style";

const Menu = () => (
  <Container>
    <ul>
      <li className="active">
        <a href="google.com">Camisetas</a>
      </li>
      <li>
        <a href="google.com">Camisas</a>
      </li>
      <li>
        <a href="google.com">Bonés</a>
      </li>
      <li>
        <a href="google.com">Blusas</a>
      </li>
      <li>
        <a href="google.com">Calçados</a>
      </li>
    </ul>
  </Container>
);

export default Menu;
