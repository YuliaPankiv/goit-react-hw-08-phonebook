import styled from '@emotion/styled';
export const Container = styled.div`
  max-width: 300px;
  text-align: center;
  min-width: 300px;
  margin: 12% auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  opacity: 0.96;
  & h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  & h2 {
    color: #333;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const Header = styled.header`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: #020a12bd;
  > nav {
    display: flex;
    gap: 25px;
  }
`;
