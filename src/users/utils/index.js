const checkLocalStorageForUser = () => {
  if (typeof window !== `undefined`) {
    let user = localStorage.getItem('gotrue.user')
    if (user) {
      return JSON.parse(user)
    } else {
      return undefined 
    }
  }
  return undefined
}

export {
  checkLocalStorageForUser
}
