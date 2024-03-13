import { useContext } from 'react';
import { CategoryContext } from '../context/category-context/CategoryContext';

export const useCategory = () => {
  const { categoryState, addCategory, removeCategory, searchCategory } = useContext(CategoryContext);
  const { categories } = categoryState;

  return {
    categoryState,
    categories: categories,
    addCategory,
    removeCategory,
    searchCategory
  }
};
