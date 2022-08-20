import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import RoadmapMemberItem from './RoadmapMemberItem';
// Roadmap member images
import roadmap from '../../assets/images/roadmap.png';

const RoadmapSectionStyles = styled.div`
  padding: 10rem 0;
  .Roadmap__wrapper {
    display: flex;
    gap: 1rem;
  }
  .Roadmap__info {
    max-width: 250px;
  }
  .Roadmap__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .Roadmap__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: 5rem;
  }
  .Roadmap__title {
    margin-bottom: 1rem;
    font-weight: 600;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--white)'};
    text-transform: capitalize;
  }
  @media only screen and (max-width: 790px) {
    .Roadmap__wrapper {
      flex-direction: column;
      text-align: center;
      margin-right: 3rem;
    }
    .Roadmap__info {
      margin: 0 auto;
    }
    .Roadmap__members {
      flex-direction: column;
    }
  }
`;

function RoadmapSection() {
  return (
    <RoadmapSectionStyles id="roadmap">
      <div className="container">
        <div className="Roadmap__wrapper">
          <div
            className="Roadmap__info"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <ParagraphText className="Roadmap__subtitle">
              Our Roadmap
            </ParagraphText>
            <SectionTitle className="Roadmap__title">
              Timeline for projects development
            </SectionTitle>
          </div>
          <div className="Roadmap__members">
            <div data-aos="fade-up" data-aos-duration="1200">
              <RoadmapMemberItem img={roadmap} />
            </div>
          </div>
        </div>
      </div>
    </RoadmapSectionStyles>
  );
}

export default RoadmapSection;
