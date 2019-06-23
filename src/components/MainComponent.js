import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent'; 
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import CategoryDetail from './CategorydatailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CATEGORIES } from '../shared/categories';
import { PROJECTS } from '../shared/projects';
import { BIOGRAPHY } from '../shared/biography';
import { CERTIFICATES } from '../shared/certificates';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: CATEGORIES,
        projects: PROJECTS,
        biographies: BIOGRAPHY,
        certificates: CERTIFICATES,
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
            project={this.state.projects.filter((project) => project.featured)[0]}
            biography={this.state.biographies.filter((biography) => biography.featured)[0]}
            certificate={this.state.certificates.filter((certificate) => certificate.featured)[0]}
            category={this.state.categories.filter((category) => category.featured)[0]}
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' render={HomePage} />
              <Route exact path='/projects' render={() => <Menu projects={this.state.projects} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
