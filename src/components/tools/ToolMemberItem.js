import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphTexts/ParagraphText';
import UtilityButton from '../buttons/UtilityButton';

const ToolMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      border-radius: 18px;
    }
  }
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: var(--mediumSlateBlue);
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  .teamMember__subtitle {
    font-weight: 200;
    font-size: 1.4rem;
    margin: 15px 0 15px 0;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      img {
        max-width: 420px;
        max-height: 300px;
      }
    }
  }
`;

function ToolMemberItem({ img, name, title, buttonTitle, Links }) {
  return (
    <ToolMemberItemStyles>
      <div className="teamMember__img">
        <img src={img} alt="hello" />
      </div>
      <ParagraphText className="teamMember__name">{name}</ParagraphText>
      <ParagraphText className="teamMember__subtitle">{title}</ParagraphText>
      <UtilityButton href={Links} className="hero__cta">
        {buttonTitle}
      </UtilityButton>
    </ToolMemberItemStyles>
  );
}

export default ToolMemberItem;
