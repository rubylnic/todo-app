import React from 'react'
import { useSelector } from 'react-redux';
import ProjectItem from '../components/ProjectItem'

export default function ProjectsPage() {
    let projects = useSelector(state => state.todos.projects);
    let projectsIds = useSelector(state => state.todos.projects.allIds);
    return (
        <div>
            <h1>Projects</h1>
            {projectsIds.map(item => {
                const project = projects.byId[item];
                return <ProjectItem description={project.description} id={project.id} columns={project.columns} />
            })}

        </div>
    )
}
