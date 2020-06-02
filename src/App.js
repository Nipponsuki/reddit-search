import React from 'react';
import styled from 'styled-components';

import SearchBox from 'components/SearchBox';

const AppWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border: 1px solid red;
  height: 100vh;
`;

const App = () => {
  return (
    <AppWrapper>
      <SearchBox />
    </AppWrapper>
  );
};

export default App;
