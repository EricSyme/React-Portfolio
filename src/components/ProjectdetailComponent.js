import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';




function RenderProject({project}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={project.image} alt={project.name}></CardImg>
                <CardBody>
                    <CardTitle>{project.name}</CardTitle>
                    <CardText>{project.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    var comments = comments.map ((comments) => {
        return (
            <li style={{ listStyleType: "none"}} key={comments.id}>
            {comments.comment}<br/><br/>--{comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}<br/><br/>
            </li>
        );
    });

    if (comments != null){
        return(
            <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments}
            </div>
        );
    }
    else
        return(
            <div></div>
        );
}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


const ProjectDetail = (props) => {

    if (props.project != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/projects">Projects</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.project.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderProject project={props.project} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}


export default ProjectDetail;