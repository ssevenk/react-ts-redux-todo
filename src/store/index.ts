export interface TodoItem {
  id: string
  content: string
  completed: boolean
}

export interface DataState {
  todoList: TodoItem[]
  kind: 'all' | 'completed' | 'incompleted'
}
export type State = DataState | null

export interface ItemAction {
  type: 'ADD' | 'CHANGE' | 'DELETE'
  content: TodoItem
}
export interface NavAction {
  type: 'CLASSIFY'
  kind: 'all' | 'completed' | 'incompleted'
}
export type Action = ItemAction | NavAction
