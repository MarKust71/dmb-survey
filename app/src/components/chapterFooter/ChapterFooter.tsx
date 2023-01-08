import React, { useContext } from 'react';
import { Box, Button, Stack, useTheme } from '@mui/material';
import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import ForwardIcon from '@mui/icons-material/ArrowForwardIos';

import { ReducerContext } from '../../App';

import { ChapterFooterProps } from './ChapterFooter.types';
import { useStyles } from './ChapterFooter.styles';

export const ChapterFooter: React.FC<ChapterFooterProps> = ({ onClickNext, onClickPrev }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {
    state: { currentChapter, currentQuestion },
  } = useContext(ReducerContext);

  return (
    <Box className={classes.wrapper}>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<BackIcon />}
          onClick={onClickPrev}
          disabled={currentChapter === 0 && currentQuestion === 0}
        >
          Wstecz
        </Button>
        <Button variant="contained" endIcon={<ForwardIcon />} onClick={onClickNext}>
          Dalej
        </Button>
      </Stack>
    </Box>
  );
};
