import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a29bfe;
  color: #fff;
  font-size: 16px;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(0, 0, 0, 0);
  &:hover {
    border-color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
