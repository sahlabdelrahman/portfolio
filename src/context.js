import React, { Component } from 'react';
import items from './data';

const ProjectContext = React.createContext();

class ProjectProvider extends Component{
    
    state = {
        projects: [],
        loading: true
    };

    // getData
    componentDidMount(){
        // this.getData
        let projects = this.formatData(items);
    
        this.setState({
            projects: projects,
            loading: false
        })
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => 
                image.fields.file.url)
            let project = {...item.fields, images, id};
            ;
            return project;
        });
        return tempItems;
    }

    getProject = (slug) => {
        let tempProjects = [...this.state.projects];
        const project = tempProjects.find(project => project.slug === slug);
        return project;
    };



    render(){
        return(
            <ProjectContext.Provider value={{...this.state,  getProject: this.getProject}}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}

const ProjectConsumer = ProjectContext.Consumer;


export {ProjectProvider, ProjectConsumer, ProjectContext};