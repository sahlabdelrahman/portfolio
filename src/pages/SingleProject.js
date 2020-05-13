import React, { Component } from 'react';


import { ProjectContext } from '../context';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class SingleProject extends Component{
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        };
    }

    static contextType = ProjectContext;

    // componentDidMount (){}

    render (){
        const {getProject} = this.context;
        const project = getProject(this.state.slug)

        if(!project){
            return(
                <div>
                    <h3>no such Project could be found...</h3>
                    <Link to='/' className='btn-primary'>
                        back to Home
                    </Link>
                </div>
            );
        };

        const {name, description, images} = project;
        const [...defaultImgs] = images;
        return(
            <>
                <section>
                    <Container>
                        <h1>{name}</h1>
                        <Row>
                            {defaultImgs.map((item, index) => {
                                return (
                                    <Col md={4}>
                                        <img src={item} alt={name} key={index} width="100%" />
                                    </Col>
                                ) ;
                            })}
                        </Row>
                        <div>
                            <article>
                                <h3>Details</h3>
                                <p>{description}</p>
                            </article>
                        </div>
                    </Container>
                </section>
            </>
        );
    }
}

export default SingleProject;