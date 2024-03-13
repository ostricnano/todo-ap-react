import { useState } from 'react';
import { useCategory } from '../../hooks/useCategory';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { generateColor } from '../../utils/generateColor';
//import { useTodos } from '../../hooks/useTodos';



export const LateralNavbar  = () => {

  const [showInput, setshowInput] = useState(false)
  const { categories, addCategory } = useCategory();
  //const { searchTodoByCategory } = useTodos()
  const color = generateColor()

  const id = uuidv4()

  // const handleSearchByCategory = (id: string ) => {
  //   if(id !== undefined){
  //     searchTodoByCategory(id)
  //   }
  // }

  
  return (
    <NavbarContainer>
      <NavList>
        {
          categories.map((category) => {
            const { id, name } = category
            return(
            <NavItems 
              key={id}
              onClick={() => {}}
            >
              {name}
            </NavItems>
            )
          })
        }
      </NavList>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <AddCategory
          onClick={() => setshowInput(!showInput)}
        >
          {showInput ? '- Cancel' : '+ Add category'}
        </AddCategory>
        {
          showInput && (
            <AddCategoryInput
              type="text"
              placeholder="Category name"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addCategory({ id: id, name: e.currentTarget.value, color: color})
                  setshowInput(false)
                }
              }}
            />
          )
        }
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 30%;
  height: 70%;
  border-right: 1px solid #E1DEDE;
  margin-left: 0.5rem;
  padding: 1rem 0;
`

const AddCategory = styled.button`

  border: none;
  background: none;
  color: #ABABAB;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  padding: 0;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const NavItems = styled.li`
  color: #000;
  font-family: "Inter";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  list-style: none;
  margin: 1.2rem 0;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;
const AddCategoryInput = styled.input`
  border: none;
  border-radius: 6px;
  background: #E1DEDE;
  color: #ABABAB;
  font-family: "Inter";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.5rem;
  margin: 1rem 1rem 0 0;
  width: auto;
`

