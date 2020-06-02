import React from 'react';
import styled from 'styled-components';

import DataIcon from 'components/Icons/Data';

const NoItemsContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid #eee;

  svg {
    &:hover {
      transform: scale(1);
    }
  }
  span {
    color: #ccc;
    font-size: 18px;
  }
`;

const NoItems = () => {
  return (
    <NoItemsContainer>
      <DataIcon />
      <span>No data</span>
    </NoItemsContainer>
  );
};

export default NoItems;
