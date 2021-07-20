import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers'
import {checkLocalStorageForUser as checkForUser} from '../utils'

import {
  GET_USER,
  LOGIN_USER,
} from '../actions'




const initialState = {
  netlifyUser: checkForUser(),
  appUser: {
    id:"",
    email:"",
    full_name:"",
    isLoggedIn: false,
  },
}

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const logInAppUser = ()=>{
    dispatch({type: LOGIN_USER})
  }

  useEffect(()=>{
    dispatch({type: GET_USER})
  }, [state.netlifyUser])

  return (
    <UserContext.Provider
      value={{...state, logInAppUser}}
    >
      {children}
    </UserContext.Provider>
  );
};

// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
