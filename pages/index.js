import React from 'react'
import Layout from '../components/template/Layout'
import Banner from '../components/home/Banner'
import css from '../static/css/banner.css'

export default class extends React.Component{
  static async getInitialProps({ req, pathname, query, asPath }) {
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent, pathname, query, asPath }
  }
  render(){
    console.log(this.props)
    return(
      <Layout>
        <div className="cover home-cover">
          <Banner/>
        </div>
      </Layout>
    )
  }
}
