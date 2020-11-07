import React, { Component } from 'react';
import ProductDetails from '../components/ProductDetails';


class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {

    const { productId } = this.props.match.params;

    return (
      <div>
        <ProductDetails productId={productId} />
      </div>
    );
  }
}

export default DetailsPage;
