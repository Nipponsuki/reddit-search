import React from 'react';
import styled from 'styled-components';

import SearchBox from 'components/SearchBox';
import Table from 'components/Table';

const AppWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
`;

const App = () => {
  return (
    <AppWrapper>
      <SearchBox />
      <Table />
    </AppWrapper>
  );
};

export default App;
