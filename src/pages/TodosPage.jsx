import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import Search from '../components/Search';
import TodoColumn from '../components/TodoColumn';


export default function TodosPage() {
    const location = useLocation();
    const { name, description, id, columnsIds } = location.state;
    let columns = useSelector(state => state.todos.columns);
    console.log(id)
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <Search />
            <div className='todos'>
                {columnsIds.map(i => {
                    const item = columns.byId[i];
                    return <TodoColumn
                        id={item.id}
                        projectId={id}
                        title={item.columnName}
                        todosIds={item.todos}
                        columnsIds={columnsIds}
                    />
                })}
            </div>
        </div>
    )
}
