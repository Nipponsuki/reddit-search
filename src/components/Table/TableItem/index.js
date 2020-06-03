import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeItem } from 'store/bookmarksStore';
import StarIcon from 'components/Icons/Star';
import Flexbox from 'components/Flexbox';
import BinIcon from 'components/Icons/Bin';

const REDDIT_URL = `https://www.reddit.com`;

const TableItemContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eee;
  min-height: 100px;
  justify-content: space-between;
`;

const LinkAndStar = styled.div`
  width: 50%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: break-word;
`;
const NotesAndBin = styled.div`
  width: 50%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkToPost = styled.div`
  cursor: pointer;
  width: 300px;
  overflow: hidden;

  a {
    color: #a29bfe;
    text-decoration: none;
    font-size: 18px;
  }
`;

const Notes = styled.textarea`
  border: 1px solid #ccc;
  width: 80%;
  height: 80%;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid #a29bfe;
    box-shadow: 0 0 2px 1px #a29bfe44;
  }
`;

const TableItem = ({ item }) => {
  const [inFavorites, setInFavorites] = React.useState(false);
  const dispatch = useDispatch();

  const toggleFavorite = () => setInFavorites((prev) => !prev);

  return (
    <TableItemContainer>
      <LinkAndStar>
        <LinkToPost>
          <a
            href={`${REDDIT_URL}${item.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </LinkToPost>
        <Flexbox cursor="pointer" onClick={toggleFavorite}>
          <StarIcon isFavorited={inFavorites} />
        </Flexbox>
      </LinkAndStar>
      <NotesAndBin>
        <Notes />
        <Flexbox cursor="pointer" onClick={() => dispatch(removeItem(item))}>
          <BinIcon />
        </Flexbox>
      </NotesAndBin>
    </TableItemContainer>
  );
};

export default TableItem;
