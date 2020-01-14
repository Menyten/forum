import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setThread } from '../../actions'
import forum from '../../helpers/forum'
import useStyles from './useStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import Post from './components/Post'
import MyEditor from './components/MyEditor'

const Thread = () => {
  const { thread: { title, posts } } = useSelector(state => state)
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

  const renderPosts = () => posts.map(post => <Post {...post} key={post._id} />)

  return (
    <section className={classes.container}>
      <Grid container>

        <Grid item xs={12}>
          <Typography variant='h1' className={classes.title}>
            {title}
          </Typography>
        </Grid>

        <Grid item xs={12} align='right'>
          <Button color='primary' startIcon={<AddIcon />}>
            Nytt inlägg
          </Button>
        </Grid>

        <Grid item xs={12}>
          {renderPosts()}
        </Grid>

        <Grid item xs={12} align='right'>
          <Button color='primary' startIcon={<AddIcon />}>
            Nytt inlägg
          </Button>
        </Grid>

        <Grid item xs={12}>
          <MyEditor />
        </Grid>

      </Grid>
    </section>
  )
}

export default Thread
