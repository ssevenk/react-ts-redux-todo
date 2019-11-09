import React from 'react'
import { State, NavAction } from '../store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface Props {
  classifyDispatch: Function
}
const Nav: React.FC<Props> = ({ classifyDispatch }) => {
  return (
    <div>
      <div
        onClick={() => {
          classifyDispatch('all')
        }}
      >
        全部
      </div>
      <div
        onClick={() => {
          classifyDispatch('incompleted')
        }}
      >
        未完成
      </div>
      <div
        onClick={() => {
          classifyDispatch('completed')
        }}
      >
        已完成
      </div>
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return state
}
const mapDispatchToProps = (dispatch: Dispatch<NavAction>) => {
  return {
    classifyDispatch: (kind: NavAction['kind']) => {
      dispatch({
        type: 'CLASSIFY',
        kind: kind
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
