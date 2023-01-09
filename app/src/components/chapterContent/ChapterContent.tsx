import React from 'react';
import { Box, useTheme } from '@mui/material';

import { ChapterContentProps } from './ChapterContent.types';
import { useStyles } from './ChapterContent.styles';

export const ChapterContent: React.FC<ChapterContentProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Box className={classes.wrapper}>{children}</Box>;
};
