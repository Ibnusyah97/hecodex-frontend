import React from 'react';
import styled from 'styled-components';
import Hecodex from '../assets/images/logo.png';

const LogoStyles = styled.div`
  max-width: 100px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
        <img src={Hecodex} alt="Hecodex" />
    </LogoStyles>
  );
}