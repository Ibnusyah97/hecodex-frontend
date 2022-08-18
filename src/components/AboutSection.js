import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/about.png';
import DocButton from './buttons/DocButton';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  .about__img {
    max-width: 400px;
    margin-right: 100px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
=    }
    .about__img {
      margin: 0;
      max-width: 350px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div
            className="about__img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={AboutImg} alt="Hecodex" />
          </div>
          <div
            className="about__info"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <ParagraphText className="about__subtitle">
              Who are we
            </ParagraphText>
            <SectionTitle className="about__title">
              Make possibility to reality
            </SectionTitle>
            <ParagraphText className="about__desc">
              Hecodex is a startup studio of some passionate developer. Our Goal
              is to create a new innovation on Blockchain Space.
            </ParagraphText>
            <DocButton buttonType={Link} to="contact" smooth>
              Whitepaper
            </DocButton>
            <DocButton buttonType={Link} to="contact" smooth>
              Documentation
            </DocButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
