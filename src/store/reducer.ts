import { TodoItem, State, Action } from '../store/index'
import { Reducer } from 'redux'

const reducer: Reducer<State, Action> = (state = null, action) => {
  if (!state) return null
  const { todoList } = state
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todoList: [...todoList, action.content]
      }
    case 'CHANGE':
      return {
        ...state,
        todoList: todoList.map((item: TodoItem) => {
          if (item.id === action.content.id) {
            return { ...item, completed: !item.completed }
          }
          return item
        })
      }
    case 'DELETE':
      return {
        ...state,
        todoList: todoList.filter((item: TodoItem) => {
          return item.id !== action.content.id
        })
      }
    case 'CLASSIFY':
      return {
        ...state,
        kind: action.kind
      }
    default:
      return state
  }
}

export default reducer
