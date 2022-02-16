import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Nav = () => {
  return (
    <NavLinks>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About Me</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </NavLinks>
  )
}

export default Nav
