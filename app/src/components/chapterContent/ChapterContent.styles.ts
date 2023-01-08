import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    minHeight: 300,
    padding: theme.spacing(2, 8),
  },
}));
