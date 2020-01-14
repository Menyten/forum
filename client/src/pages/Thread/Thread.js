import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setThread } from '../../actions'
import forum from '../../helpers/forum'
import useStyles from './useStyles'
import Typography from '@material-ui/core/Typography'
import Post from './components/Post'

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
      <Typography
        variant='h1'
        className={classes.title}
      >
        {title}
      </Typography>
      {renderPosts()}
    </section>
  )
}

export default Thread
