import React, { Component } from 'react';
import { getProductFromId } from '../services/api';
import Loading from './Loading';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      productId: '',
      amount: 1,
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    getProductFromId(productId)
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
          productId,
        });
      });
  }

  addUnity() {
    const { amount } = this.state;
    this.setState({ amount: parseInt(amount) + 1 });
  }

  removeUnity() {
    const { amount } = this.state;
    if (amount < 2) {
      this.setState({ amount: 1 })
    } else {
      this.setState({ amount: amount - 1 });
    }
  }

  onChangeUnity(event) {
    const { value } = event.target;
    this.setState({ amount: value });
  }

  alertAmount() {
    const { amount } = this.state;
    if (amount < 1) {
      alert('Quantidade não pode ser menor que 1')
    }
  }

  render() {

    const { data, isLoading, amount } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div>
        <h1>{data.title}</h1>
        <img src={data.thumbnail} alt={data.title} />
        <p>{data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <h3>Quantidade</h3>
        <button onClick={() => this.removeUnity()}>-</button>
        <input type="number" value={amount} onChange={(event) => this.onChangeUnity(event)} />
        <button onClick={() => this.addUnity()}>+</button>
        <button onClick={() => this.alertAmount()}>Adicionar ao carrinho</button>
        <h2>Descrição</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>

        <h2>Características do produto</h2>
        {data.attributes.map((attribute) =>
          attribute.name !== 'SKU' &&
          <p key={attribute.id}><span>{attribute.name}</span>: {attribute.value_name}</p>
        )}
      </div>
    )
  }
}

export default ProductDetails;
