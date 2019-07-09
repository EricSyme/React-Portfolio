import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.imageB} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.paragraph.split('\n').map(function(item, key) {
                    return (
                        <span key={key}>
                            {item}
                            <br/>
                        </span>
                    );
                })}</CardText>
            </CardBody>
        </Card>
    );

}

function BioHome(props) {
    return(
      <div className="container">
        <div className="row align-items-start">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Biography</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12 m-1">
                <RenderCard item={props.biography} />
            </div>
        </div>
      </div>
    );
}

export default BioHome;  