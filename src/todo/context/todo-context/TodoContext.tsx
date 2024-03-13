import { createContext } from "react";
import { Todo, TodoState } from "../../interfaces/interfaces";

export interface TodoContextProps {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  addTodo: (todo: Todo) => void;
  searchTodoByCategory: (id: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);