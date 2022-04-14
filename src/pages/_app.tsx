import React from 'react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider } from "next-auth/react"

import '../styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
