import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../components/Header';

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe('Header Component', () => {
  it('should be able to render an Header', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText('Logo')).toBeTruthy();
  });

  it('should be able to navigate to TAG home page', () => {
    render(<Header />);

    expect(document.querySelector('a')?.getAttribute('href')).toBe(
      'https://site.taglivros.com',
    );
  });

  it('should not be able to see home link', async () => {
    const { queryByText } = render(<Header />);

    expect(queryByText('Home')).not.toBeTruthy();
  });

  it('should be able to see home link', () => {
    window.history.pushState({}, 'Book Details', '/book-details?id=32ads32a');

    const { getByText } = render(<Header />);

    expect(getByText('Home')).toBeVisible();
  });
});
