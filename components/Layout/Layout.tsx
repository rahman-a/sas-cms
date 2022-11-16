import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer/Footer'

interface LayoutProps {
  children: JSX.Element[] | JSX.Element
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>SALIM AL SIYABI CHARTERED ACCOUNTANTS & AUDITORS - | HOME</title>
        <meta name='description' content='Aims Tax & Accounting' />
        <meta name='keywords' content='Aims Tax & Accounting' />
        <meta name='author' content='Aims Tax & Accounting' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />
        <link href='/images/favicon.png' rel='shortcut icon' type='image/png' />
        <link href='/images/favicon.png' rel='apple-touch-icon' />
        <link href='/images/favicon.png' rel='apple-touch-icon' sizes='72x72' />
        <link
          href='/images/favicon.png'
          rel='apple-touch-icon'
          sizes='114x114'
        />
      </Head>
      <Header />
      <main> {children} </main>
      <Footer />
    </>
  )
}

export default Layout
