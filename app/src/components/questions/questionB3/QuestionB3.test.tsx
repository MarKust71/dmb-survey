import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB3 } from './QuestionB3';

describe('QuestionB3', () => {
  test('renders', () => {
    render(<QuestionB3 />);
    const element = screen.getByText('QuestionB3');
    expect(element).toBeInTheDocument();
  });
});
