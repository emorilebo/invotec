import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomePage'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Invotec Nigeria LTD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home
