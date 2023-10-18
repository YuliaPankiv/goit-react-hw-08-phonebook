import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style-type: none;
  padding: 0;
`;
