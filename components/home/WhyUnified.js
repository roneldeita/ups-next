const Container = {
  marginTop:'60px',
  marginBottom:'60px'
}
const Header = {
  fontSize:'38px',
  color: '#1F354F',
  marginBottom:'70px',
  fontWeight: 300
}
const Icon = {
  height: '90px'
}
const Title = {
  fontSize:'22px',
  color: '#1F354F',
  marginTop: '20px',
  marginBottom: '20px',
  fontWeight: 400
}
const SubTitle = {
  fontSize:'16px',
  color: '#1F354F',
  fontWeight: 300
}
export default() => (
  <div className="container-fluid">
    <div className="container" style={Container}>
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          <h1 style={Header}>Why use Unified?</h1>
        </div>
        <div className="col-md-10 text-center">
          <div className="row justify-content-md-center">
            <div className="col-md-4">
              <img alt="icon 2" src="/static/images/icon2.png" style={Icon}/>
              <p style={Title}>Trusted business nationwide</p>
              <p style={SubTitle}>
                With over 300,000 daily active users<br />
                choose and and trust Unified.
              </p>
            </div>
            <div className="col-md-4">
              <img alt="icon 1" src="/static/images/icon1.png" style={Icon}/>
              <p style={Title}>You can pay directly<br/> anywhere</p>
              <p style={SubTitle}>
                Access a global set of users and customers.<br />
                Unified is available locally and internationally.
              </p>
            </div>
            <div className="col-md-4">
              <img alt="icon 3" src="/static/images/icon3.png" style={Icon}/>
              <p style={Title}>Cashless payments</p>
              <p style={SubTitle}>
                You can get paid directly of your services<br />
                without using any physical money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
