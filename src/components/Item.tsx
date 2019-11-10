/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { State, TodoItem, ItemAction } from '../store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  span {
    cursor: pointer;
  }
  .button {
    font-size: 14px;
    cursor: pointer;
  }
`

const completed = css`
  color: #d9d9d9;
  text-decoration: line-through;
`
interface Props {
  todo: TodoItem
  deleteDispatch: Function
  changeDispatch: Function
}
const Item: React.FC<Props> = ({ todo, deleteDispatch, changeDispatch }) => {
  return (
    <Container
      onClick={() => {
        changeDispatch(todo)
      }}
    >
      <span css={todo.completed ? completed : ''}>{todo.content}</span>
      <div
        className="button"
        onClick={() => {
          deleteDispatch(todo)
        }}
      >
        删除
      </div>
    </Container>
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
