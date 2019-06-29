import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem ({project, onClick}) {
    console.log("menu component", project.image)
    return (
        <Card>
            <Link to={`/projects/${project.id}`} >
                <CardImg width="100%" src={project.image} alt={project.name} />
                <CardImgOverlay>
                    <CardTitle id="white">{project.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Projects</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;