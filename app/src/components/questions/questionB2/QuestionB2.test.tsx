import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB2 } from './QuestionB2';

describe('QuestionB2', () => {
  test('renders', () => {
    render(<QuestionB2 />);
    const element = screen.getByText('QuestionB2');
    expect(element).toBeInTheDocument();
  });
});
