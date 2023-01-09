import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB5Props } from './QuestionB5.types';
import { useStyles } from './QuestionB5.styles';

export const QuestionB5: React.FC<QuestionB5Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">
        {
          // eslint-disable-next-line max-len
          '5. Czy zdarza mi się zwracać zakupione produkty, kiedy jestem z nich niezadwolona?'
        }
      </Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-b1" sx={{ paddingX: 2 }}>
        <FormControlLabel value={1} control={<Radio />} label={'Tak, często'} />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={'Zdarza się, ale zwykle jest z tym związane wiele formalności albo dodatkowych kosztów'}
        />
        <FormControlLabel value={3} control={<Radio />} label={'Nigdy nie zwracam zakupów'} />
      </RadioGroup>
    </ChapterContent>
  );
};
