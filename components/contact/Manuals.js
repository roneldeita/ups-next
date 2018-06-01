import Head from 'next/head'
const Container = {
  marginBottom:50,
  marginTop:50,
  color: '#1F354F'
}
const Button = {
  fontSize:'10px',
  marginBottom:35
}
const FileTitle = {
  fontSize:'12px',
  fontWeight: 400
}
const pdfIcon = {
  fontSize:'64px'
}
export default () => (
  <div className="container-fluid text-center">
    <Head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossOrigin="anonymous"/>
    </Head>
    <div className="container" style={Container}>
      <h1 style={{fontWeight:300}}>Get your manuals here</h1>
      <br/><br/>
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-sm-6 col-md-2">
              <p className="far fa-file-pdf" style={pdfIcon}></p>
              <p style={FileTitle}>General FAQ</p>
              <a href="../../static/pdf/generalFAQ.pdf" className="btn btn-download" style={Button} download>Download PDF File</a>
            </div>
            <div className="col-sm-6 col-md-2">
              <p className="far fa-file-pdf" style={pdfIcon}></p>
              <p style={FileTitle}>Loading FAQ</p>
              <a href="../../static/pdf/loadingFAQ.pdf" className="btn btn-download" style={Button} download>Download PDF File</a>
            </div>
            <div className="col-sm-6 col-md-2">
              <p className="far fa-file-pdf" style={pdfIcon}></p>
              <p style={FileTitle}>Remittance FAQ</p>
              <a href="../../static/pdf/remittanceFAQ.pdf" className="btn btn-download" style={Button} download>Download PDF File</a>
            </div>
            <div className="col-sm-6 col-md-2">
              <p className="far fa-file-pdf" style={pdfIcon}></p>
              <p style={FileTitle}>Ticketing FAQ</p>
              <a href="../../static/pdf/ticketingrevised.pdf" className="btn btn-download" style={Button} download>Download PDF File</a>
            </div>
            <div className="col-sm-6 col-md-2">
              <p className="far fa-file-pdf" style={pdfIcon}></p>
              <p style={FileTitle}>Online Suport FAQ</p>
              <a href="../../static/pdf/oltickFAQ.pdf" className="btn btn-download" style={Button} download>Download PDF File</a>
            </div>
            <div className="col-sm-6 col-md-2">
              <p className="far fa-file-pdf" style={pdfIcon}></p>
              <p style={FileTitle}>Personal Insurance FAQ</p>
              <a href="../../static/pdf/pinsuranceFAQ.pdf" className="btn btn-download" style={Button} download>Download PDF File</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
