import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return ({
    editor: {
      maxHeight: '15rem',
      height: '15rem',
      overflowY: 'auto',
      padding: theme.spacing(0, 1),
      [theme.breakpoints.up('sm')]: {
        maxHeight: '20rem',
        height: '20rem'
      }
    }
  })
})

export default useStyles