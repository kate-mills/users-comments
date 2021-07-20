import {
  GET_USER,
  LOGIN_USER,
} from '../actions'

import {checkLocalStorageForUser as checkForUser} from '../utils'

const user_reducer = (state, action) => {

  if (action.type === GET_USER) {
    const {netlifyUser, appUser} = state
    let tempUser = {...appUser}

    if(netlifyUser){
      const {id, email} = netlifyUser
      const {full_name} = netlifyUser.user_metadata
      tempUser = {id, email, full_name, isLoggedIn: true}
    }
    return { ...state, appUser:tempUser }
  }
  if (action.type === LOGIN_USER) {
    const {netlifyUser} = state

    if(!netlifyUser){
      let tempUser = checkForUser()
      return {...state, netlifyUser: tempUser }
    }
    return { ...state }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer
