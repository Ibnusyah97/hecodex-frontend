import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import hecodust from '../assets/images/hecodust.png';

const HecodustStyles = styled.div`
  padding: 10rem 0;
  .hecodust__wrapper {
    padding: 5rem 3rem;
    border-radius: 22px;
    max-width: 700px;
    margin: 0 auto;
    padding: 20 50px 0 50px;
    background: var(--mediumSlateBlue);
    text-align: center;
  }
  .hecodust__title {
    margin-bottom: 0.2rem;
    color: var(--lightBlue_1);
  }
  .hecodust__subtitle {
    color: var(--lightBlue_1);
    margin-bottom: 2rem;
  }
  .hecodust__img {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      font-size: 1.4rem;
      max-width: 1200px;
    }
  }
  @media only screen and (max-width: 768px) {
    .hecodust__wrapper {
      padding: 3rem 0rem;
    }
    .hecodust__img {
      flex-direction: column;
      img {
        font-size: 1.4rem;
        max-width: 1200px;
      }
    }
  }
`;

function HecodustSection() {
  return (
    <HecodustStyles>
      <div className="container">
        <div
          className="hecodust__wrapper"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <SectionTitle className="hecodust__title">
            HecoDust Mechanism
          </SectionTitle>
          <ParagraphText className="hecodust__subtitle">
            Simple flow for Hecodust systems
          </ParagraphText>
          <div className="hecodust__img">
            <img src={hecodust} alt="hello" />
          </div>
        </div>
      </div>
    </HecodustStyles>
  );
}

export default HecodustSection;
