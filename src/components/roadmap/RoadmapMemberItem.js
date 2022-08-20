import React from 'react';
import styled from 'styled-components';

const RoadmapMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    margin-left: 20rem;
    img {
      min-width: 420px;
      max-width: 1920px;
      max-width: 3920px;
      border-radius: 18px;
    }
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      margin-left: 0;
      img {
        max-width: 480px;
        max-height: 600px;
      }
    }
  }
`;

function RoadmapMemberItem({ img }) {
  return (
    <RoadmapMemberItemStyles>
      <div className="teamMember__img">
        <img src={img} alt="hello" />
      </div>
    </RoadmapMemberItemStyles>
  );
}

export default RoadmapMemberItem;
