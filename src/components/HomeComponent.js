import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';



function RenderCard({item}) {
        return(
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)' 
                }}>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );

}

function Home(props) {
    return(
      <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <Link to="/projects">
                <RenderCard item={props.project}/>
                </Link>
            </div>
            <div className="col-12 col-md m-1">
                <Link to="/biography">
                <RenderCard item={props.biography} />
                </Link>
            </div>
            <div className="col-12 col-md m-1">
                <Link to="/certificates">
                <RenderCard item={props.certificate} />
                </Link>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.category} />
            </div>
        </div>
      </div>
    );
}

export default Home; 