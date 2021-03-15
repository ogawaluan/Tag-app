import React from 'react';
import { render } from '@testing-library/react';

import Card from '../../components/Card';

describe('Card Component', () => {
  it('should be able to render', () => {
    const { getByTestId } = render(
      <Card>
        <div />
      </Card>,
    );

    expect(getByTestId('card')).toBeTruthy();
  });
});
