import React, { useEffect } from 'react'
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
  Typography
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './useStyles'

const Forum = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const { id } = useParams()
  const { threads } = useSelector(state => state)

  useEffect(() => {
    getThreads()
    /* eslint-disable-next-line */
  }, [])

  const getThreads = async () => {
    const res = await forum.get(`/api/forum/${id}`)
    dispatch(setThreads(res.data))
  }

  const onThreadClick = e => {
    history.push(`/forum/${id}/${e.currentTarget.dataset.id}`)
  }

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

  return (
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
  )
}

export default Forum
