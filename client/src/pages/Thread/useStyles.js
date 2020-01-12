import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  post: {
    display: 'flex',
    margin: theme.spacing(4, 0),
    padding: theme.spacing(4, 0)
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    height: '100px',
    width: '100px',
    margin: theme.spacing(4, 0, 2, 0)
  },
  temporary: {
    color: '#fff'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '15rem',
    width: '100%'
  },
  right: {
    padding: theme.spacing(0, 1)
  }
}))

export default useStyles