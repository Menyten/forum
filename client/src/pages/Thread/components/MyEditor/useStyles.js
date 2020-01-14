import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  console.log(theme);

  return ({
    container: {
      margin: theme.spacing(0, 1)
    },
    editor: {
      // set height to 20rem on size bigger than sm
      height: '15rem',
      padding: theme.spacing(0, 1)
    }
  })
})

export default useStyles