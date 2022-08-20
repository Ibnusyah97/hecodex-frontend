import React from 'react';
import styled from 'styled-components';
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our Features</SectionTitle>
        <div className="services__items">
          <div data-aos="fade-up" data-aos-duration="500">
            <ServiceItem
              icon={<RiImageEditLine />}
              title="Most Reliable"
              desc="Advanced tools with high innovation. never even existed before."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <ServiceItem
              icon={<MdPhotoCamera />}
              title="High Security"
              desc="High level of security with advanced encryption algorithm in every module."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <ServiceItem
              icon={<RiHeartsFill />}
              title="All in One Platform"
              desc="Everything you need is here for free;for developers and users."
            />
          </div>
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
