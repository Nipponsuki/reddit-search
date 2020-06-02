import React from 'react';
import styled from 'styled-components';
import TableItem from './TableItem';

const ITEMS = [
  { id: 1, text: 'Reactasdadadadadasdadadsadasd' },
  {
    id: 2,
    text:
      'Reactasdadadadadasdadadsadasdasdkjahdkahdakdhjsalkdjhadkljahdklajhdakljdhaskdjhakldj',
  },
  {
    id: 3,
    text:
      'Reactasdadadadadasdadadsadasdasdkjahdkahdakdhjsalkdjhadkljahdklajhdakljdhaskdjhakldjasdadasdadadasdasd',
  },
];

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
  return (
    <TableContainer>
      <TableHeader>
        <span>Link</span>
        <span>Notes</span>
      </TableHeader>
      {ITEMS.map((item) => (
        <TableItem key={item.id} item={item.text} />
      ))}
    </TableContainer>
  );
};

export default Table;
