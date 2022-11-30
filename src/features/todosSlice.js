

import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    CHANGE_TODO_COLUMN,
    SEARCH,
    ADD_COMMENT,
    ADD_SUBTASK,
    CHECK_SUBTASK
} from "../redux/types";

const localStoredState = JSON.parse(localStorage.getItem('state'));
const initialLocalState = {
    projects: {
        byId: {
            "4f90d13a40": {
                projectName: "Book App",
                description: "App for discovering new books and sharing opinin about the books you read",
                id: "4f90d13a40",
                columns: ["4f90d13a41", "4f90d13a42", "4f90d13a43"]
            },
            "4f90d13a44": {
                projectName: "Pet Food App",
                description: "App for ordering pet food and sharing opinion about it",
                id: "4f90d13a41",
                columns: ["4f90d13a45", "4f90d13a46", "4f90d13a47"]
            }
        },
        allIds: ["4f90d13a40", "4f90d13a44"]
    },
    columns: {
        byId: {
            "4f90d13a41": {
                id: "4f90d13a41",
                columnName: "Queue",
                todos: [],
            },
            "4f90d13a42": {
                id: "4f90d13a42",
                columnName: "Development",
                todos: [],
            },
            "4f90d13a43": {
                id: "4f90d13a43",
                columnName: "Done",
                todos: [],
            },
            "4f90d13a45": {
                id: "4f90d13a45",
                columnName: "Queue",
                todos: [],
            },
            "4f90d13a46": {
                id: "4f90d13a46",
                columnName: "Development",
                todos: [],
            },
            "4f90d13a47": {
                id: "4f90d13a47",
                columnName: "Done",
                todos: [],
            },
        },
        allIds: ["4f90d13a41", "4f90d13a42", "4f90d13a43", "4f90d13a45", "4f90d13a46", "4f90d13a47"]
    },
    todos: {
        byId: {},
        allIds: [],
        lastIndex: 1
    },
    subTasks: {
        byId: {},
        allIds: []
    },
    comments: {
        byId: {},
        postIds: [],
        allIds: []
    },
    searchedTodos: [],
}

const initialState = localStoredState ? { ...localStoredState } : { ...initialLocalState };

export const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            const { todo, columnId, id } = action.payload;
            const columnsById = state.columns.byId;

            const newState = {
                ...state,
                columns: {
                    byId: {
                        ...columnsById,
                        [columnId]: {
                            ...columnsById[columnId],
                            todos: [...columnsById[columnId].todos, id]
                        }
                    }
                },
                todos: {
                    ...state.todos,
                    byId: {
                        ...state.todos.byId,
                        [id]: todo
                    },
                    allIds: [
                        ...state.todos.allIds,
                        id
                    ],
                    lastIndex: Number(state.todos.lastIndex) + 1
                }
            }
            localStorage.setItem('state', JSON.stringify(newState))
            return {
                ...newState
            }
        case EDIT_TODO:
            return (() => {
                const { todo, id } = action.payload;
                const newState = {
                    ...state,
                    todos: {
                        ...state.todos,
                        byId: {
                            ...state.todos.byId,
                            [id]: todo
                        }
                    }
                }
                localStorage.setItem('state', JSON.stringify(newState))
                return {
                    ...newState
                }
            })()
        case CHANGE_TODO_COLUMN:
            return (() => {
                const { id, columnId, nextColumnId } = action.payload;
                const columnsById = state.columns.byId;
                const oldColumnsIds = state.columns.byId[columnId].todos;
                const newColumnsIds = state.columns.byId[nextColumnId].todos;

                const oldColumnIdIndex = oldColumnsIds.findIndex(item => item === id);

                const nextOldColumnTodos = [
                    ...oldColumnsIds.slice(0, oldColumnIdIndex),
                    ...oldColumnsIds.slice(oldColumnIdIndex + 1)
                ];

                const newState = {
                    ...state,
                    columns: {
                        byId: {
                            ...columnsById,
                            [columnId]: {
                                ...columnsById[columnId],
                                todos: nextOldColumnTodos
                            },
                            [nextColumnId]: {
                                ...columnsById[nextColumnId],
                                todos: [...newColumnsIds, id]
                            }
                        }
                    },
                    todos: {
                        ...state.todos,
                        byId: {
                            ...state.todos.byId,
                            [id]: {
                                ...state.todos.byId[id],
                                status: nextColumnId
                            }
                        },
                    }

                }
                localStorage.setItem('state', JSON.stringify(newState))
                return {
                    ...newState
                }
            })()
        case REMOVE_TODO:
            return (() => {
                const { columnId, id } = action.payload;
                const columnsById = state.columns.byId;
                const columnsIds = state.columns.byId[columnId].todos;
                const todosIds = state.todos.allIds;
                const todos = state.todos;

                // измнененный объект с todo
                const { [id]: _, ...nextTodos } = todos.byId;

                const todoIdIndex = todosIds.findIndex(item => item === id);
                const columnIdIndex = columnsIds.findIndex(item => item === id);

                const nextColumnTodos = [
                    ...columnsIds.slice(0, columnIdIndex),
                    ...columnsIds.slice(columnIdIndex + 1)
                ];
                const nextTodosIds = [
                    ...todosIds.slice(0, todoIdIndex),
                    ...todosIds.slice(todoIdIndex + 1)
                ];
                const newState = {
                    ...state,
                    columns: {
                        byId: {
                            ...columnsById,
                            [columnId]: {
                                ...columnsById[columnId],
                                todos: nextColumnTodos
                            }
                        }
                    },

                    todos: {
                        ...state.todos,
                        byId: {
                            ...nextTodos
                        },
                        allIds: [
                            ...nextTodosIds
                        ]
                    }

                }
                localStorage.setItem('state', JSON.stringify(newState))
                return {
                    ...newState
                }
            })()
        case SEARCH:
            return (() => {
                const { string, queryType } = action;
                const todosObject = { ...state.todos.byId };
                const todosList = Object.values(todosObject);

                let searchedTodos;
                if (queryType === "title") {
                    searchedTodos = [todosList.filter(item => {
                        if (item.title.toLowerCase().indexOf(string.toLowerCase()) >= 0 || string.length <= 0) {
                            return item;
                        }
                    })]
                } else {
                    searchedTodos = [todosList.filter(item => {
                        if (item.number === Number(string)) {
                            return item;
                        }
                    })]
                }

                return {
                    ...state,
                    searchedTodos: searchedTodos[0]
                }
            })();
        case ADD_COMMENT:
            return (() => {
                const { string, id, todoId, commentId } = action;

                const newComment = {
                    text: string,
                    id: id,
                    comments: []
                }
                let newState;
                // если комментарий на комментарий
                if (commentId) {
                    newState = {
                        ...state,

                        comments: {
                            ...state.comments,
                            byId: {
                                ...state.comments.byId,
                                [id]: newComment,
                                [commentId]: {
                                    ...state.comments.byId[commentId],
                                    comments: [...state.comments.byId[commentId].comments, id]
                                }
                            },
                            allIds: [
                                ...state.comments.allIds, id
                            ]
                        }
                    }
                } else {

                    newState = {
                        ...state,

                        todos: {
                            ...state.todos,
                            byId: {
                                ...state.todos.byId,
                                [todoId]: {
                                    ...state.todos.byId[todoId],
                                    comments: [...state.todos.byId[todoId].comments, id]
                                }
                            },
                        },
                        comments: {
                            ...state.comments,
                            byId: {
                                ...state.comments.byId,
                                [id]: newComment
                            },
                            allIds: [
                                ...state.comments.allIds, id
                            ],
                            postIds: [
                                ...state.comments.allIds, id
                            ]
                        }
                    }
                }
                localStorage.setItem('state', JSON.stringify(newState))
                return {
                    ...newState
                }
            })()
        case ADD_SUBTASK:
            return (() => {
                const { subtask, id, todoId } = action;

                const newSubTask = {
                    text: subtask,
                    id: id,
                    checked: false
                }
                let newState;

                newState = {
                    ...state,

                    todos: {
                        ...state.todos,
                        byId: {
                            ...state.todos.byId,
                            [todoId]: {
                                ...state.todos.byId[todoId],
                                subTasks: [...state.todos.byId[todoId].subTasks, id]
                            }
                        },
                    },
                    subTasks: {
                        ...state.subTasks,
                        byId: {
                            ...state.subTasks.byId,
                            [id]: newSubTask
                        },
                        allIds: [
                            ...state.subTasks.allIds, id
                        ],
                    }
                }

                localStorage.setItem('state', JSON.stringify(newState))
                return {
                    ...newState
                }
            })()
        case CHECK_SUBTASK:
            return (() => {
                const { id, checked } = action;

                let newState;

                newState = {
                    ...state,

                    todos: {
                        ...state.todos,
                    },
                    subTasks: {
                        ...state.subTasks,
                        byId: {
                            ...state.subTasks.byId,
                            [id]: {
                                ...state.subTasks.byId[id],
                                checked: checked
                            }
                        },
                    }
                }

                localStorage.setItem('state', JSON.stringify(newState))
                return {
                    ...newState
                }
            })()
        default:
            return state;
    }

}