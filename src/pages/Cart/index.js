import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Container, Image, Description } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as cartActions } from "../../store/ducks/cart";

class Cart extends Component {
  handleQuantity(e, id, price) {
    this.props.addQuantity(id, e.target.value);
  }

  deleteProduct(id) {
    this.props.deleteProduct(id);
  }

  renderProducts() {
    const productsCart = this.props.cart.data;
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
            {productsCart.map(product => {
              return (
                <tr key={product.id}>
                  <Image>
                    <img src={product.image} alt={product.name} />
                  </Image>
                  <td className="left">
                    <p>{product.name}</p>
                    <span>{product.brand}</span>
                  </td>
                  <Description className="spotlight">{`R$${
                    product.price
                  }`}</Description>
                  <Description>
                    <input
                      id={product.id}
                      type="number"
                      value={product.qnt ? product.qnt : 1}
                      onChange={e => {
                        this.handleQuantity(e, product.id, product.price);
                      }}
                    />
                  </Description>
                  <Description className="spotlight">
                    {product.subtotal ? product.subtotal : product.price}
                  </Description>
                  <Description>
                    <i
                      onClick={() => {
                        this.deleteProduct(product.id);
                      }}
                      className="fa fa-times"
                    />
                  </Description>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
  render() {
    return this.props.cart.data.length > 0 ? (
      this.renderProducts()
    ) : (
      <Container>
        <h1>O seu carrinho está vazio :(</h1>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
