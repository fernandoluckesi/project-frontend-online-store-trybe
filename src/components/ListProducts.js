import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  consoleTest() {

  }

  render() {

    const { isFetching, data, inputsValues } = this.props;

    if (data.length === 0) return <p>Digite algo para ser pesquisado ou selecione uma categoria</p>

    if (data.results && data.results.length === 0) return <p>Não há resultados para a busca "{inputsValues.queryValue}"</p>

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
                  <p>
                    {product.installments.quantity}
                    {`x ${product.installments.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  requestData: state.requestData,
  isFetching: state.requestData.isFetching,
  data: state.requestData.data,
  resServer: state.requestData.resServer,
  inputsValues: state.inputsValues,
})

export default connect(mapStateToProps)(ListProducts);
