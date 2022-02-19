import React from "react"
import styled from "styled-components"

import Nav from "./Nav"

const HeaderWrapper = styled.div`
  background: #010f1c;
  opacity: 0.7;
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
