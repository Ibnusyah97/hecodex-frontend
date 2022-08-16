import React from 'react';
import styled from 'styled-components';
import HecodexLight from '../assets/images/logo.png';

const LogoStyles = styled.div`
  max-width: 125px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    max-width: 110px;
  }
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
      <img src={HecodexLight} alt="Hecodex" />
    </LogoStyles>
  );
}
