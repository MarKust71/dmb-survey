import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionC1Props } from './QuestionC1.types';
import { useStyles } from './QuestionC1.styles';

export const QuestionC1: React.FC<QuestionC1Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'1. Liczba moich źródeł dochodów:'}</Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-c3" sx={{ paddingX: 2 }}>
        <FormControlLabel value={1} control={<Radio />} label={'Mam jedno źródło dochodu'} />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={'Mam jedno podstawowe i drugie, zapasowe źródło dochodu'}
        />
        <FormControlLabel value={3} control={<Radio />} label={'Mam kilka źródeł dochodu'} />
        <FormControlLabel
          value={3}
          control={<Radio />}
          label={'Nie potrzebuję źródeł dochodu, ktoś inny mnie utrzymuje'}
        />
      </RadioGroup>
    </ChapterContent>
  );
};
