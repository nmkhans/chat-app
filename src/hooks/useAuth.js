import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = useSelector(state => state.auth);
  console.log(auth)

  // if (auth?.accessToken && auth?.user) {
  //   return true
  // } else {
  //   return false
  // }

  useEffect(() => {
    if ((auth?.accessToken && auth?.user)) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [auth])

  return isLoggedIn;

}

export default useAuth;