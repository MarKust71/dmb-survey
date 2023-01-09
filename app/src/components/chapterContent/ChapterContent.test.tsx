import React from 'react';
import { render, screen } from '@testing-library/react';

import { ChapterContent } from './ChapterContent';

describe('ChapterContent', () => {
  test('renders', () => {
    render(<ChapterContent>qqq</ChapterContent>);
    const element = screen.getByText('ChapterContent');
    expect(element).toBeInTheDocument();
  });
});
