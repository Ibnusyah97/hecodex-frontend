import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import RoadmapImg from '../assets/images/roadmap.png';

const RoadmapStyles = styled.div`
  padding: 10rem 0;
  .Roadmap__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Roadmap__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .Roadmap__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .Roadmap__img {
    max-width: 680px;
    margin-right: 50px;
  }
  @media only screen and (max-width: 768px) {
    .Roadmap__wrapper {
      flex-direction: column;
=    }
    .Roadmap__img {
      margin: 0;
      max-width: 500px;
    }
  }
`;

function RoadmapSection() {
  return (
    <RoadmapStyles id="roadmap">
      <div className="container">
        <div className="Roadmap__wrapper">
          <div
            className="Roadmap__info"
            data-aos="zoom-in-down"
            data-aos-duration="300"
          >
            <ParagraphText className="Roadmap__subtitle">
              Our Roadmap
            </ParagraphText>
            <SectionTitle className="Roadmap__title">
              Timeline for Projects Development
            </SectionTitle>
          </div>
          <div
            className="Roadmap__img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={RoadmapImg} alt="Hecodex" />
          </div>
        </div>
      </div>
    </RoadmapStyles>
  );
}

export default RoadmapSection;
