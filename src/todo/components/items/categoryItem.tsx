import styled from 'styled-components';
import { Category } from '../../interfaces/interfaces';

interface Props {
  category: Category;
}
export const CategoryItem = ({ category }: Props) => {
  return (
    <CategoryItemContainer style={{backgroundColor:`${category.color}`}}>
      <CategoryText>{category.name}</CategoryText>
    </CategoryItemContainer>
  )
}
const CategoryItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 101px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #2F80ED;
  padding: 0 .25rem;
`
const CategoryText = styled.p`
  color: #FFF;
  font-family: Inter;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;
