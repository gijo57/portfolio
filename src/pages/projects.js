import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

const ProjectPage = ({ data }) => {
  const content = data.markdownRemark

  return (
    <Layout>
      <Hero content={content} />
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/projects.md/" }) {
      frontmatter {
        title
        greetings
        emoji
        subheadingPrefix
        subheadingHighlight
      }
      rawMarkdownBody
    }
  }
`
