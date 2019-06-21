import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './homeCardComponent';
import CategoryDetail from './CategorydatailComponent';
import { CATEGORIES } from '../shared/categories';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: CATEGORIES,
        selectedCategory: null
    };
  }

  onCategorySelect(categoryId) {
    this.setState({ selectedCategory: categoryId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Eric Syme -- Portfolio</NavbarBrand>
          </div>
        </Navbar>
        <Menu categories={this.state.categories} onClick={(categoryId) => this.onCategorySelect(categoryId)} />
        <CategoryDetail category={this.state.categories.filter((category) => category.id === this.state.selectedCategory)[0]} />
      </div>
    );
  }
}

export default Main;
