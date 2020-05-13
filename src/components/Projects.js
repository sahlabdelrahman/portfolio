import React, { Fragment, Component } from 'react';
import { Container } from 'react-bootstrap';

import ProjectsContainer from './ProjectsContainer';

class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render (){
        return (
            <Fragment>
                <Container id="projects">
                    <h2>Projects</h2>
                    <ProjectsContainer />
                </Container>
            </Fragment>
        );
    }
}

export default Projects;