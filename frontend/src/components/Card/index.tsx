import React from 'react';

import { Container } from './style';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }: CardProps) => (
  <Container data-testid="card">{children}</Container>
);

export default Card;
