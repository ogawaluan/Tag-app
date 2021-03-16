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
    goodRead => goodRead.average_rating
  );

  const orderedByTagEdition = booksTag.slice().sort((a, b) => {
    const parseEditionA = a.edition.split(' de ').reverse();
    const parseEditionB = b.edition.split(' de ').reverse();

    switch (parseEditionA[1] && parseEditionB[1]) {
      case "Janeiro":
        parseEditionA[1] = "01";
        parseEditionB[1] = "01";
        break;
      case "Fevereiro":
        parseEditionA[1] = "02";
        parseEditionB[1] = "02";
        break;
      case "Março":
        parseEditionA[1] = "03";
        parseEditionB[1] = "03";
        break;
      case "Abril":
        parseEditionA[1] = "04";
        parseEditionB[1] = "04";
        break;
      case "Maio":
        parseEditionA[1] = "05";
        parseEditionB[1] = "05";
        break;
      case "Junho":
        parseEditionA[1] = "06";
        parseEditionB[1] = "06";
        break;
      case "Julho":
        parseEditionA[1] = "07";
        parseEditionB[1] = "07";
        break;
      case "Agosto":
        parseEditionA[1] = "08";
        parseEditionB[1] = "08";
        break;
      case "Setembro":
        parseEditionA[1] = "09";
        parseEditionB[1] = "09";
        break;
      case "Outubro":
        parseEditionA[1] = "10";
        parseEditionB[1] = "10";
        break;
      case "Novembro":
        parseEditionA[1] = "11";
        parseEditionB[1] = "11";
        break;
      case "Dezembro":
        parseEditionA[1] = "12";
        parseEditionB[1] = "12";
        break;
      default:
        null;
        break;
    }

    const joinEditionA = parseEditionA.join('-');
    const joinEditionB = parseEditionB.join('-');

    const editionA = new Date(joinEditionA);
    const editionB = new Date(joinEditionB);

    return editionA > editionB ? -1 : 1;
  });

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

  const fetchData = useCallback(async () => {
    const url = '/book/review_counts.json';
    await api
      .get(url, { params: { isbns: ISBNSTag } })
      .then(response => {
        if (response.status === 200) setGoodReadsReviews(response.data.books);
      })
      .catch(error => {
        console.log(error);
      });
  }, [ISBNSTag]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      <Content data-testid="content">
        {orderedByTagEdition.map((bookTag, index) =>
          findISBNGoodReads.includes(bookTag.isbn) ? (
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
                        {findGoodReadsAverageRating[index]}
                      </h2>

                      <h2>{bookTag.edition}</h2>
                    </CardDescription>
                  </CardContent>
                </Container>
              </StyledLink>
            </Card>
          ) : null
        )}
      </Content>
    </>
  );
};

export default BookList;
