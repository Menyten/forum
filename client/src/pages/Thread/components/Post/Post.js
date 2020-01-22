import React from 'react'
import formatDate from '../../../../helpers/formatDate'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ThreadPost from '../../../../components/ThreadPost'
import useStyles from './useStyles'
import profile from '../../../../assets/profile.png'

const Post = ({ createdAt, createdBy: { username }, text }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.post}
    >
      <Grid
        container
        item
        xs={12}
        sm={3}
      >
        <Grid item xs={12}>
          <Typography
            variant='caption'
            color='textSecondary'
          >
            {formatDate(createdAt)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sm={12}
          align='center'
        >
          <img
            src={profile}
            alt="profilbild"
            className={classes.avatar}
          />
        </Grid>
        <Grid
          item
          xs={10}
          sm={12}
          className={classes.user}
        >
          <Typography style={{ fontWeight: 700 }}>
            {username}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={9}
      >
        <ThreadPost storedState={text} className={classes.text} />
      </Grid>
    </Grid>
  )
}

export default Post
