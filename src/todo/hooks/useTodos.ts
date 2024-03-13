import { useContext } from "react";
import { TodoContext } from "../context/todo-context/TodoContext";

export const useTodos = () => {
  const { todoState, toggleTodo, removeTodo, addTodo, searchTodoByCategory } = useContext(TodoContext);
  const { todos } = todoState;

  return {
    todos: todos,
    pendingTodos: todos.filter(todo => !todo.complete).length,
    todoState,
    toggleTodo,
    removeTodo,
    addTodo,
    searchTodoByCategory
  }
};