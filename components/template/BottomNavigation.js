const Footer = {
  paddingTop:'50px',
  paddingBottom:'50px',
  color: '#ffffff'
}
const List = {
  listStyle: 'none',
  marginLeft: '-40px',
  fontSize: '11px',
  fontWeight: 300,
  lineHeight: '20px'
}
const SocialLogo = {
  width: '35px',
  margin:'4px'
}
const UnifiedLogo = {
  width: '65px'
}
const FooterHr = {
  marginTop: '10px',
  marginBottom: '5px',
  borderTop:'1px solid #666666'
}
const FooterLink = {
  color:'#ffffff',
  textDecoration: 'none'
}
export default () => (
  <div className="container-fluid bg-u-dark" style={Footer}>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg">
              <p>EXPLORE</p>
              <ul style={List}>
                <li><a href="/" style={FooterLink}>ABOUT</a></li>
                <li><a href="/" style={FooterLink}>ACTIVITIES</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <p>SERVICES</p>
              <ul style={List}>
                <li><a href="/" style={FooterLink}>BILLS PAYMENT</a></li>
                <li><a href="/" style={FooterLink}>LOADING</a></li>
                <li><a href="/" style={FooterLink}>TICKETING</a></li>
                <li><a href="/" style={FooterLink}>TRAVEL AND TOURS</a></li>
                <li><a href="/" style={FooterLink}>COURIER</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <p>GET HELP</p>
              <ul style={List}>
                <li><a href="/" style={FooterLink}>SEND US EMAIL</a></li>
                <li><a href="/" style={FooterLink}>CONTACT</a></li>
                <li><a href="/" style={FooterLink}>Unified HUBS</a></li>
                <li><a href="/" style={FooterLink}>Unified FAQs</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <p>LEGAL</p>
              <ul style={List}>
                <li><a href="/" style={FooterLink}>PRIVACY POLICY</a></li>
                <li><a href="/" style={FooterLink}>TERMS OF SERVICE</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <p>PRODUCTS</p>
              <ul style={List}>
                <li><a href="/" style={FooterLink}>GLOBAL DEALER PACKAGE</a></li>
                <li><a href="/" style={FooterLink}>PINOY DEALER PACKAGE</a></li>
                <li><a href="/" style={FooterLink}>MOBILE APP</a></li>
                <li><a href="/" style={FooterLink}>PHILLANDS</a></li>
                <li><a href="/" style={FooterLink}>BENTANAYAN</a></li>
                <li><a href="/" style={FooterLink}>GOODYBOX</a></li>
              </ul>
            </div>
          </div>
          <hr style={FooterHr} />
          <br />
          <div className="float-right">
            <img src="../static/images/social/Facebook_reversed-01.png" alt="Facebook" style={SocialLogo} />
            <img src="../static/images/social/Instagram_Reversed-01.png" alt="Instagram" style={SocialLogo} />
            <img src="../static/images/social/Youtube_Reversed-01.png" alt="Youtube" style={SocialLogo} />
            <img src="../static/images/social/GooglePlus_Reversed-01.png" alt="GooglePlus" style={SocialLogo} />
          </div>
          <div style={{marginTop:15}}>
            <img src="../static/images/UPS_Logo.png" alt="UPS_logo" style={UnifiedLogo} />
            <p style={{display:'inline', marginLeft:10, fontWeight:300}}> JR Bldg. 1520 Quezon Ave. South Triangle, Quezon City</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
