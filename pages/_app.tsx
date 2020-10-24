import App from 'next/app'
import Head from 'next/head'

import '../styles.css'
import { KYC } from '../components/KYC'

export default class Root extends App {
  render() {
    const { Component } = this.props

    return (
      <>
        <Head>
          <title>KYC Issuer</title>
        </Head>
        {/* <div className="citiGradient">
          <span>Universal KYC Issuer</span>

        </div> */}
       

        <Component />
        <div className="footer">
        <p><span>Developed By: </span>
        Sajida & team
        </p>
        </div>

        
      </>
    )
  }
}
