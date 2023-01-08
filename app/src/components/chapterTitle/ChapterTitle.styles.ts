import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: 'yellow',
    textTransform: 'uppercase',
    padding: theme.spacing(2, 4),
  },
}));
