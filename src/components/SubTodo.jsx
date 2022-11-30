import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { checkSubtask } from '../redux/actions';

export default function SubTodo({ subTodo, todoId }) {
    const [checked, setChecked] = useState(false);
    console.log(subTodo.checked)
    useEffect(() => {
        setChecked(subTodo.checked)
    }, [])
    console.log(checked)
    const dispatch = useDispatch();
    const checkSubtaskHandler = (evt) => {
        const newChecked = !checked;
        setChecked(newChecked);
        dispatch(checkSubtask(subTodo.id, newChecked))
    }
    return (
        <div className='todo__subtodo'>
            <label className='checkbox'>
                <input className='checkbox__input' type="checkbox" onChange={checkSubtaskHandler} checked={checked} />
                <span className='checkbox__indicator'></span>
            </label>
            <div>{subTodo.text}</div>
        </div>

    )
}
