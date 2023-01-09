import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionA2Props } from './QuestionA2.types';
import { useStyles } from './QuestionA2.styles';

export const QuestionA2: React.FC<QuestionA2Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'2. Prywatnie porozumiewam się:'}</Typography>

      <Box mb={2} />

      <FormGroup sx={{ paddingX: 2 }}>
        <FormControlLabel control={<Checkbox />} label={'Za pomocą wideokonferencji internetowych'} />
        <FormControlLabel control={<Checkbox />} label={'Pisemnie (SMS, email albo komunikatory internetowe)'} />
        <FormControlLabel control={<Checkbox />} label={'Telefonicznie'} />
      </FormGroup>
    </ChapterContent>
  );
};
