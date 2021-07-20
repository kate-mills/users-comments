import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"

import {useUserContext} from '../users/context'
// react SSR doesnt support suspense yet

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const {logInAppUser} = useUserContext()

  const [userName, setUserName] = React.useState("")
  const isLoggedIn = identity && identity.isLoggedIn
  const netlifyUser = isLoggedIn && identity.user

  React.useEffect(()=>{
    if(netlifyUser){
      logInAppUser()
      const { user_metadata:{full_name}} = netlifyUser
      setUserName(full_name)
    }
  }, [netlifyUser])

  return (
    <>
      <nav style={{ background: "whitesmoke" }}>
        {" "}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${userName}, Log out here!` : "LOG IN"}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  )
}

export default Layout
