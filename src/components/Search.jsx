import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { search } from '../redux/actions';
import TodoItem from './TodoItem';

export default function Search() {
    const [query, setQuery] = useState('');
    const [queryType, setQueryType] = useState('title');
    const [inputType, setInputType] = useState('text')
    const [validationMessage, setValidationMessage] = useState('');
    const [showResult, setShowResult] = useState(false)

    const dispatch = useDispatch();
    let foundTodos = useSelector(state => state.todos.searchedTodos);

    const searchHandler = (evt) => {
        evt.preventDefault();
        setShowResult(true)
        if (query) {
            dispatch(search(query, queryType));
        } else {
            setValidationMessage('Your search query is empty')
        }
    }
    const selectChangeHandler = (evt) => {
        setQueryType(evt.target.value);
        if (evt.target.value === "number") {
            setInputType("number")
        } else {
            setInputType("text")
        }
    }

    return (
        <>
            <h3 className='todo__title'>Search</h3>
            <form className="todo__search" onSubmit={searchHandler}>
                <label className="todo__label">
                    <input className="todo__input" type={inputType} onChange={(evt) => {
                        setQuery(evt.target.value)
                    }} value={query} />
                </label>

                <select onChange={selectChangeHandler}>
                    <option value="title">Search by title</option>
                    <option value="number">Search by number</option>
                </select>
                <div>{validationMessage}</div>
                <input className="button" type="submit" value="search" />
            </form>

            {showResult ?
                <>
                    <h3 className='todo__title'>Found todos</h3>
                    <div className='todo__found'>
                        {foundTodos.map(item => <TodoItem todo={item} />)}
                    </div>
                </>
                : ''}
        </>

    )
}
