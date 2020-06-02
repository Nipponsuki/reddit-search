import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { addItem } from 'store/bookmarksStore';

const ResultContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  height: 20px;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover {
    background: #a29bfe44;
  }
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SearchResult = ({
  result,
  disabled,
  setAreResultsShown,
  setSearchQuery,
}) => {
  const dispatch = useDispatch();
  const addToBookmarks = (item) => {
    dispatch(addItem(item));
    setAreResultsShown(false);
    setSearchQuery('');
  };
  return (
    <ResultContainer disabled={disabled} onClick={() => addToBookmarks(result)}>
      <span>{result.title}</span>
    </ResultContainer>
  );
};

export default SearchResult;
