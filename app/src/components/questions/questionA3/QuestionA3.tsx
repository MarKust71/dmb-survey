import React from 'react';
import { Box, MenuItem, Select, TextField, Typography, useTheme } from '@mui/material';

import { media } from 'constants/constants';
import { ChapterContent } from 'components/chapterContent/ChapterContent';

import { QuestionA3Props } from './QuestionA3.types';
import { useStyles } from './QuestionA3.styles';

export const QuestionA3: React.FC<QuestionA3Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'3. Do komunikacji w pracy używam:'}</Typography>

      <Box mb={2} />

      <Box sx={{ paddingX: 2 }}>
        <Box
          sx={{
            width: '400px',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gridAutoRows: '40px',
            gridGap: theme.spacing(2),
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">1. Najczęściej</Typography>
          <Select size="small">
            {media.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>

          <Typography variant="body1">2. Czasami</Typography>
          <Select size="small">
            {media.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>

          <Typography variant="body1">3. Sporadycznie</Typography>
          <Select size="small">
            {media.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>

          <Typography variant="body1">4. Inne</Typography>
          <TextField size="small" />
        </Box>
      </Box>
    </ChapterContent>
  );
};
