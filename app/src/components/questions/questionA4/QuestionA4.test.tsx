import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionA4 } from './QuestionA4';

describe('QuestionA4', () => {
  test('renders', () => {
    render(<QuestionA4 />);
    const element = screen.getByText('QuestionA4');
    expect(element).toBeInTheDocument();
  });
});
