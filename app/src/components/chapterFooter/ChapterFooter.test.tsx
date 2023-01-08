import React from 'react';
import { render, screen } from '@testing-library/react';

import { ChapterFooter } from './ChapterFooter';

describe('ChapterFooter', () => {
  test('renders', () => {
    render(<ChapterFooter onClickPrev={() => null} onClickNext={() => null} />);
    const element = screen.getByText('ChapterFooter');
    expect(element).toBeInTheDocument();
  });
});
