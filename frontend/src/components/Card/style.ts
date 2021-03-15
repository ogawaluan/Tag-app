import styled from 'styled-components';
import { CardContent } from '../../pages/BookList/style';

export const Container = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.2s;

  img {
    border: 1px solid #e5e5e5;
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-10px);
    border: 3px solid #e5e5e5;
    background-image: linear-gradient(to top left, #009bbf, #2c5082);

    img {
      border: 3px solid #e5e5e5;
    }

    ${CardContent} {
      h1,
      h2 {
        color: #fff;
      }
    }
  }
`;
