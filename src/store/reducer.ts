import {State} from './index'

export default function(state:State,  action)  {
    const { todoList } = state
    switch (action.type)  {
    case 'ADD':
      return {
        ...state,
        todoList: todoList.push(action.content)
      }
  }

