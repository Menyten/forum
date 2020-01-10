import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolBar: {
    margin: theme.spacing(2, 0)
  },
  btnAdd: {
    display: 'flex',
    verticalAlign: 'center'
  }
}))

export default useStyles