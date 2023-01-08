import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB7Props } from './QuestionB7.types';
import { useStyles } from './QuestionB7.styles';

export const QuestionB7: React.FC<QuestionB7Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">
        {
          // eslint-disable-next-line max-len
          '7. Jak często internetowy sprzedawca wynagradza mnie za polecenie jego sklepu lub produktu (dodatkowy opust, premia, podarunek)?'
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
