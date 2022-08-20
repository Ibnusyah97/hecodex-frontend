import React from 'react';
import styled from 'styled-components';

const RoadmapMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      min-width: 420px;
      max-width: 1520px;
      border-radius: 18px;
    }
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      img {
        max-width: 620px;
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
