import React from 'react'
import Layout from '../components/template/Layout'
import Banner from '../components/home/Banner'
import WhyUnified from '../components/home/WhyUnified'
import Partners from '../components/home/Partners'
import Bentanayan from '../components/home/Bentanayan'
import GetMobilApp from '../components/home/GetMobileApp'

export default class extends React.Component{
  static async getInitialProps({ req, pathname, query, asPath }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent, pathname, query, asPath }
  }
  render(){
    return(
      <Layout>
        <Banner/>
        <WhyUnified/>
        <Partners/>
        <Bentanayan/>
        <GetMobilApp/>
      </Layout>
    )
  }
}
