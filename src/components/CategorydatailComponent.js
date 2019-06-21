/* IMPORTS*/
import React from 'react';
import { Card, CardImg, CardText, CardBody,Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';



    function RenderCategory({category}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={category.image} alt={category.name}></CardImg>
                    <CardBody>
                        <CardTitle>{category.name}</CardTitle>
                        <CardText>{category.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    const CategoryDetail = (props) => {

        if (props.category != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.category.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.category.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <RenderCategory category={props.category} />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


export default CategoryDetail;