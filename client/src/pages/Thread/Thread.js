import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../../actions'
import forum from '../../helpers/forum'
import formatDate from '../../helpers/formatDate'
import useStyles from './useStyles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Thread = () => {
  const { posts } = useSelector(state => state)
  const { threadId } = useParams()
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    getPosts()
    /* eslint-disable-next-line */
  }, [])

  const getPosts = async () => {
    const res = await forum.get(`/api/thread/${threadId}`)
    dispatch(setPosts(res.data))
  }

  posts.forEach(post => console.log(post))

  const renderPosts = () => posts.map(({ _id, createdBy: { username }, text, createdAt }) => (
    <Paper
      className={classes.post}
      component='article'
      variant='outlined'
      square
      key={_id}
    >

      <section className={classes.left}>
        <Typography variant='caption' color='textSecondary'>
          {formatDate(createdAt)}
        </Typography>
        <div className={classes.avatar}>
          <Typography className={classes.temporary} variant='h2'>
            J
          </Typography>
        </div>
        <Typography>
          {username}
        </Typography>
      </section>

      <section className={classes.right}>
        <Typography variant='body2'>
          {text}
        </Typography>
      </section>

    </Paper >
  ))

  return renderPosts()
}

export default Thread
