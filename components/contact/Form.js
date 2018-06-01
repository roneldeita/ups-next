const Title = {
  color: '#1F354F',
  fontSize:'20px',
  lineHeight:'20px',
  fontWeight:400,
}
const Button = {
  fontSize:'16px',
  backgroundColor:'#191D21',
  marginTop:10
}
const ButtonSpan = {
  display:'inline-block',
  padding:'6px 0px',
  fontWeight:300,
}
const formControl = {
  borderRadius: '0px'
}
export default() => (
  <div className="container text-center contact-container">
    <p style={Title}>If you got any questions</p>
    <p style={Title}>please do not hesitate to send us a message.</p><br/><br/>
    <div className="row justify-content-md-center">
      <div className="col-md-8 col-lg-5">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" style={formControl} placeholder="ENTER YOUR NAME" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" style={formControl} placeholder="ENTER YOUR EMAIL ADDRESS" />
          </div>
          <div className="form-group">
            <textarea className="form-control" style={formControl} rows="6" placeholder="ENTER YOUR MESSAGE"></textarea>
          </div>
          <button type="submit" className="btn btn-transparent-circular" style={Button}>
            <span style={ButtonSpan}>Submit</span>
          </button>
        </form>
      </div>
    </div>
  </div>
)
