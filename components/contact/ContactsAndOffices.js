import Head from 'next/head'
import React from 'react'
import { animateScroll } from 'react-scroll'
import { withRouter } from 'next/router'

const Container = {
  marginTop:100,
  marginBottom:100,
  color: '#1F354F'
}
const ContactHead = {
  fontSize: '22px',
  lineHeight: '30px',
  fontWeight: 500
}
const Icon = {
  fontSize: '38px',
  fontWeight: 600,
  marginBottom: '15px'
}
const Number = {
  marginBottom: '0px',
}
const BottomLabel = {
  color: '#F7931E',
  marginBottom: '8px',
  fontSize: '10px',
  fontWeight: 500
}

class ContactsAndOffices extends React.Component{
  componentDidMount(){
    if(this.props.router.query.scroll === 'support'){
      animateScroll.scrollTo(550)
    }
  }
  render(){
    return(
      <div className="container text-center" style={Container}>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"/>
        </Head>
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-lg-3">
            <li className="pe-7s-headphones" style={Icon}></li>
            <p style={ContactHead}>CUSTOMER SUPPORT</p>
            <p style={Number}>JR Bldg. 1520 Quezon Ave., South Triangle, Quezon City</p>
            <p style={BottomLabel}>ADDRESS</p>
            <p style={Number}>support.upsexpress.com.ph</p>
            <p style={BottomLabel}>EMAIL</p>
            <p style={Number}>0917 783 1922</p>
            <p style={BottomLabel}>GLOBE</p>
            <p style={Number}>0933 995 2860</p>
            <p style={BottomLabel}>SUN</p>
            <p style={Number}>0908 444 2728</p>
            <p style={BottomLabel}>SMART</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <li className="pe-7s-map-marker" style={Icon}></li>
            <p style={ContactHead}>CORPORATE OFFICE</p>
            <p style={Number}>JR Bldg. 1520 Quezon Ave., South Triangle, Quezon City</p>
            <p style={BottomLabel}>ADDRESS</p>
            <p style={Number}>mail@upsglobal.net</p>
            <p style={BottomLabel}>EMAIL</p>
            <p style={Number}>373 1215</p>
            <p style={BottomLabel}>LANDLINE</p>
            <p style={Number}>0917 329 0837</p>
            <p style={BottomLabel}>GLOBE</p>
            <p style={Number}>0942 460 5544 / 0923 477 0191</p>
            <p style={BottomLabel}>SUN</p>
            <p style={Number}>0929 777 6855</p>
            <p style={BottomLabel}>SMART</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <li className="pe-7s-map-marker" style={Icon}></li>
            <p style={ContactHead}>CEBU OFFICE</p>
            <p style={Number}>Ground flr Rafael Yu Building, Gen. Maxilom Ave, Cebu City, Philippines</p>
            <p style={BottomLabel}>ADDRESS</p>
            <p style={Number}>mail@upsglobal.net</p>
            <p style={BottomLabel}>EMAIL</p>
            <p style={Number}>(032) 254 0090</p>
            <p style={BottomLabel}>LANDLINE</p>
            <p style={Number}>0923 133 6322</p>
            <p style={BottomLabel}>MOBILE NUMBER</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <li className="pe-7s-map-marker" style={Icon}></li>
            <p style={ContactHead}>DAVAO OFFICE</p>
            <p style={Number}>HRTV Corp. Building, Bolton St., Brgy. 3, Davao City</p>
            <p style={BottomLabel}>ADDRESS</p>
            <p style={Number}>mail@upsglobal.net</p>
            <p style={BottomLabel}>EMAIL</p>
            <p style={Number}>(082) 222 3644</p>
            <p style={BottomLabel}>LANDLINE</p>
            <p style={Number}>0916 453 9749</p>
            <p style={BottomLabel}>GLOBE</p>
            <p style={Number}>0948 342 8095</p>
            <p style={BottomLabel}>SMART</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ContactsAndOffices)
