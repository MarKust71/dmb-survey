import React from 'react';
import { render, screen } from '@testing-library/react';

import { Survey } from './Survey';

describe('Survey', () => {
  test('renders', () => {
    render(<Survey />);
    const element = screen.getByText('Survey');
    expect(element).toBeInTheDocument();
  });
});
