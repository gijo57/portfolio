import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    color: rgb(80, 166, 215);
  }
`

const Hero = ({ content }) => {
  const {
    frontmatter: {
      greetings,
      emoji,
      title,
      subheadingPrefix,
      subheadingHighlight,
    },
    rawMarkdownBody: body,
  } = content

  return (
    <StyledSection id="hero">
      <h1 className="title">
        {greetings}{" "}
        <span role="img" aria-label="emoji">
          {emoji}
        </span>
        <br />
        {title}
      </h1>
      <h2 className="subtitle">
        {subheadingPrefix}{" "}
        <span className="highlighted">{subheadingHighlight}</span>
      </h2>
      <div className="description">{body}</div>
    </StyledSection>
  )
}

export default Hero
