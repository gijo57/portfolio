import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"

const IndexPage = ({ data }) => {
  const content = data.markdownRemark

  return (
    <Layout>
      <Hero content={content} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/hero.md/" }) {
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
