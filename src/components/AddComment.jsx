import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { addComment } from '../redux/actions';

export default function AddComment({ showModal, todoId, commentId }) {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const [id, setId] = useState("");
    useEffect(() => {
        setId(nanoid())
    }, [])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.target.reset();
        // reset form
        showModal(false)
        dispatch(addComment(comment, id, todoId, commentId))

    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <label className="todo__label">
                <span className="todo__label-text">Comment</span>
                <input className="todo__input" type="text" onChange={(evt) => { setComment(evt.target.value) }} value={comment} />
            </label>

            <input className="button" type="submit" />
        </form>
    )
}
