import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Patterns By MecBonjourno</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer companyName="Design Patters" />
    </>
  )
}
