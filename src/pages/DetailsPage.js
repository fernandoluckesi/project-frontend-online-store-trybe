import React, { Component } from 'react';
import { useLocation, useParams } from 'react-router-dom';

class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      productId: '',
    }
  }

  componentDidMount() {
    const location = window.location.href;
    const regexProductId = /MLB[0-9]{10}/;
    this.setState({
      location,
      productId: regexProductId.exec(location)[0]
     });

  }


  render() {

    const { location } = this.state;

    return (
      <div>
        {location}
      </div>
    );
  }
}

export default DetailsPage;
