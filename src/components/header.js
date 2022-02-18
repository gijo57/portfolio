import React from "react"
import styled from "styled-components"

import Nav from "./Nav"

const HeaderWrapper = styled.div`
  background-color: rgba(80, 166, 215, 0.5);
  padding: 2em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
    </HeaderWrapper>
  )
}

export default Header
