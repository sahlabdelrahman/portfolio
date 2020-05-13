import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

function Project ({project}){
    
    const {name, images, slug} = project;
    
    
    return(
        
        <Col className="project" md={6}>
            <div className='img-container'>
                <img src={images[0]} alt=""/>
                <Link to={`/${slug}`} className='btn-primary btn-lg project-link'>
                    More Details
                </Link>
            </div>
            <p className="project-name">{name}</p>
        </Col>    
    ); 
}

export default Project;