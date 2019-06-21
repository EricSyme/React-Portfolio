import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

function RenderMenuItem ({category, onClick}) {
    return (
        <Card
            onClick={() => onClick(category.id)}>
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
            <div className="col-12 col-md-5 m-1"  key={category.id}>
                <RenderMenuItem category={category} onClick={props.onClick} />
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