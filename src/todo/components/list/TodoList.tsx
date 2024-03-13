// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "../items/TodoItem"
import { useTodos } from "../../hooks/useTodos"
import styled from 'styled-components'
import { useCategory } from "../../hooks/useCategory"

export const TodoList = () => {
  // lo importamos desde el context directamente
  // const { todoState } = useContext(TodoContext)
  // const { todos } = todoState

  // lo importamos desde el hook  useTodos
  const { todos } = useTodos()
  console.log(todos)
  const {categoryState} = useCategory()
  console.log(categoryState)
  return (
    <ListContainer>
      {
        todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))
      }
    </ListContainer>
  )
}

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 95%;
  overflow-y: auto;

  /* Personalización del scroll */
  &::-webkit-scrollbar {
    width: 4px;
    margin-right: 3rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color de fondo del riel de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Color de la manija de la barra de desplazamiento */
    border-radius: 5px; /* Radio de borde de la manija */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color de la manija de la barra de desplazamiento al pasar el mouse */
  }
`
