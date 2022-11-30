import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { addSubtask } from '../redux/actions';

export default function AddSubtask({ showModal, todoId, commentId }) {
    const dispatch = useDispatch();
    const [subtask, setSubtask] = useState('');

    const [id, setId] = useState("");
    useEffect(() => {
        setId(nanoid())
    }, [])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.target.reset();
        // reset form
        showModal(false)
        dispatch(addSubtask(subtask, id, todoId))
        // dispatch(addSubtask(comment, id, todoId, commentId))

    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <label className="todo__label">
                <span className="todo__label-text">Subtask</span>
                <input className="todo__input" type="text" onChange={(evt) => { setSubtask(evt.target.value) }} value={subtask} />
            </label>

            <input className="button" type="submit" />
        </form>
    )
}
