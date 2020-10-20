import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImg from '../images/shopping-cart.png';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="shopping-cart">
          <img src={shoppingCartImg} alt="Carrinho de compras" style={{ width: '50px' }} />
        </Link>
      </header>
    );
  }
}

export default Header;
