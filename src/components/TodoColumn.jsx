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
        <div className='todo__column'>
            <h2 className='todo__title'>{title}</h2>
            <button className="todo__button button" onClick={addTodoClick}>Add todo</button>
            <div className='todo__list'>
                {todosIds.map(i => {
                    const item = todos.byId[i];
                    return <TodoItem todo={item} columnId={id} showModal={setShowAddTodo} columnsIds={columnsIds} />
                })}

            </div>
            {showAddTodo ?
                <Modal title="Add todo" showModal={setShowAddTodo}>
                    <AddTodo columnId={id} showModal={setShowAddTodo} columnsIds={columnsIds} />
                </Modal> : ""}
        </div>
    )
}
