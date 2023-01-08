import React from 'react';
import { render, screen } from '@testing-library/react';

import { ChapterContainer } from './ChapterContainer';

describe('ChapterContainer', () => {
  test('renders', () => {
    render(<ChapterContainer>test</ChapterContainer>);
    const element = screen.getByText('ChapterContainer');
    expect(element).toBeInTheDocument();
  });
});
