import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { bookmarksSelector } from 'store/bookmarksStore';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import TableItem from './TableItem';
import NoItems from './NoItems';

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  span {
    padding: 10px 30px;
    flex: 50%;
    font-weight: bold;
    font-size: 16px;
  }
`;

const Table = () => {
  const {
    present: { items: bookmarks },
  } = useSelector(bookmarksSelector);
  const { count } = useInfiniteScroll(bookmarks && bookmarks.length);

  return (
    <TableContainer>
      <TableHeader>
        <span>Link</span>
        <span>Notes</span>
      </TableHeader>
      {bookmarks && bookmarks.length === 0 && <NoItems />}
      {bookmarks &&
        bookmarks
          .slice(0, count)
          .map((item) => <TableItem key={item.id} item={item} />)}
    </TableContainer>
  );
};

export default Table;
