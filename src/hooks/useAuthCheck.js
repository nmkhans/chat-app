import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedIn } from '../redux/reducer/authSlice/authSlice';

const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        dispatch(userLoggedIn({
          accessToken: auth.accessToken,
          user: auth.user
        }))
      }
    }
    setAuthChecked(true)
  }, [dispatch, setAuthChecked])

  return authChecked
}

export default useAuthCheck