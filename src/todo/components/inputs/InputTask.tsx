import { v4 as uuidv4 } from 'uuid';
import { useTodos } from '../../hooks/useTodos'
import { useState } from 'react';
import styled from 'styled-components'
import { useCategory } from '../../hooks/useCategory';
import { generateColor } from '../../utils/generateColor';
import { Title } from '../title/Title';

export const InputTask = () => {
  // guarda el valor del input
  const [value, setValue] = useState('')
  // guarda el valor del select
  const [category, setCategory] = useState('')
  // obtiene las categorias para iterar en el select
  const { categories } = useCategory()
  // obtiene la funcion para agregar una tarea
  const { addTodo, todoState } = useTodos()
  // genera un id unico para la tarea
  const id = uuidv4()
  const color = generateColor()
  // agrega una tarea
  const handleAddTodo = () => {
    addTodo({
      id: id,
      desc: value,
      complete: false,
      category: {
        // si la categoria no existe, se genera un id unico
        id: categories.find((cat) => cat.name === category)?.id || uuidv4(),
        name: category,
        color: categories.find((cat) => cat.name === category)?.color || color
      }
    })
    setValue('')
  }
  return (
    <InputContainer>
      <Title todoState={todoState} />
      <InputField 
        type="text" 
        placeholder="Add a new task"
        name="task"
        value={value}
        onChange={(e)=> {setValue(e.target.value)}}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo()
          }
        }}
      />
      <Select
        name="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="">Select a category</option>
        {
          categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))
        }
      </Select>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`
const InputField = styled.input`
  width: 100%;
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
  margin-bottom: 0.5rem;
`
const Select = styled.select`
  width: 104%;
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
  margin-bottom: 1rem;
`
