import React, { useCallback, useEffect, useState } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import Card from '../../components/Card';
import {
  Content,
  StyledLink,
  Container,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from './style';

interface Book {
  objectId: string;
  name: string;
  isbn: string;
  cover: {
    url: string;
  };
  numRatings: number;
  totalRatings: number;
  edition: string;
}

interface GoodReads {
  id: number;
  isbn13: string;
  average_rating: string;
}

const BookList: React.FC = () => {
  const [booksTag, setBooksTag] = useState<Book[]>([]);
  const [goodReadsReviews, setGoodReadsReviews] = useState<GoodReads[]>([]);

  const ISBNSTag = booksTag.map(bookTag => bookTag.isbn);
  const findISBNGoodReads = goodReadsReviews.map(goodRead => goodRead.isbn13);
  const findGoodReadsAverageRating = goodReadsReviews.map(
    goodRead => goodRead.average_rating,
  );

  useEffect(() => {
    async function loadBooksTag(): Promise<void> {
      const data = await fetch('./livros.json', {
        headers: {
          Accept: 'application/json',
        },
      }).then(response => response.json());

      setBooksTag(data.results);
    }

    loadBooksTag();
  }, []);

  // useEffect(() => {
  //   async function loadReviews() {
  //     const response = await api.get('/book/review_counts.json', {
  //       params: {
  //         isbns: ISBNSTag,
  //       },
  //     });

  //     setGoodReadsReviews(response.data.books);
  //   }

  //   loadReviews();
  // }, [ISBNSTag]);

  const fetchData = useCallback(async () => {
    const url = '/book/review_counts.json';
    const response = await api.get(url, { params: { isbns: ISBNSTag } });
    setGoodReadsReviews(response.data.books);
  }, [ISBNSTag]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      <Content data-testid="content">
        {booksTag.map((bookTag, index) => (
          <Card key={bookTag.objectId}>
            <StyledLink
              to={{
                pathname: '/book-details',
                search: `?id=${bookTag.objectId}`,
              }}
            >
              <Container>
                <CardImage>
                  <img src={bookTag.cover.url} alt={bookTag.name} />
                </CardImage>

                <CardContent>
                  <CardTitle>
                    <h1>{bookTag.name}</h1>
                  </CardTitle>

                  <CardDescription>
                    <h2>
                      Tag Rating:
                      <span> </span>
                      {(bookTag.totalRatings / bookTag.numRatings).toFixed(2)}
                    </h2>
                    <h2>
                      GoodReads Rating:
                      <span> </span>
                      {findISBNGoodReads.includes(bookTag.isbn)
                        ? findGoodReadsAverageRating[index]
                        : ' 0.00'}
                    </h2>

                    <h2>{bookTag.edition}</h2>
                  </CardDescription>
                </CardContent>
              </Container>
            </StyledLink>
          </Card>
        ))}
      </Content>
    </>
  );
};

export default BookList;
