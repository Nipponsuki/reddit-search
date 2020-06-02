import React from 'react';
import styled from 'styled-components';
import SearchResult from '../SearchResult';

const ResultsContainer = styled.div`
  width: 100%;
  max-height: 200px;
  position: absolute;
  top: 30px;
  min-height: 20px;
  border-radius: 5px;
  border: 1px solid #a29bfe;
  box-shadow: 0 0 2px 1px #ccc;
  margin-top: 10px;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const SearchResultsContainer = ({ results }) => {
  return (
    <>
      {results && (
        <ResultsContainer>
          {results.length > 0 &&
            results.map((result) => (
              <SearchResult key={result.id} result={result.text} />
            ))}
          {results.length === 0 && (
            <SearchResult result="No results" disabled />
          )}
        </ResultsContainer>
      )}
    </>
  );
};

export default SearchResultsContainer;
