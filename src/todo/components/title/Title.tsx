import styled from 'styled-components';
import { useTodos } from '../../hooks/useTodos';

interface TodoState {
  todoCount: number;
  complete: number;
  pendding: number;
}

export const Title = ({
  todoState
}: { todoState: TodoState
}) => {
 const { todos } = useTodos()
  return (
    <TodosStateComponent>
    <TitleText>All Tasks</TitleText>
    <StateWrapper>
      <Text>Todo Count: {todos.length}</Text>
      <Text>Complete: {todoState.complete} </Text>
      <Text>Pendding: {todoState.pendding}</Text>
    </StateWrapper>
  </TodosStateComponent>
  )
}


const TodosStateComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  `
const StateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const TitleText = styled.h3`
  color: #000;

  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text = styled.p`
  color: #000;

  font-family: "Inter";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
`;
