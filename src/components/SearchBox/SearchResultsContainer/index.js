import React from 'react';
import styled from 'styled-components';

import { useOutsideClick } from 'hooks/useOutsideClick';
import SearchResult from '../SearchResult';

const ResultsContainer = styled.div`
  width: 100%;
  max-height: 200px;
  position: absolute;
  top: 30px;
  min-height: 20px;
  border-radius: 5px;
  border: 1px solid #a29bfe;
  box-shadow: 0 0 2px 1px #a29bfe44;
  margin-top: 10px;
  overflow-x: hidden;
  scrollbar-width: none;
  background: #ffffff;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const SearchResultsContainer = ({
  results,
  setAreResultsShown,
  setSearchQuery,
}) => {
  const dropdownRef = React.useRef();

  useOutsideClick(dropdownRef, () => {
    setAreResultsShown(false);
  });

  return (
    <>
      {results && (
        <ResultsContainer ref={dropdownRef}>
          {results.length > 0 &&
            results.map((result) => (
              <SearchResult
                key={result.data.id}
                result={result.data}
                setSearchQuery={setSearchQuery}
                setAreResultsShown={setAreResultsShown}
              />
            ))}
          {results.length === 0 && (
            <SearchResult result={{ title: 'No results' }} disabled />
          )}
        </ResultsContainer>
      )}
    </>
  );
};

export default SearchResultsContainer;
