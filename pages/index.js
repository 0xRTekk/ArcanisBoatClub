import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/layout.js'
import Banner from '../components/Banner/banner'
import SliderComponent from '../components/SliderComponent/sliderComponent'
import Artist from '../components/Artist/artist'
import Marina from '../components/Marina/marina'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      
      <Banner />

      <SliderComponent />

      <Artist />

      <Marina />

    </Layout>
  )
}
