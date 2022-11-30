import { nanoid } from 'nanoid';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeTodoColumn, editTodo } from '../redux/actions';

export default function AddTodo({ columnId, showModal, oldTodo, columnsIds }) {
    let lastIndex = useSelector(state => state.todos.todos.lastIndex);
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [number, setNumber] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [timeTaken, setTimeTaken] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [priority, setPriority] = useState("");
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [status, setStatus] = useState("");
    const [subTodos, setSubTodos] = useState([]);
    const [comments, setComments] = useState([]);
    console.log(lastIndex)
    useEffect(() => {
        if (oldTodo) {
            setTitle(oldTodo.title);
            setDescription(oldTodo.description);
            setDate(oldTodo.date);
            setTimeTaken(oldTodo.timeTaken);
            setFinalDate(oldTodo.finalDate);
            setPriority(oldTodo.priority);
            setAttachedFiles(oldTodo.attachedFiles);
            setStatus(oldTodo.status);
            setSubTodos(oldTodo.subTodos);
            setComments(oldTodo.comments)
            setId(oldTodo.id)
            setNumber(oldTodo.number)
        } else {
            setId(nanoid());
            setStatus(columnId)
        }

    }, [])

    const todo = {
        id: id,
        title: title,
        number: lastIndex,
        // description: "bla bla",
        // date: "05.02",
        // timeTaken: "30",
        // finalDate: "05.02",
        // priority: "high, average, low",
        // attachedFiles: [1, 2, 3],
        comments: [],
        status: status,
        // subTodos: [1, 2, 3],
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
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <input className="form__input" placeholder="Title" onChange={(evt) => { setTitle(evt.target.value) }} value={title} />
                </label>
                <label>
                    <input className="form__input" placeholder="Description" onChange={(evt) => { setDescription(evt.target.value) }} value={description} />
                </label>
                <label>
                    <input className="form__input" placeholder="Time taken" onChange={(evt) => { setTimeTaken(evt.target.value) }} value={timeTaken} />
                </label>
                <label>
                    <input className="form__input" placeholder="Final date" type="date" onChange={(evt) => console.log(evt.target)} value={title} />
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
                <label>
                    <input type="file" onChange={(evt) => { console.log(evt.target.value) }} />
                </label>
                <input type="submit" />
            </form>

        </div>
    )
}
