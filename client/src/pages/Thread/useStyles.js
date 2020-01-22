import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(4, 0),
  },
  title: {
    fontSize: '1.5rem',
    padding: theme.spacing(0, 1)
  },
  post: {
    display: 'flex',
    margin: theme.spacing(1, 0, 0, 0),
    padding: theme.spacing(1),
  },
  avatar: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100px',
      maxHeight: '100px',
      width: '100%',
      height: '100%'
    }
  },
  user: {
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center'
    }
  },
  textContainer: {
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    }
  }
}))

export default useStyles