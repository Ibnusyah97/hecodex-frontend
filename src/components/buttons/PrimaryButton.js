import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const ButtonsStyles = styled.a`
  display: inline-block;
  background: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  color: var(--white);
  font-size: 1.6rem;
  text-transform: capitalize;
  border-radius: 10px;
  font-weight: 500;
  border: 2px;
  border-color: var(--mediumSlateBlue);
  border-style: solid;
  &:hover {
    background-color: transparent;
    border-color: var(--mediumSlateBlue);
    border-style: solid;
    border-width: 2px;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--mediumSlateBlue)' : 'var(--white)'};
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
  }
`;

function PrimaryButton({ children, buttonType, ...rest }) {
  return (
    <>
      <ButtonsStyles as={buttonType} {...rest}>
        {children}
      </ButtonsStyles>
    </>
  );
}

export default PrimaryButton;
