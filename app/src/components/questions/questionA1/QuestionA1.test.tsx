import React from 'react';
import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { QuestionA1 } from './QuestionA1';

describe('QuestionA1', () => {
  test('renders', () => {
    const { control } = useForm();
    render(<QuestionA1 control={control} />);
    const element = screen.getByText('QuestionA1');
    expect(element).toBeInTheDocument();
  });
});
