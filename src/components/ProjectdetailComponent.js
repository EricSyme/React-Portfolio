import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, CardTitle, Row, Breadcrumb, BreadcrumbItem, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';



function RenderProject({project}){
    return(
        <div className="col-12 col-md-5 m-1 mx-auto">
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width="100%" src={(project.image)} alt={project.name}></CardImg>
                    <CardBody>
                        <CardTitle>{project.name}</CardTitle>
                        <CardText>{project.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

  function RenderComments({comments, addComment, projectId}) {
    if (comments != null){
        return(
            <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in key={comment.id}>
                                    <li>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </Fade>
                            );
                        })}
                    </Stagger>
                    </ul>
                <CommentForm projectId={projectId} addComment={addComment} />

            </div>
        );
    }
    else
        return(
            <div></div>
        );
}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.projectId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                </Button>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                <Row className="form-group">
                                    <Col className="col-12">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating" className="form-control" >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} 
                                        />
                                        <Errors className="text-danger" model=".fullname" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} 
                                        />
                                        <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                    </Col>
                                </Row>

                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
            </div>
        );
    }
}

const ProjectDetail = (props) => {
    if (props.project != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/projects">Projects</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.project.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderProject project={props.project} />
                    <RenderComments comments={props.comments}
                    addComment={props.addComment}
                    projectId={props.project.id} /> 
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


export default ProjectDetail;