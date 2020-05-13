import React from 'react';
import Project from './Project';

import { Container, Row } from 'react-bootstrap';

function ProjectList({projects}){

    return(
        <section>
            <Container>
                <Row>
                    {projects.map(project => {
                        return <Project key={project.id} project={project}/> ;
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default ProjectList;