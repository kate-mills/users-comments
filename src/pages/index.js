import React from "react"
import Layout from '../components/Layout'
import { useIdentityContext } from "react-netlify-identity-widget"

const Home = ()=>{
  const identity = useIdentityContext()
  console.log(identity)

  return (
    <Layout>
    </Layout>
  )
}
export default Home
