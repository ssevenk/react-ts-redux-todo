import styled from '@emotion/styled'
import React from 'react'
import Append from './Append'
import Nav from './Nav'
import List from './List'

const Container = styled.div`
  margin: auto;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`
const Layout: React.FC = () => {
  return (
    <Container>
      <Append></Append>
      <Nav></Nav>
      <List></List>
    </Container>
  )
}

export default Layout
