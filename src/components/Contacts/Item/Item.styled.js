import styled from '@emotion/styled';

export const TodoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  &:hover,
  &:focus {
    background-color: #449cf4;
    border-color: #449cf4;
    color: white;
  }
`;
