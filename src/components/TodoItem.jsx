import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { removeTodo } from '../redux/actions';
import AddComment from './AddComment';
import AddSubtask from './AddSubtask';
import AddTodo from './AddTodo';
import Comments from './Comments';
import SubTodos from './SubTodos'
import Modal from './Modal';

export default function TodoItem({ todo, columnId, columnsIds }) {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showCommentModal, setShowCommentModal] = useState(false)
    const [showSubtaskModal, setShowSubtaskModal] = useState(false)

    const dispatch = useDispatch();

    const handleAddComment = () => {
        setShowCommentModal(true)
    }
    const handleAddSubtask = () => {
        setShowSubtaskModal(true)
    }
    const handleDelete = () => {
        dispatch(removeTodo(todo.id, columnId))
    }
    const handleEdit = () => {
        setShowEditModal(true)
    }

    return (
        <>
            <div className='todo__item'>
                <div>{todo.number}</div>
                <h3 className='todo__subtitle'>{todo.title}</h3>
                <p className='todo__text'>{todo.description}</p>
                <p className='todo__text'> {todo.date}</p>
                <p className='todo__text'> {todo.timeTaken}</p>
                <p className='todo__text'> {todo.finalDate}</p>
                <p className='todo__text'> {todo.priority}</p>
                <p className='todo__text'> {todo.attachedFiles}</p>

                <div className='buttons'>
                    <button className="button" onClick={handleAddComment}>add comment</button>
                    <button className="button" onClick={handleAddSubtask}>add subtask</button>
                </div>

                <div className='buttons'>
                    <button className="button" onClick={handleDelete}>delete</button>
                    <button className="button" onClick={handleEdit}>edit</button>
                </div>
                <Comments todoId={todo.id} />
                <SubTodos todoId={todo.id} />
            </div>

            {showEditModal ?
                <Modal title="Edit todo" showModal={setShowEditModal}>
                    <AddTodo columnId={columnId} showModal={setShowEditModal} oldTodo={todo} columnsIds={columnsIds} />
                </Modal> : ""
            }
            {showCommentModal ?
                <Modal title="Add a comment" showModal={setShowCommentModal}>
                    <AddComment showModal={setShowCommentModal} todoId={todo.id} />
                </Modal> : ""
            }
            {showSubtaskModal ?
                <Modal title="Add a subtask" showModal={setShowSubtaskModal}>
                    <AddSubtask showModal={setShowSubtaskModal} todoId={todo.id} />
                </Modal> : ""
            }
        </>
    )
}
