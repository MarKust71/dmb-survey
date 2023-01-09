import React from 'react';
import { Box, MenuItem, Select, TextField, Typography, useTheme } from '@mui/material';

import { ChapterContent } from 'components/chapterContent/ChapterContent';
import { media } from 'constants/constants';

import { QuestionA4Props } from './QuestionA4.types';
import { useStyles } from './QuestionA4.styles';

export const QuestionA4: React.FC<QuestionA4Props> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ChapterContent>
      <Typography variant="h6">{'4. Prywatnie do porozumiewania używam:'}</Typography>

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
