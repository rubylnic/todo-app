import { combineReducers } from "redux";
import { todosReducer } from "../features/todosSlice";

export const rootReducer = combineReducers({
    todos: todosReducer
})