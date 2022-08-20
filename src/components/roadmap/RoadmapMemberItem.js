import React from 'react';
import styled from 'styled-components';

const RoadmapMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      min-width: 420px;
      max-width: 1520px;
    }
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      flex-direction: column;
      img {
        margin: 0;
        max-width: 270px;
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
