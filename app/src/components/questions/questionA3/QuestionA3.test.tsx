import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionA3 } from './QuestionA3';

describe('QuestionA3', () => {
  test('renders', () => {
    render(<QuestionA3 />);
    const element = screen.getByText('QuestionA3');
    expect(element).toBeInTheDocument();
  });
});
