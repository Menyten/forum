import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(4, 0)
  },
  table: {
    minWidth: 650,
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    margin: theme.spacing(0, 1, 0, 0),
    width: theme.spacing(4),
    height: theme.spacing(4),
    alignSelf: 'center'
  },
  post: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  row: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  span: {
    color: theme.palette.text.secondary,
    fontWeight: 400
  }
}))

export default useStyles