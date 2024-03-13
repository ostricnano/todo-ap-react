// import { useContext } from "react"
// import { TodoContext } from "../context/TodoContext"
import { Todo } from "../../interfaces/interfaces"
import { useTodos } from "../../hooks/useTodos"
import styled from 'styled-components'
import { CategoryItem } from "./categoryItem"
import { FaTrash } from "react-icons/fa";

interface TodoItemProps {
  todo: Todo
}
interface StyledProps {
  complete: boolean
}
export const TodoItem = ({ todo }: TodoItemProps) => {
  // lo importamos desde el context directamente
  //const { toggleTodo } = useContext(TodoContext)

  // lo importamos desde el hook  useTodos
  const { toggleTodo, removeTodo } = useTodos()

  return (
    <ItemContainer>
      <ImageWapper
        onClick={() => toggleTodo(todo.id)}
      >
        <CheckBoxImage src='/images/check-box.png' alt='checkbox' />
        {todo.complete && <TickImage src='/images/green-tick.png' alt='check' />}
      </ImageWapper>
      <Item complete={todo.complete}>
        {todo.desc}
      </Item>
      <CategoryItem 
        category={todo.category}
      />
      <ImageWapper
        onClick={() => removeTodo(todo.id)}
      >
        <FaTrash style={{color: '#EB5757', marginRight: '0.25rem'}} />
      </ImageWapper>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`
const ImageWapper = styled.div`
position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
`
const CheckBoxImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`
const TickImage = styled.img`
  position: absolute;
  width: 100%;
  height: 120%;
  bottom: 4px;
  left: 25%;
  z-index: 1;
`
const Item = styled.li<StyledProps>`
  color: ${props => props.complete ? '#EB5757' : '#000'};
  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
  margin: 0;
  padding: 0;
  list-style: none;
  width: 70%;
  font-family: Inter;
  font-size: 0.9rem;
`

