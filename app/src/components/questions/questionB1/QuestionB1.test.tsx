import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB1 } from './QuestionB1';

describe('QuestionB1', () => {
  test('renders', () => {
    render(<QuestionB1 />);
    const element = screen.getByText('QuestionB1');
    expect(element).toBeInTheDocument();
  });
});
