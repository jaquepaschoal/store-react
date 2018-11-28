import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerImg, Description, Content, Price } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProductDetailsActions } from "../../store/ducks/productDetails";

import Loading from "../../components/Loading";
class Detail extends Component {
  componentDidMount() {
    this.loadProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadProduct();
    }
  }

  loadProduct() {
    const { id } = this.props.match.params;
    this.props.getProductDetailsRequest(id);
  }

  renderProduct() {
    const product = this.props.productDetails.data;
    return (
      <Content>
        <ContainerImg>
          <img src={product.image} alt={product.name} />
        </ContainerImg>
        <Description>
          <div>
            <h1>{product.name}</h1>
            <span>{product.brand}</span>
          </div>
          <div>
            <Price>{`R$${product.price}`}</Price>
            <button>Adicionar ao carrinho</button>
          </div>
        </Description>
      </Content>
    );
  }

  render() {
    return this.props.productDetails.loading ? (
      <Content>
        <Loading />
      </Content>
    ) : (
      this.renderProduct()
    );
  }
}

const mapStateToProps = state => ({
  productDetails: state.productDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
