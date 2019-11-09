import React from 'react'
import { State, TodoItem, ItemAction } from '../store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface Props {
  todo: TodoItem
  deleteDispatch: Function
  changeDispatch: Function
}
const Item: React.FC<Props> = ({ todo, deleteDispatch, changeDispatch }) => {
  return (
    <li
      onClick={() => {
        changeDispatch(todo)
      }}
    >
      {todo.content}
      {todo.completed.toString()}
    </li>
  )
}

const mapStateToProps = (state: State) => {
  return state
}
const mapDispatchToProps = (dispatch: Dispatch<ItemAction>) => {
  return {
    deleteDispatch: (obj: TodoItem) => {
      dispatch({
        type: 'DELETE',
        content: obj
      })
    },
    changeDispatch: (obj: TodoItem) => {
      dispatch({
        type: 'CHANGE',
        content: obj
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
