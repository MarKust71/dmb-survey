import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB3Props } from './QuestionB3.types';
import { useStyles } from './QuestionB3.styles';

export const QuestionB3: React.FC<QuestionB3Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">
        {
          // eslint-disable-next-line max-len
          '3. Czy oceniam internetowych sprzedawców i kupowane produkty? (np. wypełniając ankiety albo z użyciem serwisów, jak Opineo itp., albo polecając je znajomym)'
        }
      </Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-b1" sx={{ paddingX: 2 }}>
        <FormControlLabel value={1} control={<Radio />} label={'Zawsze albo bardzo często'} />
        <FormControlLabel value={2} control={<Radio />} label={'Sporadycznie'} />
        <FormControlLabel value={3} control={<Radio />} label={'Nie zdarza się'} />
      </RadioGroup>
    </ChapterContent>
  );
};
