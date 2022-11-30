import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({ projectName, description, id, columns }) {
    console.log(columns)
    const navigate = useNavigate();
    const clickHandler = (evt) => {
        navigate('/todo-app/todos', {
            state: {
                id: id,
                name: projectName,
                description: description,
                columnsIds: columns
            }
        })
    }
    return (
        <div onClick={clickHandler}>
            <h2>{projectName}</h2>
            <p>{description}</p>
        </div>
    )
}
