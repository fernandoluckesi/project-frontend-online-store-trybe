import React, { Component } from 'react';
import Header from '../components/Header';
import AsideCategories from '../components/AsideCategories';
import SearchInput from '../components/SearchInput';
import ListProducts from '../components/ListProducts';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <AsideCategories />
        <SearchInput />
        <ListProducts />
      </div>
    );
  }
}

export default Home;
