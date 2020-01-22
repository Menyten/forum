import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setLoggedIn } from '../actions'
import forum from './forum'
import getCookie from './getCookie'

const useLoggedIn = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (getCookie('access_token')) {
      getUser()
    }
    /* eslint-disable-next-line */
  }, [])
  const getUser = async () => {
    const res = await forum.get('/api/user/logged-in')
    if (res.status === 200) dispatch(setLoggedIn(res.data))
  }
}

export default useLoggedIn
