import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';



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
      <div className="container div">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.project}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.biography} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.certificate} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.category} />
            </div>
        </div>
      </div>
    );
}

export default Home; 