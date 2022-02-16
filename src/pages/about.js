import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const AboutPage = ({ data }) => {
  const content = data.markdownRemark
  console.log(content)
  return (
    <Layout>
      <h1></h1>
      <h2>jigga</h2>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      frontmatter {
        title
        subheading
      }
      rawMarkdownBody
    }
  }
`
