import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
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
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <input className="form__input" placeholder="Comment" onChange={(evt) => { setComment(evt.target.value) }} value={comment} />
            </label>
            <input type="submit" />
        </form>
    )
}
