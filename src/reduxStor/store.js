import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    // counter: counterReducer,
    card: cardReducer
})

export const store = createStore(rootReducer)