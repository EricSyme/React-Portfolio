import React from 'react';
import { Link } from 'react-router-dom';



function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">            
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/eric-syme-660985183/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/EricSyme"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon" href="mailto:eric.onetenbalm@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2019 Eric Syme</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;