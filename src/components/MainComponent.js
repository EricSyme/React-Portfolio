import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'; 
import CertMenu from './CertMenuComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import CertificateDetail from './CertdetailComponent';
import ProjectDetail from './ProjectdetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CATEGORIES } from '../shared/categories';
import { PROJECTS } from '../shared/projects';
import { BIOGRAPHY } from '../shared/biography';
import { CERTIFICATES } from '../shared/certificates';
import { COMMENTS } from '../shared/comments';
import BioHome from './BioComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: CATEGORIES,
        projects: PROJECTS,
        biographies: BIOGRAPHY,
        certificates: CERTIFICATES,
        comments: COMMENTS,
        selectedCategory: null
    };
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

    const BioHomePage = () => {
      return(
          <BioHome 
            biography={this.state.biographies.filter((biography) => biography.featured)[0]}
          />
      );
    }

    const ProjectWithId = ({match}) => {
      return(
          <ProjectDetail project={this.state.projects.filter((project) => project.id === parseInt(match.params.projectId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.projectId === parseInt(match.params.projectId,10))} />
      );
    };

    const CertificateWithId = ({match}) => {
      return(
          <CertificateDetail certificate={this.state.certificates.filter((certificate) => certificate.id === parseInt(match.params.certificateId,10))[0]} />
      );
    };

    return (
      <div>
        <Header />
          <Switch>
            <Route path='/home' render={HomePage} />
            <Route exact path='/projects' render={() => <Menu projects={this.state.projects} />} />
            <Route path ='/projects/:projectId' render={ProjectWithId} />
            <Route path='/biography' render={BioHomePage} />
            <Route exact path='/certificates' render={() => <CertMenu certificates={this.state.certificates} />} />
            <Route path ='/certificates/:certificateId' render={CertificateWithId} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;