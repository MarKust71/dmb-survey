import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB4Props } from './QuestionB4.types';
import { useStyles } from './QuestionB4.styles';

export const QuestionB4: React.FC<QuestionB4Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">
        {
          // eslint-disable-next-line max-len
          '4. Jak często internetowy sprzedawca wynagradza mnie za korzystanie z jego sklepu (dodatkowy opust, premia, podarunek)?'
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
