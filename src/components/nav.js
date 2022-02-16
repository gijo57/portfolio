import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`

const Nav = () => {
  return (
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  )
}

export default Nav
