import { nanoid } from 'nanoid';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeTodoColumn, editTodo } from '../redux/actions';

export default function AddTodo({ columnId, showModal, oldTodo, columnsIds }) {
    let lastIndex = useSelector(state => state.todos.todos.lastIndex);
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [timeTaken, setTimeTaken] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (oldTodo) {
            setTitle(oldTodo.title);
            setDescription(oldTodo.description);
            setDate(oldTodo.date);
            setTimeTaken(oldTodo.timeTaken);
            setFinalDate(oldTodo.finalDate);
            setPriority(oldTodo.priority);
            setStatus(oldTodo.status);
            setId(oldTodo.id)
        } else {
            setId(nanoid());
            setStatus(columnId)
        }

    }, [])

    const todo = {
        id: id,
        title: title,
        number: lastIndex,
        description: description,
        date: date,
        timeTaken: timeTaken,
        finalDate: finalDate,
        priority: priority,
        comments: [],
        // attachedFiles: [1, 2, 3],
        status: status,
        subTasks: [],
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.target.reset();
        // reset form
        showModal(false)
        if (oldTodo) {
            dispatch(editTodo(id, todo, status))
        } else {
            dispatch(addTodo(id, todo, status))
        }
    }
    const changeTodoColumnHandler = (evt) => {
        const nextStatus = evt.target.value;
        setStatus(nextStatus)
        if (oldTodo) {
            dispatch(changeTodoColumn(id, todo, status, nextStatus))
        }
    }
    return (

        <div>
            <form className="todo__form" onSubmit={handleSubmit}>
                <label className="todo__label">
                    <span className="todo__label-text">Title</span>
                    <input className="todo__input" type="text" onChange={(evt) => { setTitle(evt.target.value) }} value={title} />
                </label>
                <label className="todo__label">
                    <span className="todo__label-text">Description</span>
                    <input className="todo__input" type="text" onChange={(evt) => { setDescription(evt.target.value) }} value={description} />
                </label>
                <label className="todo__label">
                    <span className="todo__label-text">Date</span>
                    <input className="todo__input" type="date" onChange={(evt) => { setDate(evt.target.value) }} value={date} />
                </label>
                <label className="todo__label">
                    <span className="todo__label-text">Time taken</span>
                    <input className="todo__input" type="text" onChange={(evt) => { setTimeTaken(evt.target.value) }} value={timeTaken} />
                </label>
                <label className="todo__label">
                    <span className="todo__label-text">Final date</span>
                    <input className="todo__input" type="date" onChange={(evt) => { setFinalDate(evt.target.value) }} value={finalDate} />
                </label>

                <select onChange={(evt) => { setPriority(evt.target.value) }}>
                    <option value="">--Choose priority--</option>
                    <option value="high">High</option>
                    <option value="average">Average</option>
                    <option value="low">Low</option>
                </select>
                <select onChange={changeTodoColumnHandler}
                    value={status}>
                    <option value="">--Choose status--</option>
                    <option value={columnsIds[0]}>Queue</option>
                    <option value={columnsIds[1]}>Development</option>
                    <option value={columnsIds[2]}>Done</option>
                </select>
                {/* <label>
                    <input type="file" onChange={(evt) => { console.log(evt.target.value) }} />
                </label> */}
                <input className="button" type="submit" />
            </form>

        </div>
    )
}
