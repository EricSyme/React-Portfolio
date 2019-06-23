import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent'; 
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import CategoryDetail from './CategorydatailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
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

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' render={HomePage} />
              <Route exact path='/projects' render={() => <Menu categories={this.state.categories} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
