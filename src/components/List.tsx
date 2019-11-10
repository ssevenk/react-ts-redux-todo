import styled from '@emotion/styled'
import React from 'react'
import { State, TodoItem } from '../store/index'
import Item from './Item'
import { connect } from 'react-redux'

const Container = styled.ul`
  padding: 20px;
`
interface Props {
  todoList: TodoItem[]
}

const List: React.FC<Props> = ({ todoList }) => {
  return (
    <Container>
      {todoList.map(item => {
        return <Item todo={item} key={item.id}></Item>
      })}
    </Container>
  )
}

const mapStateToProps = (state: State) => {
  if (!state) return null
  switch (state.kind) {
    case 'all':
      return {
        todoList: state.todoList
      }
    case 'completed':
      return {
        todoList: state.todoList.filter((item: TodoItem) => {
          return item.completed === true
        })
      }
    case 'incompleted':
      return {
        todoList: state.todoList.filter((item: TodoItem) => {
          return item.completed === false
        })
      }
    default:
      return {
        todoList: state.todoList
      }
  }
}

export default connect(mapStateToProps)(List)
