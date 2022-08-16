import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const ButtonsStyles = styled.a`
  background: ${({ theme: { theme } }) =>
    theme === themeList.light
      ? 'var(--lightBlue_1)'
      : 'var(--mediumSlateBlue)'};
  padding: 0.5rem 1.8rem;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light
      ? 'var(--mediumSlateBlue)'
      : 'var(--lightBlue_1)'};
  font-size: 1.3rem;
  text-transform: capitalize;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  position: relative;
  cursor: pointer;
  border-radius: 50px;
  height: 25px;
  width: 105px;
  margin-right: 2rem;
  margin-left: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 2.1rem;
    margin-right: 1.2rem;
  }
`;

function SwapButton({ children, buttonType, ...rest }) {
  return (
    <>
      <ButtonsStyles as={buttonType} {...rest}>
        {children}
      </ButtonsStyles>
    </>
  );
}

export default SwapButton;
