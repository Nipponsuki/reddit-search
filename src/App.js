import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';

import SearchBox from 'components/SearchBox';
import Table from 'components/Table';
import Button from 'components/Button';
import Flexbox from 'components/Flexbox';

const AppWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
`;

const App = () => {
  const dispatch = useDispatch();
  return (
    <AppWrapper>
      <SearchBox />
      <Table />
      <Flexbox width="100%" justify="center" align="center" margin="10px 0 0 0">
        <Button onClick={() => dispatch(ActionCreators.undo())}>Undo</Button>
        <Button onClick={() => dispatch(ActionCreators.redo())}>Redo</Button>
      </Flexbox>
    </AppWrapper>
  );
};

export default App;
