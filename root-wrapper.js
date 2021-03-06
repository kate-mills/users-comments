import React from "react"


import { IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

import { UserProvider } from './src/users/context'


export const wrapRootElement = ({element}) => {
  return (
    <UserProvider>
      <IdentityContextProvider url="https://users-comments.netlify.app">
        {element}
      </IdentityContextProvider>
    </UserProvider>
  )
}
