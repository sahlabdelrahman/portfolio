import React from 'react';

import ProjectList from './ProjectList';
import Loading from './Loaing';
import { ProjectConsumer } from '../context';


function ProjectContainer(){
    return(
        <ProjectConsumer>
            {(value) => {
                console.log(value);
                const {loading, projects } = value;
                if(loading){
                    return <Loading />
                }
                
                return(
                    <>
                        <ProjectList projects={projects} />
                    </>
                );
            }}
        </ProjectConsumer>
    );
}

export default ProjectContainer;