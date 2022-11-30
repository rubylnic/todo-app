import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { search } from '../redux/actions';
import TodoItem from './TodoItem';

export default function Search() {
    const [query, setQuery] = useState('');
    const [queryType, setQueryType] = useState('title');
    const [inputType, setInputType] = useState('text')
    const [validationMessage, setValidationMessage] = useState('')

    const dispatch = useDispatch();
    let foundTodos = useSelector(state => state.todos.searchedTodos);
    console.log(foundTodos)
    const searchHandler = (evt) => {
        evt.preventDefault();
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
            <div>Search</div>
            <form onSubmit={searchHandler}>
                <input type={inputType} onChange={(evt) => {
                    setQuery(evt.target.value)
                }} value={query} />
                <select onChange={selectChangeHandler}>
                    <option value="title">Search by title</option>
                    <option value="number">Search by number</option>
                </select>
                <div>{validationMessage}</div>
                <input type="submit" />
            </form>
            <div>
                <h3>Found todos</h3>
                {foundTodos.map(item => <TodoItem todo={item} />)}
            </div>
        </>

    )
}
