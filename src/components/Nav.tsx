/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { DataState, State, NavAction } from '../store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

const Container = styled.div`
  display: flex;
  padding: 5px 20px 0;
`
const base = css`
  font-size: 12px;
  box-sizing: border-box;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  border-radius: 3px;
  border: 1px solid transparent;
  cursor: pointer;
`
const selected = css`
  border: 1px solid rgba(175, 47, 47, 0.2);
`

interface Props {
  kind: DataState['kind']
  classifyDispatch: Function
}
const Nav: React.FC<Props> = ({ kind, classifyDispatch }) => {
  return (
    <Container>
      <div
        css={[base, kind === 'all' ? selected : '']}
        onClick={() => {
          classifyDispatch('all')
        }}
      >
        全部
      </div>
      <div
        css={[base, kind === 'incompleted' ? selected : '']}
        onClick={() => {
          classifyDispatch('incompleted')
        }}
      >
        未完成
      </div>
      <div
        css={[base, kind === 'completed' ? selected : '']}
        onClick={() => {
          classifyDispatch('completed')
        }}
      >
        已完成
      </div>
    </Container>
  )
}

const mapStateToProps = (state: State) => {
  return {
    kind: state ? state.kind : 'all'
  }
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
