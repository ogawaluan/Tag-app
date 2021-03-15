import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e5e5e5;
  background-image: linear-gradient(0deg, #009bbf, #2c5082);

  a {
    text-decoration: none;
    text-align: center;
    margin-right: 30px;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #fff;
      color: #009bbf;
    }
  }

  img {
    height: 100px;
    width: 100px;
    margin-left: 30px;
  }
`;
