import type { NextPage } from 'next'
import Head from 'next/head'

import { Stats } from 'src/+stats/stats'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Massari Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stats/>
    </>
  )
}

export default Home
