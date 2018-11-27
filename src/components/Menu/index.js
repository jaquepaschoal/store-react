import React, { Component } from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";

class Menu extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    const categories = this.props.categories.data;
    return (
      <Container>
        <ul>
          {categories.map(category => {
            return (
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>{category.title}</Link>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
