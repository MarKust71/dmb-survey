import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB6 } from './QuestionB6';

describe('QuestionB6', () => {
  test('renders', () => {
    render(<QuestionB6 />);
    const element = screen.getByText('QuestionB6');
    expect(element).toBeInTheDocument();
  });
});
