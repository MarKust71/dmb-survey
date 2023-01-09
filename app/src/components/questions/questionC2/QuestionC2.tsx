import React from 'react';
import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionC2Props } from './QuestionC2.types';
import { useStyles } from './QuestionC2.styles';

export const QuestionC2: React.FC<QuestionC2Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'2. Moje przeważające źródło dochodu:'}</Typography>

      <Box mb={2} />

      <RadioGroup defaultValue={1} name="radio-buttons-group-c3" sx={{ paddingX: 2 }}>
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={'Zatrudnienie (umowa o pracę, umowa zlecenie/o dzieło, kontrakt menedżerski), emerytura, renta'}
        />
        <FormControlLabel value={2} control={<Radio />} label={'Mam drugie, zapasowe, źródło dochodu'} />
        <FormControlLabel value={3} control={<Radio />} label={'Samozatrudnienie, wolny zawód (np. lekarz, prawnik)'} />
        <FormControlLabel value={3} control={<Radio />} label={'Działalność gospodarcza na własny rachunek'} />
        <FormControlLabel value={3} control={<Radio />} label={'Inne źródła (np. dochody kapitałowe)'} />
      </RadioGroup>
    </ChapterContent>
  );
};
