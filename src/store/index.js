import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todo/todoReducer";
import { authReducer } from "./auth/authReducer";
const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});
export const store = createStore(rootReducer);
