import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function WeatherHome(props) {
    return(
      <div className="container">
        <div className="row align-items-start">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Weather App</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12 m-1">
                <RenderCard item={props.weather} />
            </div>
        </div>
      </div>
    );
}

export default WeatherHome;