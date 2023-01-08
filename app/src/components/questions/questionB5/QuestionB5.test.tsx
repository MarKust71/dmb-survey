import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB5 } from './QuestionB5';

describe('QuestionB5', () => {
  test('renders', () => {
    render(<QuestionB5 />);
    const element = screen.getByText('QuestionB5');
    expect(element).toBeInTheDocument();
  });
});
