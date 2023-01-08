import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB7 } from './QuestionB7';

describe('QuestionB7', () => {
  test('renders', () => {
    render(<QuestionB7 />);
    const element = screen.getByText('QuestionB7');
    expect(element).toBeInTheDocument();
  });
});
