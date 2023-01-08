import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB6Props } from './QuestionB6.types';
import { useStyles } from './QuestionB6.styles';

export const QuestionB6: React.FC<QuestionB6Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">
        {
          // eslint-disable-next-line max-len
          '6. Czy zdarza mi się doradzić/odradzić komuś jakiś produkt albo sprzedawcę, jeśli byłam z zakupu zadowolona albo niezadowolona?'
        }
      </Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-b1" sx={{ paddingX: 2 }}>
        <FormControlLabel value={1} control={<Radio />} label={'Tak, często'} />
        <FormControlLabel value={2} control={<Radio />} label={'Zdarza się'} />
        <FormControlLabel value={3} control={<Radio />} label={'Nigdy nie dzielę się takimi informacjami'} />
      </RadioGroup>
    </ChapterContent>
  );
};
