import styled from '@emotion/styled'
import React, { useState } from 'react'
import { State, TodoItem, ItemAction } from '../store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

const Container = styled.div`
  padding: 16px 16px 16px 35px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: space-between;

  input {
    width: 80%;
    border: none;
  }

  div {
    width: 15%;
    font-size: 14px;
    cursor: pointer;
  }
`
interface Props {
  addDispatch: Function
}
const Append: React.FC<Props> = ({ addDispatch }) => {
  const [content, setContent] = useState('')

  function submit() {
    const todo: TodoItem = {
      id: Date.now().toString(),
      content: content,
      completed: false
    }
    addDispatch(todo)
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="输入代办事项"
        value={content}
        onChange={e => {
          setContent(e.target.value)
        }}
      />
      <div onClick={submit}>提交</div>
    </Container>
  )
}

const mapStateToProps = (state: State) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch<ItemAction>) => {
  return {
    addDispatch: (obj: TodoItem) => {
      dispatch({
        type: 'ADD',
        content: obj
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Append)
