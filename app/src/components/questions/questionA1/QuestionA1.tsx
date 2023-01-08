import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionA1Props } from './QuestionA1.types';
import { useStyles } from './QuestionA1.styles';

export const QuestionA1: React.FC<QuestionA1Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'1. W pracy komunikuję się:'}</Typography>

      <Box mb={2} />

      <FormGroup sx={{ paddingX: 2 }}>
        <FormControlLabel control={<Checkbox />} label={'Za pomocą wideokonferencji internetowych'} />
        <FormControlLabel control={<Checkbox />} label={'Pisemnie (SMS, email albo komunikatory internetowe)'} />
        <FormControlLabel control={<Checkbox />} label={'Telefonicznie'} />
      </FormGroup>
    </ChapterContent>
  );
};
