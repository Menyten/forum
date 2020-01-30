import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from "react-router-dom";
import { setThreads } from '../../actions/index'
import forum from '../../helpers/forum'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Paper,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './useStyles'
import CreateThread from './components/CreateThread'

const Forum = () => {
  const [createThread, setCreateThread] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const { forumId } = useParams()
  const { threads, user } = useSelector(state => state)

  useEffect(() => {
    getThreads()
    /* eslint-disable-next-line */
  }, [])

  const getThreads = async () => {
    const res = await forum.get(`/api/forum/${forumId}`)
    dispatch(setThreads(res.data))
  }

  const onThreadClick = e => {
    history.push(`/forum/${forumId}/${e.currentTarget.dataset.id}`)
  }

  const onCreateThreadClick = bool => setCreateThread(bool)

  const renderCreateThreadButton = () => Object.keys(user).length ? (
    <Grid item xs={12} align='right'>
      <Button startIcon={<AddIcon />} color='primary' onClick={() => onCreateThreadClick(true)}>Ny tråd</Button>
    </Grid>) :
    null

  const renderThreads = () => threads.map(({ title, createdBy: { username }, _id }) => (
    <TableRow
      hover={true}
      className={classes.row}
      key={_id}
      data-id={_id}
      onClick={onThreadClick}
    >
      <TableCell component="th" scope="row">
        <Typography variant='subtitle1' component='h2'>
          {title}
        </Typography>
        <Typography variant='subtitle2'>
          <span className={classes.span}>av</span> {username}
        </Typography>
      </TableCell>
      <TableCell align="center">0</TableCell>
      <TableCell align="right">
        <section className={classes.post}>
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
          <section className={classes.group}>
            <Typography variant='subtitle2'>
              Joelmosen
            </Typography>
            <Typography variant='caption' color='textSecondary'>
              2020-01-11 16:30
        </Typography>
          </section>

        </section>
      </TableCell>
    </TableRow >
  ))

  return !createThread ? (
    <Grid container className={classes.container}>
      {renderCreateThreadButton()}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table size='small' aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ämne</TableCell>
                <TableCell align="center">Inlägg</TableCell>
                <TableCell align="right">Senaste inlägg</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderThreads()}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  ) :
    <Grid container className={classes.container}>
      <Grid item xs={12} align='right'>
        <Button startIcon={<AddIcon />} color='primary' onClick={() => onCreateThreadClick(false)}>Avbryt</Button>
      </Grid>
      <Grid item xs={12}>
        <CreateThread setCreateThread={setCreateThread} getThreads={getThreads} />
      </Grid>
    </Grid>
}

export default Forum
