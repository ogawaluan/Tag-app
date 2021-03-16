import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Title,
  Descriptions,
  TagDescriptions,
  BookDescription,
  GoodReadsRating,
} from './style';

interface Book {
  objectId: string;
  author: string;
  curator: string;
  name: string;
  pages: number;
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
  work_ratings_count: number;
}

const BookDetails: React.FC = () => {
  const [booksTag, setBooksTag] = useState<Book[]>([]);
  const [goodReadsReviews, setGoodReadsReviews] = useState<GoodReads[]>([]);

  const id = window.location.search;
  const idParsed = new URLSearchParams(id).toString().replace('id=', '');

  const findBook = booksTag.filter(bookTag => bookTag.objectId === idParsed);
  const findISBN = findBook.map(book => book.isbn).toString();
  const findGoodReadsRating = Number(
    goodReadsReviews.map(goodReadReview => goodReadReview.work_ratings_count)
  );

  useEffect(() => {
    async function loadBooksTag(): Promise<void> {
      const response = await fetch('./livros.json', {
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      setBooksTag(data.results);
    }

    loadBooksTag();
  }, []);

  useEffect(() => {
    api
      .get(`/book/review_counts.json?isbns=${findISBN}`)
      .then(response => {
        setGoodReadsReviews(response.data.books);
      })
      .catch(err => {
        console.log(err);
      });
  }, [findISBN]);

  return (
    <Container>
      <Header />

      <Content>
        {findBook.map(book => (
          <Title key={book.objectId}>
            <h1>{book.name}</h1>

            <img src={book.cover.url} alt={book.name} />
          </Title>
        ))}
        <Descriptions>
          {findBook.map(book => (
            <TagDescriptions key={book.objectId}>
              <BookDescription>
                <h2>
                  Autor(a):
                  <span> </span>
                  {book.author}
                </h2>
                <h2>
                  Mês/Ano Edição:
                  <span> </span>
                  {book.edition}
                </h2>
                <h2>
                  Curador(a):
                  <span> </span>
                  {book.curator}
                </h2>
                <h2>
                  Número de páginas:
                  <span> </span>
                  {book.pages}
                </h2>
                <h2>
                  Total de avaliações TAG:
                  <span> </span>
                  {book.totalRatings}
                </h2>
              </BookDescription>
            </TagDescriptions>
          ))}
          <GoodReadsRating>
            <h2>
              Total de avaliações GoodReads:
              <span> </span>
              {findGoodReadsRating}
            </h2>
          </GoodReadsRating>
        </Descriptions>
      </Content>
    </Container>
  );
};

export default BookDetails;
