import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';




function RenderCertificate({certificate}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={(certificate.image)} alt={certificate.name}></CardImg>
                <CardBody>
                    <CardTitle>{certificate.name}</CardTitle>
                    <CardText>{certificate.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


const CertificateDetail = (props) => {
    if (props.certificate != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/certificates">Certificates</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.certificate.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.certificate.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderCertificate certificate={props.certificate} />
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


export default CertificateDetail;