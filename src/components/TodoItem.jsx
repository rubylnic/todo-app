import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from '../redux/actions';
import AddComment from './AddComment';
import AddTodo from './AddTodo';
import Comments from './Comments';
import Modal from './Modal';

export default function TodoItem({ todo, columnId, columnsIds }) {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showCommentModal, setShowCommentModal] = useState(false)

    const dispatch = useDispatch();

    const handleAddComment = () => {
        console.log('handleAddComment');
        setShowCommentModal(true)
    }
    const handleAddSubtask = () => {
        console.log('handleAddSubtask')
    }
    const handleDelete = () => {
        console.log('handleDelete')
        console.log(todo, todo.id)
        dispatch(removeTodo(todo.id, columnId))
    }
    const handleEdit = () => {
        console.log('handleEdit')
        setShowEditModal(true)
    }
    console.log(columnsIds)
    return (
        <>
            <div>
                <div>{todo.number}</div>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
                <div> {todo.date}</div>
                <div> {todo.timeTaken}</div>
                <div> {todo.finalDate}</div>
                <div> {todo.priority}</div>
                <div> {todo.attachedFiles}</div>
                <div> {todo.status}</div>
                {/* <div> {todo.subTodos.map((item) => {
                    return item
                })}</div>
                <div> {todo.comments.map((item) => {
                    return item
                })}</div> */}
                <div>
                    <button className="button" onClick={handleAddComment}>add comment</button>
                    <button className="button" onClick={handleAddSubtask}>add subtask</button>
                </div>

                <div>
                    <button className="button" onClick={handleDelete}>delete</button>
                    <button className="button" onClick={handleEdit}>edit</button>
                </div>
            </div>
            <Comments todoId={todo.id} />
            {showEditModal ?
                <Modal title="Edit todo">
                    <AddTodo columnId={columnId} showModal={setShowEditModal} oldTodo={todo} columnsIds={columnsIds} />
                </Modal> : ""
            }
            {showCommentModal ?
                <Modal title="Add a comment">
                    <AddComment showModal={setShowCommentModal} todoId={todo.id} />
                </Modal> : ""
            }
        </>
    )
}
