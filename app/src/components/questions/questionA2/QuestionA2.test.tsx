import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionA2 } from './QuestionA2';

describe('QuestionA2', () => {
  test('renders', () => {
    render(<QuestionA2 />);
    const element = screen.getByText('QuestionA2');
    expect(element).toBeInTheDocument();
  });
});
