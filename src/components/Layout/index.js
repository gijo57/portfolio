import React from "react"
import styled from "styled-components"
import particlesOptions from "../../particles.json"

import Particles from "react-tsparticles"
import Header from "../Header"
import Footer from "../Footer"

import "./styles.css"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <Particles className="particles" options={particlesOptions} />
    </StyledLayout>
  )
}

export default Layout
