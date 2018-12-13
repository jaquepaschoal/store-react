import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Table, Container, Image, Description } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as cartActions } from "../../store/ducks/cart";

class Cart extends Component {
  handleQuantity(e, id) {
    parseInt(e.target.value) === 0
      ? this.props.deleteProduct(id)
      : this.props.addQuantity(id, e.target.value);
  }

  deleteProduct(id) {
    this.props.deleteProduct(id);
  }

  renderProducts() {
    const productsCart = this.props.cart.data;
    return (
      <Fragment>
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
                    <Description className="spotlight">{`R$${product.price.toLocaleString(
                      "pt-BR"
                    )}`}</Description>
                    <Description>
                      <input
                        id={product.id}
                        type="number"
                        min="0"
                        value={product.qnt}
                        onChange={e => {
                          this.handleQuantity(e, product.id, product.price);
                        }}
                      />
                    </Description>
                    <Description className="spotlight">
                      {`R$${product.subtotal.toLocaleString("pt-BR")}`}
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
          <div>
            <span>total</span>
            <p>R${`${this.props.cart.total}`}</p>
          </div>
        </Container>
      </Fragment>
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
