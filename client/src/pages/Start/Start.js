import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setForums } from '../../actions'
import forum from '../../helpers/forum'
import useStyles from './useStyles'

const Start = () => {
  const { forums } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  useEffect(() => {
    getForums()
    /* eslint-disable-next-line */
  }, [])

  const getForums = async () => {
    const res = await forum.get('/api/forums')
    dispatch(setForums(res.data))
  }

  const goToForum = e => history.push(`/forum/${e.currentTarget.dataset.id}`)

  const renderForums = () => forums.map(({ title, _id }) => (
    <TableRow
      hover={true}
      className={classes.row}
      key={_id}
      onClick={goToForum}
      data-id={_id}
    >
      <TableCell
        component="th"
        scope="row"
        className={classes.cellHeader}>
        <Avatar className={classes.avatar}>
          <ForumIcon />
        </Avatar>
        <Typography variant='subtitle2' component='h2'>
          {title}
        </Typography>
      </TableCell>
      <TableCell align="center">0</TableCell>
      <TableCell align="center">0</TableCell>
    </TableRow>
  ))

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Kategori</TableCell>
            <TableCell align="center">Trådar</TableCell>
            <TableCell align="center">Inlägg</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forums.length ? renderForums() : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Start