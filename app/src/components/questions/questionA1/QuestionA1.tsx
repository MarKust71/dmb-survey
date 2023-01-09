import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme } from '@mui/material';
import { Controller } from 'react-hook-form';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionA1Props } from './QuestionA1.types';
import { useStyles } from './QuestionA1.styles';

export const QuestionA1: React.FC<QuestionA1Props> = ({ control }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'1. W pracy komunikuję się:'}</Typography>

      <Box mb={2} />

      <FormGroup sx={{ paddingX: 2 }}>
        <FormControlLabel
          control={
            <Controller name={'checkboxA1.0'} control={control} render={({ field }) => <Checkbox {...field} />} />
          }
          label={'Za pomocą wideokonferencji internetowych'}
        />
        <FormControlLabel
          control={
            <Controller name={'checkboxA1.1'} control={control} render={({ field }) => <Checkbox {...field} />} />
          }
          label={'Pisemnie (SMS, email albo komunikatory internetowe)'}
        />
        <FormControlLabel
          control={
            <Controller name={'checkboxA1.2'} control={control} render={({ field }) => <Checkbox {...field} />} />
          }
          label={'Telefonicznie'}
        />
      </FormGroup>
    </ChapterContent>
  );
};
