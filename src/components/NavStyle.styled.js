import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  // margin: auto;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  &:hover {
    scale: 1.2;
    color: white;
    transition-duration: 0.1s;

`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 35px;
  list-style-type: none;
`;
export const Item = styled.li`
  display: flex;
  padding: 5px;
  border-radius: 6px;
  box-shadow: -1px 2px 17px 5px #080604, 2px 2px 20px 0px rgba(13, 2, 15, 12.19);  transition-duration: 0.4s;
  background-color: #c2d4f9a1;

   &:hover, :active{
    background-color: #ff4500b8;
    scale: 1.2;
    box-shadow: -1px 2px 6px 4px #080604, 2px 2px 2px 0px rgba(13, 2, 15, 12.19);
    transition-duration: 0.1s;
    
`;
