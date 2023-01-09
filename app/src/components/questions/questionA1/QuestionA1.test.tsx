import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionA1 } from './QuestionA1';

describe('QuestionA1', () => {
  test('renders', () => {
    render(<QuestionA1 />);
    const element = screen.getByText('QuestionA1');
    expect(element).toBeInTheDocument();
  });
});
