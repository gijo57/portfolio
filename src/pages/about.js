import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = ({ data }) => {
  const {
    frontmatter: { title, subheading },
    rawMarkdownBody: body,
  } = data.markdownRemark
  const paragraphs = body.split("\n").filter(paragraph => paragraph !== "")

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>{subheading}</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={paragraph + i}>{paragraph}</p>
      ))}
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
