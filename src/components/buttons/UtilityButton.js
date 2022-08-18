import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const ButtonsStyles = styled.a`
  display: inline-block;
  background-color: transparent;
  padding: 1rem 1.5rem;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--mediumSlateBlue)' : 'var(--white)'};
  border-color: var(--mediumSlateBlue);
  border-style: solid;
  border-width: 2px;
  font-size: 1.3rem;
  text-transform: capitalize;
  border-radius: 10px;
  font-weight: 500;
  &:hover {
    background-color: var(--mediumSlateBlue);
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--white)' : 'var(--white)'};
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
  }
`;

function UtilityButton({ children, buttonType, ...rest }) {
  return (
    <>
      <ButtonsStyles as={buttonType} {...rest}>
        {children}
      </ButtonsStyles>
    </>
  );
}

export default UtilityButton;
