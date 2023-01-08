import React from 'react';
import { render, screen } from '@testing-library/react';

import { ChapterTitle } from './ChapterTitle';

describe('ChapterTitle', () => {
  test('renders', () => {
    render(<ChapterTitle>{'xx'}</ChapterTitle>);
    const element = screen.getByText('ChapterTitle');
    expect(element).toBeInTheDocument();
  });
});
