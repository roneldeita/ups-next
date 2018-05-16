import Router from 'next/router'
const Container = {
  marginTop:120,
  marginBottom:120
}
const Header = {
  color: '#1F354F',
  fontWeight:300
}
const Button = {
  fontSize:'26px',
  backgroundColor:'#191D21',
}
export default() => (
  <div className="container" style={Container}>
    <div className="row justify-content-md-center">
      <div className="col-md-12 text-center" style={{marginBottom:'80px'}}>
        <h1 style={Header}>Interested in Unified Products and Services?</h1><br/><br/>
        <button
          className="btn btn-transparent-circular"
          style={Button}
          onClick={() => Router.push('/products-and-services')}>See Unified Packages</button>
      </div>
      <div className="col-md-3 text-center">
        <img src="/static/images/UPS_Mobile.png" alt="Unified mobile" className="img" style={{maxWidth:'80%'}}/>
      </div>
      <div className="col-md-3">
        <div className="text-center" style={{marginTop:'45%'}}>
          <p style={{color: '#1F354F'}}>or Get the app now!</p>
          <img src="/static/images/Appstore.png" alt="Appstore"/>
          <img src="/static/images/Playstore.png" alt="Playstore" style={{marginTop:10}}/>
        </div>
      </div>
    </div>
  </div>
)
