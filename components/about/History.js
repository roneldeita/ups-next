const Head = {
  marginTop:'50px',
  marginBottom:'40px',
  color: '#1F354F',
  fontWeight:300,
  fontSize:'40px'
}
const Sub = {
  color: '#1F354F',
  textAlign:'justify',
}
const headWhite = {
  color:'#ffffff',
  fontSize:'26px',
  fontWeight:300
}

const subWhite = {
  color:'#ffffff',
  fontWeight:200
}

const ValueSub = {
  color: '#1F354F',
  fontSize:'26px',
  lineHeight:'26px',
  fontWeight:300
}
const FounderImage = {
  width:'85%'
}
const FounderName = {
  color: '#1F354F',
  fontSize: '28px',
  lineHeight: '28px',
  fontWeight:400
}
const FounderRole = {
  color: '#1F354F',
  fontSize: '24px',
  fontWeight:300
}
const hoverImage = (event) => {
  const color = event.target.getAttribute('data-colored')
  event.target.setAttribute('src', color)
}
const resetImage = (event) => {
  const def = event.target.getAttribute('data-default')
  event.target.setAttribute('src', def)
}

export default() => {
  return(
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 text-center" style={{marginBottom:'60px'}}>
            <p style={Head}>Our history</p>
            <p style={Sub}>Unified Products and Services, Inc., or Unified for brevity, was established 2011.
            The company was initially formed as the marketing arm of a particular company. With
            the phenomenal growth of the company and its proven expertise in multi-level marketing,
            Unified Products and Services shifted to be an independent Multi-Level Marketing Company,
            that caters not only traditional products but also technology-based services, such as e-Cash,
            ticketing, bills payments and universal loading. Unified Products and Services, Inc., offers
            various dealership packages and franchise that will empower global communities towards
            attaining financial freedom and economic stability. Unified Products and Services, Inc.,
            exists with the paramount purpose of providing business opportunities to everyone through
            our world-class quality products and services and breaking the stigma on multi-level marketing
            by developing professional and globally-competitive multi-level marketing leaders. The company
            enshrined in its helm the tenets of Unity, People Oriented, and Service & Products Excellence.</p>
          </div>
        </div>
      </div>
      <div className="bg-u-dark">
        <div className="container text-center" style={{paddingTop:'60px', paddingBottom:'60px'}}>
          <div className="row justify-content-md-center">
            <div className="col-md-3">
              <p style={headWhite}>Vision</p>
              <p style={subWhite}>To be the world-class leader in Multi-Level Marketing
              industry empowering the global community in attaining
              financial freedom and economic stability.</p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <p style={headWhite}>Mission</p>
              <p style={subWhite}>To provide business opportunities to individuals through
              our world-class quality products and services.
              <br/>
              <br/>
              To develop professional multi-level marketing leaders who
              will spearhead an innovative marketing plans.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 text-center" style={{marginBottom:'60px'}}>
            <p style={Head}>Values</p>
            <p style={ValueSub}>Service & Product Excellence</p>
            <p style={ValueSub}>People Oriented</p>
            <p style={ValueSub}>Unity</p>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 text-center" style={{marginBottom:'60px'}}>
            <p style={Head}>Unified Team</p>
            <div className="row justify-content-md-center text-center" style={{marginTop:'80px'}}>
              <div className="col-md-4">
                <img
                  src="/static/images/Manny_Black-01.png"
                  style={FounderImage}
                  alt="logo"
                  data-default="/static/images/Manny_Black-01.png"
                  data-colored="/static/images/Manny_Colored-01.png"
                  onMouseOver={hoverImage}
                  onMouseOut={resetImage}/>
                <p style={FounderName}>Emmanuel Pascual</p>
                <p style={FounderRole}>Founder & CEO</p>
              </div>
              <div className="col-md-4">
                <img src="/static/images/UPS_Logo.png" style={FounderImage} alt="logo"/>
                <p style={FounderName}>Farrah Pascual</p>
                <p style={FounderRole}>Finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
