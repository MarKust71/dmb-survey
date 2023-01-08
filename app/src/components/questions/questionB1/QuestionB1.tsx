import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB1Props } from './QuestionB1.types';
import { useStyles } from './QuestionB1.styles';

export const QuestionB1: React.FC<QuestionB1Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'1. Czy kupuję w Internecie?'}</Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-b1" sx={{ paddingX: 2 }}>
        <FormControlLabel value={1} control={<Radio />} label={'Kupuje regularnie - kilka razy w miesiącu'} />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={'Kupuję sporadycznie - nie częściej niż raz w miesiącu'}
        />
        <FormControlLabel value={3} control={<Radio />} label={'Unikam zakupów w internecie'} />
      </RadioGroup>
    </ChapterContent>
  );
};
