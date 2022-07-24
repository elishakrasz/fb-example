import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

const Home: NextPage = ({ session }: any ) => {
  if(!session) return <Login />
  return (
    <div className="">
      <Head>
        <title>Facebook Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header /> 

    <main>
    
    </main>
      </div>
  )
}

export async function getServerSideProps(context: any) {
  
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}

export default Home
