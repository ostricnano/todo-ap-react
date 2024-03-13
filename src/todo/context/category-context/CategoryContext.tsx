import { createContext } from "react";
import { Category, CategoryState } from "../../interfaces/interfaces";

export interface CategoryContextProps {
  categoryState: CategoryState;
  addCategory: (category: Category) => void;
  removeCategory: (id: string) => void;
  searchCategory: (id: string) => void;
}

export const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps);