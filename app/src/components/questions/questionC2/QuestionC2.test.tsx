import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionC2 } from './QuestionC2';

describe('QuestionC2', () => {
  test('renders', () => {
    render(<QuestionC2 />);
    const element = screen.getByText('QuestionC2');
    expect(element).toBeInTheDocument();
  });
});
