import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  cellHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(1)
  },
  row: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}))

export default useStyles