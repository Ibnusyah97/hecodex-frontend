import React from 'react';
import styled from 'styled-components';

const RoadmapMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    margin-left: 15rem;
    img {
      min-width: 420px;
      max-width: 1920px;
      border-radius: 18px;
    }
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      margin-left: 0rem;
      img {
        min-width: 300px;
        max-width: 320px;
      }
    }
  }
`;

function RoadmapMemberItem({ img }) {
  return (
    <RoadmapMemberItemStyles>
      <div className="teamMember__img">
        <img src={img} alt="Roadmap" />
      </div>
    </RoadmapMemberItemStyles>
  );
}

export default RoadmapMemberItem;
