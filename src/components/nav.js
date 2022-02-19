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
  color: white;

  &:hover {
    color: #50a6d7;
  }
`

const Nav = () => {
  return (
    <NavLinks>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/about">ABOUT ME</StyledLink>
      <StyledLink to="/projects">PROJECTS</StyledLink>
      <StyledLink to="/contact">CONTACT</StyledLink>
    </NavLinks>
  )
}

export default Nav
