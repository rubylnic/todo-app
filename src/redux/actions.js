import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    CHANGE_TODO_COLUMN,
    SEARCH,
    ADD_COMMENT,
    ADD_SUBTASK,
    CHECK_SUBTASK
} from './types';


export function addTodo(id, todo, columnId) {
    return {
        type: ADD_TODO,
        payload: {
            id,
            todo,
            columnId
        }
    }
}

export function editTodo(id, todo, columnId) {
    return {
        type: EDIT_TODO,
        payload: {
            id,
            todo,
            columnId
        }
    }
}

export function changeTodoColumn(id, columnId, nextColumnId) {
    return {
        type: CHANGE_TODO_COLUMN,
        payload: {
            id,
            columnId,
            nextColumnId
        }
    }
}
export function removeTodo(id, columnId) {
    return {
        type: REMOVE_TODO,
        payload: {
            id,
            columnId
        }
    }
}

export function search(string, queryType) {
    return {
        type: SEARCH,
        string,
        queryType
    }
}

export function addComment(string, id, todoId, commentId) {
    return {
        type: ADD_COMMENT,
        string,
        id,
        todoId,
        commentId
    }
}
export function addSubtask(subtask, id, todoId) {
    return {
        type: ADD_SUBTASK,
        subtask,
        id,
        todoId,
    }
}
export function checkSubtask(id, checked) {
    return {
        type: CHECK_SUBTASK,
        id,
        checked
    }
}