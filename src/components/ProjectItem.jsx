import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({ projectName, description, id, columns }) {
    const navigate = useNavigate();
    const clickHandler = (evt) => {
        navigate(`/todos/${id}`, {
            state: {
                id: id,
                projectName: projectName,
                description: description,
                columns: columns
            }
        })
    }
    return (
        <div className="todo__item" onClick={clickHandler}>
            <h2 className="todo__title">{projectName}</h2>
            <p className="todo__text">{description}</p>
        </div>
    )
}
