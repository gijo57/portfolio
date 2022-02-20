import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/Layout"

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 1em;
`

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
`

const ContactInfo = styled.form`
  width: 50%;
  padding: 0 1em;
`

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`

const StyledInput = styled.input`
  color: rgb(176, 196, 220);
  background-color: #0b1828;
  opacity: 0.7;
  border-radius: 0.3em;
  height: 2.5em;
`

const StyledTextArea = styled.textarea`
  color: rgb(176, 196, 220);
  background-color: #0b1828;
  opacity: 0.7;
  border-color: #0b1828;
  border-radius: 0.3em;
  resize: none;
  height: 20em;
`

const ContactSection = styled.div`
  display: flex;
`

const Contact = styled.a`
  margin-left: 1em;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
`

const FormButton = styled.button`
  width: 45%;
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
          <InputWrapper>
            Name
            <StyledInput type="text" name="name" />
          </InputWrapper>
          <InputWrapper>
            Email
            <StyledInput type="email" name="email" />
          </InputWrapper>
          <InputWrapper>
            Message
            <StyledTextArea name="message" />
          </InputWrapper>
          <Controls>
            <FormButton type="submit">Send</FormButton>
            <FormButton type="reset">Clear</FormButton>
          </Controls>
        </ContactForm>
        <ContactInfo>
          <h2>Contact Information</h2>
          <ContactDetail>
            <FontAwesomeIcon class="fa-fw" icon={faEnvelope} />
            <Contact>pekkajohannestiitinen@gmail.com</Contact>
          </ContactDetail>
          <ContactDetail>
            <FontAwesomeIcon class="fa-fw" icon={faLinkedin} />
            <Contact>https://www.linkedin.com/in/pekka-tiitinen/</Contact>
          </ContactDetail>
          <ContactDetail>
            <FontAwesomeIcon class="fa-fw" icon={faGithub} />
            <Contact>https://github.com/gijo57</Contact>
          </ContactDetail>
        </ContactInfo>
      </ContactSection>
    </Layout>
  )
}

export default ContactPage
