export const getTodo = state => state.todo;
export const getCategory = state => state.category;
export const getByCategory = state => category => state.todo.filter(item => item.category == category);