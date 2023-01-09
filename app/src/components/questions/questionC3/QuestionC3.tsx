import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionC3Props } from './QuestionC3.types';
import { useStyles } from './QuestionC3.styles';

export const QuestionC3: React.FC<QuestionC3Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'3. Czy moje dochody mnie satysfakcjonują?'}</Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-c3" sx={{ paddingX: 2 }}>
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={'Moje źródła dochodu są dla mnie wystarczające, nie boję się ich utracić'}
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={'Dodatkowe dochody przydałoby mi się, ale nie wiem, jak je znaleźć'}
        />
        <FormControlLabel value={3} control={<Radio />} label={'Poszukuję czegoś dodatkowego'} />
      </RadioGroup>
    </ChapterContent>
  );
};
