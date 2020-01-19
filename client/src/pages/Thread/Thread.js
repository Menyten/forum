import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setThread, enableEditor } from '../../actions'
import forum from '../../helpers/forum'
import useStyles from './useStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import Post from './components/Post'
import MyEditor from './components/MyEditor'
import isObjectNotEmpty from '../../helpers/isObjectNotEmpty'

const Thread = () => {
  const { thread: { title, posts }, user, editor: { showEditor } } = useSelector(state => state)
  const { threadId } = useParams()
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    getPosts()
    /* eslint-disable-next-line */
  }, [])

  const getPosts = async () => {
    const res = await forum.get(`/api/thread/${threadId}`)
    dispatch(setThread(res.data))
  }
  const renderPostButton = () => isObjectNotEmpty(user) ? (
    <Grid item xs={12} align='right'>
      <Button color='primary' startIcon={<AddIcon />} onClick={() => dispatch(enableEditor())}>
        Nytt inlägg
          </Button>
    </Grid>
  ) :
    null

  const renderEditor = userObject => editor => {
    return isObjectNotEmpty(userObject) && editor ? <MyEditor /> : null
  }

  const renderPosts = () => posts.map(post => <Post {...post} key={post._id} />)



  return (
    <section className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1' className={classes.title}>
            {title}
          </Typography>
        </Grid>
        {renderPostButton()}
        <Grid item xs={12}>
          {renderPosts()}
        </Grid>
        {renderPostButton()}
        <Grid item xs={12}>
          {renderEditor(user)(showEditor)}
        </Grid>
      </Grid>
    </section>
  )
}

export default Thread
