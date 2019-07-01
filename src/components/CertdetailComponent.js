import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




function RenderCertificate({certificate}){
    return(
        <div className="col-12 m-1">
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