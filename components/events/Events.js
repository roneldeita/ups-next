import Events from '../../static/json/events.json'

const Title = {
  marginTop:'50px',
  marginBottom:'40px',
  fontWeight:300,
  fontSize:'38px',
  textAlign: 'center'
}
const CardContainer = {
  margin: '40px 40px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  cursor:'pointer'
}

const CardImg = {
  width:'100%',
  maxHeight:'230px',
  objectFit:'cover'
}

const CardDesc = {
  minheight:80,
}
const ModalFooter = {
  textAlign: 'left',
  display: 'block'
}
const renderCardEvents = () => {
  return Events.map((event, index) => (
      <div className="col-md-6" key={index}>
        <div style={CardContainer} className="card" data-toggle="modal" data-target={`#modal${index}`}>
          <img className="card-img-top" style={CardImg} src={`../../static/images/events/${event.img}`} alt={`../../static/images/events/${event.img}`} />
          <div className="card-body">
            <div style={CardDesc}>
              <h5 style={{fontWeight:400}}>{event.title}</h5>
              <h6 style={{fontWeight:300}}>{event.short_desc}</h6>
            </div>
            <hr/>
            <p style={{fontSize:'14px'}}>{event.date}</p>
          </div>
        </div>
        <div className="modal fade" id={`modal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{fontWeight:400}}>{event.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img style={{width: '100%'}} src={`../../static/images/events/${event.img}`} alt={`../../static/images/events/${event.img}`} />
              </div>
              <div className="modal-footer" style={ModalFooter}>
                <p>{event.short_desc}</p>
                <p className="text-muted text-right" style={{fontSize:'14px'}}>{event.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default() => {
  return(
    <div className="container" style={{color: '#1F354F'}}>
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <p style={Title}>View recent Unified Events</p>
          <div className="row">
            {renderCardEvents()}
          </div>
        </div>
      </div>
    </div>
  )
}
