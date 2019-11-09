import React, { useState, Fragment } from 'react'
import { State, TodoItem, ItemAction } from '../store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface Props {
  addDispatch: Function
}
const Append: React.FC<Props> = ({ addDispatch }) => {
  const [content, setContent] = useState('')

  function submit() {
    console.log(content)
    const todo: TodoItem = {
      id: Date.now().toString(),
      content: content,
      completed: false
    }
    addDispatch(todo)
  }

  return (
    <Fragment>
      <input
        type="text"
        value={content}
        onChange={e => {
          setContent(e.target.value)
        }}
      />
      <button onClick={submit}>提交</button>
    </Fragment>
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
