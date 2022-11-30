import React from 'react'
import { useSelector } from 'react-redux';
import SubTodo from './SubTodo';


export default function SubTodos({ todoId }) {
    let subTodos = useSelector(state => state.todos.subTasks.byId);
    let subTodosIds = useSelector(state => state.todos.todos.byId[todoId].subTasks);

    return (
        <>
            {subTodosIds.length ? <>
                <h4 className='todo__title'>Subtodos</h4>

                <div>
                    {
                        subTodosIds.map(i => {
                            const item = subTodos[i];
                            return <SubTodo subTodo={item} todoId={todoId} />
                        })

                    }
                </div>
            </> : ''}
        </>
    )
}
