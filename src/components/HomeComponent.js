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
                    <CardImg height="175px" src={item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle id="black">{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText id="black">{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );

}

function Home(props) {
    return(
      <div className="container">
        <div className="row">
            <h1 className="mx-auto nameTitle"><strong>Hello, My Name is Eric</strong></h1>
            <p className="mx-auto megrim20"><strong>Let's make something great together!</strong></p>
        </div>
        <div className="row align-items-start home">
            <div className="col-12 col-md m-1">
                <h3>PROJECTS</h3>
                <Link to="/projects">
                <RenderCard item={props.project}/>
                </Link>
            </div>
            <div className="col-12 col-md m-1">
                <h3>BIOGRAPHY</h3>
                <Link to="/biography">
                <RenderCard item={props.biography} />
                </Link>
            </div>
            <div className="col-12 col-md m-1">
                <h3>CERTIFICATES</h3>
                <Link to="/certificates">
                <RenderCard item={props.certificate} />
                </Link>
            </div>
            <div className="col-12 col-md m-1">
                <h3>EXTRAS</h3>
                <RenderCard item={props.category} />
            </div>
        </div>
      </div>
    );
}

export default Home; 