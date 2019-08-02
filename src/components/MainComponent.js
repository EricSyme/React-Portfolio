import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'; 
import CertMenu from './CertMenuComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import CertificateDetail from './CertdetailComponent';
import ProjectDetail from './ProjectdetailComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import BioHome from './BioComponent';
import WeatherHome from './WeatherComponent';
import { addComment } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Weather } from '../redux/weather';






const mapStateToProps = state => {
  return {
    projects: state.projects,
    comments: state.comments,
    certificates: state.certificates,
    biographies: state.biography,
    categories: state.categories
  }   
}


const mapDispatchToProps = dispatch => ({
  
  addComment: (projectId, rating, author, comment) => dispatch(addComment(projectId, rating, author, comment)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}



});


class Main extends Component {

  render() {
 

    const HomePage = () => {
      return(
          <Home 
            project={this.props.projects.filter((project) => project.featured)[0]}
            biography={this.props.biographies.filter((biography) => biography.featured)[0]}
            certificate={this.props.certificates.filter((certificate) => certificate.featured)[0]}
            category={this.props.categories.filter((category) => category.featured)[0]}
          />
      );
    }

    const BioHomePage = () => {
      return(
          <BioHome 
            biography={this.props.biographies.filter((biography) => biography.featured)[0]}
          />
      );
    }


    const ProjectWithId = ({match}) => {
      return(
        <ProjectDetail project={this.props.projects.filter((project) => project.id === parseInt(match.params.projectId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.projectId === parseInt(match.params.projectId,10))}
        addComment={this.props.addComment}
      />
      );
    };

    const CertificateWithId = ({match}) => {
      return(
          <CertificateDetail certificate={this.props.certificates.filter((certificate) => certificate.id === parseInt(match.params.certificateId,10))[0]} />
      );
    };

    return (
      <div className="background" >
        <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                <Route path='/home' render={HomePage} />
                <Route exact path='/projects' render={() => <Menu projects={this.props.projects} />} />
                <Route path ='/projects/:projectId' render={ProjectWithId} />
                <Route path='/biography' render={BioHomePage} />
                <Route exact path='/certificates' render={() => <CertMenu certificates={this.props.certificates} />} />
                <Route path ='/certificates/:certificateId' render={CertificateWithId} />
                <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));