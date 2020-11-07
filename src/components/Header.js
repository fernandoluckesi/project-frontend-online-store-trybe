import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import shoppingCartImg from '../images/shopping-cart.png';

class Header extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    
  }

  render() {

    const { totalAmountProducts } = this.props;

    return (
      <header>
        <Link to="shopping-cart">
          <img src={shoppingCartImg} alt="Carrinho de compras" style={{ width: '50px' }} />
          <p>{totalAmountProducts}</p>
        </Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  totalAmountProducts: state.shoppingCart.totalAmount,
});

export default connect(mapStateToProps)(Header);
