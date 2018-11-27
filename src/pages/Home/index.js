import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoryDetailsActions } from "../../store/ducks/categoryDetails";

import Loading from "../../components/Loading";

import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.loadCategory();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadCategory();
    }
  }

  loadCategory() {
    const { id } = this.props.match.params;
    if (this.props.match.path === "/") {
      this.props.getCategoryDetailsRequest(1);
    } else {
      this.props.getCategoryDetailsRequest(id);
    }
  }

  renderDetails() {
    const products = this.props.categoryDetails.data.products;

    return (
      <Container>
        {products &&
          products.map(product => {
            return (
              <Link key={product.id} to={`/detail${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <h3>{product.brand}</h3>
                <span>R${product.price}</span>
              </Link>
            );
          })}
      </Container>
    );
  }
  render() {
    return this.props.categoryDetails.loading ? (
      <Container>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  categoryDetails: state.categoryDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
