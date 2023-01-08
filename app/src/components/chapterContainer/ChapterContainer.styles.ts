import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '90vh',
    display: 'flex',
    paddingTop: theme.spacing(3),
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '100%',
    height: '100%',
    maxWidth: '1100px',
    marginX: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    flex: '1 1 auto',
    backgroundColor: 'lightblue',
  },
}));
