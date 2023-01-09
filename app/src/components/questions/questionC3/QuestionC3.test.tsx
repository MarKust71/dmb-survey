import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionC3 } from './QuestionC3';

describe('QuestionC3', () => {
  test('renders', () => {
    render(<QuestionC3 />);
    const element = screen.getByText('QuestionC3');
    expect(element).toBeInTheDocument();
  });
});
