import React from 'react';
import styled from 'styled-components';

import Flexbox from 'components/Flexbox';
import SearchIcon from 'components/Icons/Search';
import SearchResultsContainer from './SearchResultsContainer';

const RESULTS = [
  { id: 1, text: 'Reactasdadadadadasdadadsadasdasdadadadadadadadadadad' },
];

const SearchBoxContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  transition: all 0.3s ease;
  border-right-color: rgba(0, 0, 0, 0);
  padding: 0 10px;
  font-size: 14px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }

  &:focus {
    outline: none;
    border-color: #a29bfe;
    border-right-color: rgba(0, 0, 0, 0);
  }
`;

const SearchAction = styled.div`
  width: 40px;
  background: #a29bfe;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  svg {
    &:hover {
      transform: scale(1);
    }
  }
`;
const SearchBox = () => {
  const [areResultsShown, setAreResultsShown] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const showResults = () => setAreResultsShown(true);
  const hideResults = () => setAreResultsShown(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    if (value.trim().length > 0) {
      showResults();
      return;
    }

    if (value.trim().length === 0) {
      hideResults();
    }
  };
  return (
    <Flexbox
      position="relative"
      margin="50px auto"
      align="center"
      direction="column"
      width="300px"
    >
      <SearchBoxContainer>
        <SearchInput
          placeholder="Subreddit"
          onChange={handleChange}
          value={searchQuery}
          type="text"
          name="search"
        />
        <SearchAction>
          <SearchIcon />
        </SearchAction>
      </SearchBoxContainer>
      {areResultsShown && <SearchResultsContainer results={RESULTS} />}
    </Flexbox>
  );
};

export default SearchBox;
