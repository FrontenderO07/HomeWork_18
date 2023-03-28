import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import Auth from "./components/Auth";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/header" element={<Header />}>
            <Route path="todolist" element={<TodoList />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
