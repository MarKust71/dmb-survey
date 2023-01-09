import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionB2Props } from './QuestionB2.types';
import { useStyles } from './QuestionB2.styles';

export const QuestionB2: React.FC<QuestionB2Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'2. Co kupuję w Internecie?'}</Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-b1" sx={{ paddingX: 2 }}>
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={'Nie mam preferencji - kupuję zarówno towary, jak i usługi'}
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={'Tylko określone rodzaje towarów (np. odzież, obuwie, kosmetyki itp.)'}
        />
        <FormControlLabel
          value={3}
          control={<Radio />}
          label={'Tylko określone usługi (np. bilety, rezerwacje imprez, rezerwacje wizyt lekarskich)'}
        />
        <FormControlLabel value={4} control={<Radio />} label={'Trudno powiedzieć'} />
        <FormControlLabel value={5} control={<Radio />} label={'Unikam zakupów w Internecie'} />
      </RadioGroup>
    </ChapterContent>
  );
};
