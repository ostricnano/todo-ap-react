export interface Todo {
  id: string,
  desc: string,
  complete: boolean
  category: Category
}

export interface TodoState {
  todoCount: number,
  todos: Todo[],
  complete: number,
  pendding: number,
}

export interface CategoryState {
  categories: Category[]
}

export interface Category {
  id?: string,
  name: string
  color?: string
}
