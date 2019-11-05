interface TodoItem {
  id: string
  content: string
  completed: boolean
}

export interface State {
  todoList: TodoItem[]
}

export interface Action {
  type: string
  content: TodoItem
}
