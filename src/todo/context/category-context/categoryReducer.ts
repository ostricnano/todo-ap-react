import { Category, CategoryState } from "../../interfaces/interfaces";
//import { v4 as uuidv4 } from 'uuid';

type CategoryAction =
  | { type: "ADD_CATEGORY"; payload: Category }
  | { type: "REMOVE_CATEGORY"; payload: { id: string } }
  | { type: "SEARCH_CATEGORY"; payload: { id: string } };
;

export const categoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload.id
        ),
      };
    case "SEARCH_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id === action.payload.id
        ),
      };
    default:
      return state;
  }
}