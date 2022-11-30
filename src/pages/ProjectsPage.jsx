import React from 'react'
import { useSelector } from 'react-redux';
import ProjectItem from '../components/ProjectItem'

export default function ProjectsPage() {
    let projects = useSelector(state => state.todos.projects);
    let projectsIds = useSelector(state => state.todos.projects.allIds);
    return (
        <div>
            <h2 className="todo__title">Projects</h2>
            <div className='todo__projects'>
                {projectsIds.map(item => {
                    const project = projects.byId[item];
                    console.log(project)
                    return <ProjectItem description={project.description} id={project.id} columns={project.columns} projectName={project.projectName} />
                })}
            </div>

        </div>
    )
}
