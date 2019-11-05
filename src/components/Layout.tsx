import React from 'react'
import Append from './Append'
import Nav from './Nav'
import List from './List'

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Append></Append>
      <Nav></Nav>
      <List></List>
    </React.Fragment>
  )
}

export default Layout
