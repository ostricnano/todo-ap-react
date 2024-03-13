import { useReducer } from "react";
import { Todo, TodoState } from "../../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";



const INITIAL_STATE: TodoState = {
  todoCount: 6,
  todos: [
    {
      id: '1',
      desc: 'Buy Bananas for the pancakes',
      complete: false,
      category: {
        id: '2',
        name: 'Study',
        color: '#F2994A'
      }
    },
    {
      id: '2',
      desc: 'Prepare roadmap for MVP',
      complete: false,
      category: {
        id: '3',
        name: 'Work',
        color: '#2F80ED'
      }
    },
    {
      id: '3',
      desc: 'Prepare portfolio to show in the interview',
      complete: false,
      category: {
        id: '3',
        name: 'Work',
        color: '#2F80ED'
      }
    },
    {
      id: '4',
      desc: 'Play golf wen the rain stops',
      complete: false,
      category: {
        id: '5',
        name: 'Sports',
        color: '#9B51E0'
      }
    },
    {
      id: '5',
      desc: 'Finish the project for the client',
      complete: false,
      category: {
        id: '2',
        name: 'Study',
        color: '#F2994A'
      }
    },
    {
      id: '6',
      desc: 'Learn the basics of react',
      complete: false,
      category: {
        id: '2',
        name: 'Study',
        color: '#F2994A'
      }
    },
  ],
  complete: 0,
  pendding: 6
};

//poner las dos opciones de children ya que puede recibir varios elementos JSX
interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

// HOC high order component
export const TodoProvider = ({ children }: TodoProviderProps) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const addTodo = (todo: Todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo})
  }

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } })
  }
  const removeTodo = (id: string) => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } })
  }
  const searchTodoByCategory = (id: string) => {
    dispatch({ type: 'SEARCH_TODO_BY_CATEGORY', payload: { id } })
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo,
      removeTodo,
      addTodo,
      searchTodoByCategory
    }}>
      {children}
    </TodoContext.Provider>
  )
}
