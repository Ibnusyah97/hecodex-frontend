import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import ToolMemberItem from './ToolMemberItem';
// team member images
import utility1 from '../../assets/images/hecoswap.jpg';
import utility2 from '../../assets/images/hecopool.jpg';
import utility3 from '../../assets/images/hecostake.jpg';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 8.5rem;
    }
  }
`;

function ToolSection() {
  return (
    <TeamSectionStyles id="tools">
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Our Vision Products
            </ParagraphText>
            <SectionTitle className="team__title">
              The best tools now available
            </SectionTitle>
          </div>
          <div className="team__members">
            <div data-aos="fade-up" data-aos-duration="2200">
              <ToolMemberItem
                img={utility1}
                name="HecoSwap"
                title="Trade any tokens an instant with a smart routers"
                buttonTitle="Swap Now"
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="2900">
              <ToolMemberItem
                img={utility2}
                name="HecoPool"
                title="Become a liquidity provider to get rewards"
                buttonTitle="Add Pool"
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="3600">
              <ToolMemberItem
                img={utility3}
                name="HecoStake"
                title="Stake your Hecodex token to get rewards on BUSD"
                buttonTitle="Stake Now"
              />
            </div>
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default ToolSection;
