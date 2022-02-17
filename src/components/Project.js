import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border: 1px solid black;
  width: 33%;
  padding: 2em;
  margin: 2em;
`

const Project = ({ project }) => {
  return (
    <Card>
      <h1>{project.name}</h1>
    </Card>
  )
}

export default Project
