import React, { Component } from "react";
import Proptypes from "prop-types";
import { Container } from "./style";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";

class Menu extends Component {

  static Proptypes = {
    categories: Proptypes.shape({
      data: Proptypes.array,
    }),
    getCategoriesRequest: Proptypes.func.isRequired
  }

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
                <NavLink
                  exact
                  activeClassName="active"
                  to={`/category/${category.id}`}
                >
                  {category.title}
                </NavLink>
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
