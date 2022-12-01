import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import Search from '../components/Search';
import TodoColumn from '../components/TodoColumn';


export default function TodosPage() {
    const location = useLocation();
    const params = useParams();
    const projectId = params.id;

    let projectInfo = useSelector(state => state.todos.projects.byId)[projectId];
    let projectName, description, id, columns;

    if (projectInfo) {
        projectName = projectInfo.projectName;
        description = projectInfo.description;
        id = projectInfo.id;
        columns = projectInfo.columns;
    } else {
        projectName = location.state.projectName;
        description = location.state.description;
        id = location.state.id;
        columns = location.state.columns;
    }

    let columnsArr = useSelector(state => state.todos.columns);

    return (
        <>
            <h2 className="todo__title">{projectName}</h2>
            <p className="todo__text">{description}</p>
            <Search />
            <div className='todo__columns'>

                {columns.map(i => {
                    const item = columnsArr.byId[i];
                    return <TodoColumn
                        id={item.id}
                        projectId={id}
                        title={item.columnName}
                        todosIds={item.todos}
                        columnsIds={columns}
                    />
                })}

            </div>
        </>
    )
}
