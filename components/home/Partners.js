const header = {
  color: '#1F354F',
  fontSize:'36px',
  marginBottom:70,
  fontWeight:300
}
const title = {
  color: '#1F354F',
  fontSize:'22px',
  fontWeight:400
}
const subTitle = {
  color: '#1F354F'
}
const partnerIcons = {
  height:'35px',
  margin:'12px'
}
const hr = {
  borderTop: 2,
  borderStyle: 'solid',
  borderColor: '#dddddd'
}

export default()=>(
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-12 text-center">
        <p style={header}>
          From booking online to sending payments,<br /> we got everything.
        </p>
      </div>
      <div className="col-md-3">
        <p style={title}>Payment Partners</p><br />
        <p style={subTitle}>We are partnering with the most trusted
          bills payment and remittance service providers
          ensure every transaction is fast, smooth and hassle free.
        </p>
      </div>
      <div className="col-md-7 text-center">
        <div>
          <img src="/static/images/partners/BPI.png" alt="BPI" style={partnerIcons} />
          <img src="/static/images/partners/UCPB.png" alt="UCPB" style={{width:50, margin:12}} />
          <img src="/static/images/partners/BDO.png" alt="BDO" style={{width:70, margin:12}} />
          <img src="/static/images/partners/Landbank.png" alt="LandBank" style={{width:90, margin:12}} />
          <img src="/static/images/partners/Chinatrust.png" alt="Chinatrust" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Globe.png" alt="Globe" style={partnerIcons} />
          <img src="/static/images/partners/Smart.png" alt="Smart" style={{width:115, margin:12}} />
          <img src="/static/images/partners/Skycable.png" alt="Skycable" style={{width:110, margin:12}} />
          <img src="/static/images/partners/Sun.png" alt="Sun" style={partnerIcons} />
          <img src="/static/images/partners/TnT.png" alt="TNT" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Meralco.png" alt="Meralco" style={partnerIcons} />
          <img src="/static/images/partners/Maynilad.png" alt="Maynilad" style={partnerIcons} />
          <img src="/static/images/partners/Manila_Water.png" alt="ManilaWater" style={partnerIcons} />
          <img src="/static/images/partners/Iremit.png" alt="Iremit" style={partnerIcons} />
          <img src="/static/images/partners/Moneygram.png" alt="Moneygram" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Transfast.png" alt="Transfast" style={{width:90, margin:12}} />
          <img src="/static/images/partners/Sunlife.png" alt="Sunlife" style={{width:105, margin:12}} />
          <img src="/static/images/partners/Manulife.png" alt="Manulife" style={{width:130, margin:12}} />
          <img src="/static/images/partners/Philam.png" alt="Philam" style={{width:85, margin:12}} />
          <img src="/static/images/partners/Axa.png" alt="AXA" style={{width:35, margin:12}} />
        </div>
      </div>
      <div className="col-md-10 text-center" style={{marginTop:60, marginBottom:60}}>
        <hr style={hr} />
      </div>
      <div className="col-md-3">
        <p style={title}>Airline Partners</p><br />
        <p style={subTitle}>Domestic and International partners.
          We are credited partners with more than 300 plus airlines
          accross the globe to get you to wherever you need to be.
        </p>
        <img
          className="text-center" src="/static/images/partners/IATA.png"
          alt="IATA"
          style={{width:180, marginBottom:'50px'}} />
      </div>
      <div className="col-md-7 text-center">
        <div>
        <div>
          <img src="/static/images/partners/PAL.png" alt="PAL" style={{width:130, margin:12}} />
          <img src="/static/images/partners/Cebu_Pacific.png" alt="Cebu_Pacific" style={partnerIcons} />
          <img src="/static/images/partners/2GO_Travel.png" alt="TwoGoTravel" style={partnerIcons} />
          <img src="/static/images/partners/Air_Asia.png" alt="Air_Asia" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Zest_Air.png" alt="Zest_Air" style={partnerIcons} />
          <img src="/static/images/partners/Garuda.png" alt="Garuda" style={partnerIcons} />
          <img src="/static/images/partners/Singapore_Airline.png" alt="SingaporeAirline" style={partnerIcons} />
          <img src="/static/images/partners/Qatar.png" alt="Qatar" style={partnerIcons} />
          <img src="/static/images/partners/Emirates.png" alt="Emirates" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Turkish.png" alt="Turkish" style={partnerIcons} />
          <img src="/static/images/partners/ANA.png" alt="ANA" style={{width:110, margin:12}} />
          <img src="/static/images/partners/Cathay.png" alt="Cathay" style={{width:130, margin:12}} />
          <img src="/static/images/partners/Etihad.png" alt="Etihad" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Thai.png" alt="Thai" style={partnerIcons} />
          <img src="/static/images/partners/Au.png" alt="Au" style={partnerIcons} />
          <img src="/static/images/partners/JAL.png" alt="JAL" style={{width:100, margin:12}} />
          <img src="/static/images/partners/New_Zealand.png" alt="NewZealand" style={partnerIcons} />
          <br/>
          <img src="/static/images/partners/Hanan_AL.png" alt="HananAL" style={partnerIcons}/>
          <img src="/static/images/partners/Eva_Air.png" alt="EvaAir" style={partnerIcons} />
          <img src="/static/images/partners/Lufthasna.png" alt="Lufthasna" style={partnerIcons} />
        </div>
        </div>
      </div>
    </div>
  </div>
)
