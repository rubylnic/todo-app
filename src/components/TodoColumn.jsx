import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import TodoItem from './TodoItem';
import Modal from './Modal'
import AddTodo from './AddTodo'
import { useDrop } from 'react-dnd'
import { changeTodoColumn } from '../redux/actions';

export default function TodoColumn({ title, id, todosIds, columnsIds }) {
    let todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const [showAddTodo, setShowAddTodo] = useState(false)
    const addTodoClick = () => {
        setShowAddTodo(!showAddTodo)
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: (item) => dispatch(changeTodoColumn(item.id, item.columnId, id)),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })

    }))
    return (

        <div className='todo__column' ref={drop}>
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
