import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const ContactInfo = styled.form`
  width: 50%;
`

const StyledInput = styled.input`
  color: #69788a;
  background-color: #010f1c;
  opacity: 0.7;
  border-color: #0b1828;
`

const ContactSection = styled.div`
  display: flex;
`

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <ContactSection>
        <ContactForm
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <h2>Contact Form</h2>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <StyledInput type="text" name="name" />
          </label>
          <label>
            Email
            <StyledInput type="email" name="email" />
          </label>
          <label>
            Message
            <StyledInput type="text" name="message" />
          </label>
          <button type="submit">Send</button>
          <button type="reset">Clear</button>
        </ContactForm>
        <ContactInfo>
          <h2>Contact Information</h2>
        </ContactInfo>
      </ContactSection>
    </Layout>
  )
}

export default ContactPage
