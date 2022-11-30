import React from 'react'
import { useState } from 'react'
import { useSelector } from "react-redux";
import TodoItem from './TodoItem';
import Modal from './Modal'
import AddTodo from './AddTodo'


export default function TodoColumn({ title, id, todosIds, columnsIds }) {
    let todos = useSelector(state => state.todos.todos);
    const [showAddTodo, setShowAddTodo] = useState(false)
    const addTodoClick = () => {
        setShowAddTodo(!showAddTodo)
    }
    return (
        <div className='todos__column'>
            <h1>{title}</h1>
            <button className="button" onClick={addTodoClick}>Add todo</button>
            <div className='todos__list'>
                {todosIds.map(i => {
                    const item = todos.byId[i];
                    return <TodoItem todo={item} columnId={id} showModal={setShowAddTodo} columnsIds={columnsIds} />
                })}

            </div>
            {showAddTodo ?
                <Modal title="Add todo">
                    <AddTodo columnId={id} showModal={setShowAddTodo} columnsIds={columnsIds} />
                </Modal> : ""}
        </div>
    )
}
