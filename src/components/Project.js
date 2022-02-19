import React from "react"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 15, 28, 0.7);
  width: 30%;
  padding: 2em;
  margin: 1em;
  border-radius: 0.3em;
`

const LinkButton = styled.a`
  color: #50a6d7;
  width: 15em;
  padding: 0.5em;
  border: 1px solid #50a6d7;
  background-color: rgba(1, 15, 28, 0.7);
  border-radius: 0.3em;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: rgb(1, 15, 28);
    background-color: #50a6d7;
    cursor: pointer;
  }
`

const Project = ({ project }) => {
  return (
    <Card>
      <h2>{project.name}</h2>
      <LinkButton href={project.url} target="_blank">
        See Project
      </LinkButton>
    </Card>
  )
}

export default Project
