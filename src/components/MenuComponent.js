import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

function RenderMenuItem ({category}) {
    return (
        <Card>
            <CardImg width="100%" className="homePageImg" src={category.image} alt={category.name} />
            <CardImgOverlay>
                <CardTitle id="white">{category.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.categories.map((category) => {
        return (
            <div key={category.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem category={category} />
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