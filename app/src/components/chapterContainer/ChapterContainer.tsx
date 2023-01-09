import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

import { ChapterContainerProps } from './ChapterContainer.types';
import { useStyles } from './ChapterContainer.styles';

export const ChapterContainer: React.FC<ChapterContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Paper elevation={16} className={classes.paper} sx={{ backgroundColor: 'azure' }}>
        <Box>
          <Typography variant="h4" className={classes.title}>
            Ankieta
          </Typography>
        </Box>

        <Box className={classes.content}>{children}</Box>
      </Paper>
    </Box>
  );
};
