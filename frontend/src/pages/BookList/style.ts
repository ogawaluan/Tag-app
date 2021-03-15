import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.div`
  img {
    width: 200px;
    height: 200px;
    margin-top: 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  text-align: center;
  color: #1e1e1e;
  line-height: 32px;

  h1 {
    width: 300px;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    line-height: 35px;
  }
`;

export const CardTitle = styled.div``;

export const CardDescription = styled.div``;
