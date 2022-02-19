import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Project from "../components/Project"

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProjectPage = ({ data }) => {
  const { projects } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <h1>My Projects</h1>
      <ProjectList>
        {projects.map(project => (
          <Project key={project.url} project={project} />
        ))}
      </ProjectList>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/projects.md/" }) {
      frontmatter {
        projects {
          url
          sourcecode
          name
          technologies
          description
        }
      }
      rawMarkdownBody
    }
  }
`
