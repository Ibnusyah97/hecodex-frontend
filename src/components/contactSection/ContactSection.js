import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import FormField from './FormField';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

function ContactSection() {
  return (
    <ContactSectionStyles id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div
            className="contact__info"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <SectionTitle>Contact Us</SectionTitle>
            <ParagraphText>We would love to hear from you.</ParagraphText>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <form className="contact__form">
              <FormField
                className="contact__field--fullWidth"
                type="text"
                label="name"
                name="name"
                id="name"
                required
              />
              <FormField
                type="email"
                label="Email"
                name="email"
                id="email"
                required
              />
              <FormField
                type="text"
                label="Subject"
                name="subject"
                id="subject"
                required
              />
              <FormField
                className="contact__field--fullWidth"
                label="Message"
                name="message"
                id="message"
                rows="6"
              />
              <PrimaryButton
                type="submit"
                buttonType="button"
                className="contact__submit"
              >
                Submit
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
