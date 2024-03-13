import { InputTask } from "./components/inputs/InputTask"
import { TodoList } from "./components/list/TodoList"
import { TodoProvider } from "./context/todo-context/TodoProvider"
import styled from 'styled-components'
import { LateralNavbar } from "./components/nav-bar/LateralNavbar"
import { CategoryProvider } from "./context/category-context/CategoryProvider"

export const Todo = () => {
  return (
    <TodoProvider>
    <CategoryProvider>
      <TodoContainer>
        <LateralNavbar />
        <TodosWrapper>
          <InputTask />
          <TodoList />
        </TodosWrapper>
      </TodoContainer>
    </CategoryProvider>
    </TodoProvider>
  )
}

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 425px;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media (max-width: 1024px) {
    width: 70%;
  }
`
const TodosWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
