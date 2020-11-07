import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductsShoppingCart } from '../actions';

class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.addShopingCart = this.addShopingCart.bind(this);
  }

  addShopingCart(event) {
    const { value: productId } = event.target;

    const product = {
      productId,
      amount: 1,
    };

    let productRepeat = [];

    const shoppingCartLocalStorage = JSON.parse(localStorage.getItem('cart'));

    const { addProductsShoppingCartAction } = this.props;

    if (!shoppingCartLocalStorage) {
      const shoppingCartArray = JSON.stringify([product]);
      localStorage.setItem('cart', shoppingCartArray);
      addProductsShoppingCartAction([product]);
    } else {
      productRepeat = shoppingCartLocalStorage.filter((product) => product.productId === productId);
    }

    if (shoppingCartLocalStorage && productRepeat.length === 0) {
      const shoppingCartArray = JSON.stringify([...shoppingCartLocalStorage, product]);
      localStorage.setItem('cart', shoppingCartArray);
      addProductsShoppingCartAction([...shoppingCartLocalStorage, product]);
    }

    if (productRepeat.length > 0) {
      shoppingCartLocalStorage.forEach((element) => {
        if (element.productId === productId) {
          element.amount += 1;
        }
      });
      const shoppingCartArray = JSON.stringify([...shoppingCartLocalStorage]);
      localStorage.setItem('cart', shoppingCartArray);
      addProductsShoppingCartAction([...shoppingCartLocalStorage]);
    }
  }

  render() {

    const { isFetching, data } = this.props;

    if (data.length === 0) return <p>Digite algo para ser pesquisado ou selecione uma categoria</p>

    if (data.results && data.results.length === 0) return <p>Não há resultados para a busca</p>

    return (
      <div>
        {isFetching && <p>Carregando...</p>}
        <div>
          <ul>
            {data.results.map((product) =>
              <li key={product.id}>
                <Link to={`/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                </Link>
                <div className="infos-product">
                  <Link to={`/${product.id}`}>
                    <h2>{product.title}</h2>
                  </Link>
                  <p>
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
                <button value={product.id} onClick={(event) => this.addShopingCart(event)}>Adicionar ao carrinho</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.requestData.isFetching,
  data: state.requestData.data,
  resServer: state.requestData.resServer,
  inputsValues: state.inputsValues,
});

const mapDispatchToprops = (dispatch) => ({
  addProductsShoppingCartAction: (products) => dispatch(addProductsShoppingCart(products)),
});

export default connect(mapStateToProps, mapDispatchToprops)(ListProducts);
