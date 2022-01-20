import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout/layout'

export default function Test() {
  return (
    <Layout>
      <Head>
        <title>Test Next JS page</title>
        <meta name="description" content="Page de test" />
      </Head>
      <h1>Test Next JS page</h1>
    </Layout>
  )
}