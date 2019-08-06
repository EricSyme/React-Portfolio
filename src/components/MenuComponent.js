import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




function RenderMenuItem ({project}) {
    console.log("menu component", project.image)
    return (
        <Card>
            <CardTitle id="black">{project.name}</CardTitle>
            <Link to={`/projects/${project.id}`} >
                <CardImg width="100%" src={project.image} alt={project.name} />
                <CardImgOverlay>
                    
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.projects.map((project) => {
        if (project.featured !== true){
            return (
                <div key={project.id} className="col-12 col-md-4 m-1 mx-auto">
                    <RenderMenuItem project={project} />
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    });
    return (
        <div className="container projects">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3 className="textStroke" id="white">Projects</h3>
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