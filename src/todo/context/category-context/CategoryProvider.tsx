import { useReducer } from "react";
import { CategoryContext } from "./CategoryContext";
import { categoryReducer } from "./categoryReducer";
import { Category } from "../../interfaces/interfaces";


const INITIAL_STATE = {
  categories: [
    {
      id: '1',
      name: 'All tasks',
      color: ''
    },
    {
      id: '2',
      name: 'Study',
      color: '#F2994A'
    },
    {
      id: '3',
      name: 'Work',
      color: '#2F80ED'
    },
    {
      id: '4',
      name: 'Favourites',
      color: '#EB5757'
    },
    {
      id: '5',
      name: 'Sports',
      color: '#9B51E0'
    },
  ],
  todos: []
};


interface CategoryProviderProps {
  children: JSX.Element | JSX.Element[];
}


export const CategoryProvider = ({ children}: CategoryProviderProps) => {
  const [categoryState, dispatch] = useReducer(categoryReducer, INITIAL_STATE)

  const addCategory = (category: Category) => {
    dispatch({ type: 'ADD_CATEGORY', payload: category})
  }
  const removeCategory = (id: string) => {
    dispatch({ type: 'REMOVE_CATEGORY', payload: { id } })
  }
  const searchCategory = (id: string) => {
    dispatch({ type: 'SEARCH_CATEGORY', payload: { id } })
  }

  return (
    <CategoryContext.Provider value={{
      categoryState,
      addCategory,
      removeCategory,
      searchCategory
    }}>
      {children}
    </CategoryContext.Provider>
  )

}