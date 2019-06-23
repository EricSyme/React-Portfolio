import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

function RenderMenuItem ({project}) {
    return (
        <Card>
            <CardImg width="100%" className="homePageImg" src={project.image} alt={project.name} />
            <CardImgOverlay>
                <CardTitle id="white">{project.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.projects.map((project) => {
        return (
            <div key={project.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem project={project} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;