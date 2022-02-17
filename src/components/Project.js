import React from "react"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  border: 1px solid black;
  width: 30%;
  padding: 2em;
  margin: 1em;
`

const Project = ({ project }) => {
  return (
    <Card>
      <h1>{project.name}</h1>
    </Card>
  )
}

export default Project
