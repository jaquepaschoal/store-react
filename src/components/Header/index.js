import React, { Component } from "react";
import Proptypes from "prop-types";
import { Container, Logo } from "./style";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import { bindActionCreators } from "redux";

const Header = props => (

  <Container>
    <Logo>
      <Link to={"/"}>
        <h2>
          <b>React</b>
          Store
        </h2>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
        />
      </Link>
    </Logo>
    <Link to={"/cart"}>
      <span>
        <i className="fa fa-shopping-cart" />
      </span>
      <p>
        Meu carrinho <span> ({props.cart})</span>
      </p>
    </Link>
  </Container>
);

Header.Proptypes = {
  cart: Proptypes.number
}

const countItems = items => {
  let someQnt = [];
  let total = [];

  someQnt = items.map(item => {
    return item.qnt;
  });

  if (someQnt.length > 0) {
    total = someQnt.reduce((acc, actual) => {
      return acc + actual;
    });
  }

  return someQnt.length > 0 ? total : 0;
};

const mapStateToProps = state => ({
  cart: countItems(state.cart.data)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
