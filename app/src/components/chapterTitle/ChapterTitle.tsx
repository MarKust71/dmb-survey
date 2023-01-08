import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { ChapterTitleProps } from './ChapterTitle.types';
import { useStyles } from './ChapterTitle.styles';

export const ChapterTitle: React.FC<ChapterTitleProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h5">{children}</Typography>
    </Box>
  );
};
