import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: 60px auto;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    margin-top: 10px;
    margin-left: 16px;
    color: #1e1e1e;
  }

  img {
    margin-top: 10px;
    margin-left: 16px;
    width: 400px;
    height: 400px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02, 1.02);
    }
  }
`;
export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 20px;
`;

export const TagDescriptions = styled.div`
  display: flex;
  align-items: center;
`;

export const BookDescription = styled.div`
  margin-left: 20px;
  line-height: 50px;
  color: #1e1e1e;

  h2 {
    font-weight: 400;
  }
`;

export const GoodReadsRating = styled.div`
  line-height: 40px;
  color: #1e1e1e;

  h2 {
    font-weight: 400;
  }
`;
