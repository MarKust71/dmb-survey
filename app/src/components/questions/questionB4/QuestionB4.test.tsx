import React from 'react';
import { render, screen } from '@testing-library/react';

import { QuestionB4 } from './QuestionB4';

describe('QuestionB4', () => {
  test('renders', () => {
    render(<QuestionB4 />);
    const element = screen.getByText('QuestionB4');
    expect(element).toBeInTheDocument();
  });
});
