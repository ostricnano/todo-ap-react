import { Todo, TodoState } from "../../interfaces/interfaces";

type TodoAction = 
  {type: 'ADD_TODO', payload: Todo} 
| {type: 'TOGGLE_TODO', payload: { id: string }}
| {type: 'REMOVE_TODO', payload: { id: string }}
| {type: 'SEARCH_TODO_BY_CATEGORY', payload: { id: string }}
;

//el reducer trabaja con dos argumentos, el estado y la accion
export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        //mapeamos el arreglo de todos y si el id del todo es igual al id de la accion, cambiamos el valor de complete
        //le pasamos {...todo} para que no se modifique el objeto original
        todos: state.todos.map(({...todo}) => {
          if(todo.id === action.payload.id) {
            todo.complete = !todo.complete
            todo.complete ? state.complete++ : state.complete--
            todo.complete ? state.pendding-- : state.pendding++  
          }
          return todo
        }),
      }
      case 'REMOVE_TODO':
        return {
          ...state,
          //filtramos el arreglo de todos y si el id del todo es diferente al id de la accion, lo dejamos en el arreglo
          todos: state.todos.filter(todo => todo.id !== action.payload.id)
        }
      case 'SEARCH_TODO_BY_CATEGORY':
        const filteredTodos = state.todos.filter(({...todo}) => {
          if(todo.category.id === action.payload.id) {
          todo.category && todo.category.id === action.payload.id
          } else {
            return todo
          }
        })
        return {
          ...state,
          //filtramos el arreglo de todos y si el id del todo es igual al id de la accion, lo dejamos en el arreglo
          todos: filteredTodos
        }
    default:
      return state;
  }
};