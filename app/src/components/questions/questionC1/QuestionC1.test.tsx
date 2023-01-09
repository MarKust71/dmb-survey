import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionC1 } from './QuestionC1';

describe('QuestionC1', () => {
  test('renders', () => {
    render(<QuestionC1 />);
    const element = screen.getByText('QuestionC1');
    expect(element).toBeInTheDocument();
  });
});
