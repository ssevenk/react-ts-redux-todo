import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { State } from '../store/index'
import reducer from '../store/reducer'
import Layout from './Layout'
import './App.css'

const initStore: State = {
  todoList: [
    {
      id: '1',
      content: 'learn',
      completed: false
    },
    {
      id: '2',
      content: 'eat',
      completed: false
    }
  ],
  kind: 'all'
}

const store = createStore(reducer, initStore)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  )
}

export default App
