const initialState = [
  { id: 1, todo: "Go to work", completed: false },
  { id: 2, todo: "Play smartphone", completed: false },
  { id: 3, todo: "Go to house", completed: false },
];
export const TODOACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  DELETE_ALL: "DELETE_ALL",
  COMPLETE: "COMPLETE",
  EDIT_TODO: "EDIT_TODO",
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOACTIONS.ADD_TODO:
      return [...state, action.payload];
    case TODOACTIONS.DELETE_ALL:
      return [];
    case TODOACTIONS.REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case TODOACTIONS.EDIT_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        return updatedArray.push(item);
      });
      return updatedArray;

    case TODOACTIONS.COMPLETE:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return todoArray.push(item);
      });
      return todoArray;
    default:
      return state;
  }
};
