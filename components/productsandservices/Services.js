const Head = {
  color: '#1F354F',
  fontWeight:300,
  marginTop:'100px',
  marginBottom:'80px'
}
const Title = {
  paddingTop: '100px',
  fontSize:'28px',
  fontWeight: 400,
  color: '#1F354F',
  display:'inline',
}
const Sub = {
  fontSize:'18px',
  fontWeight: 300,
  color: '#1F354F',
  display:'inline-block'
}
const ListIcon = {
  backgroundRepeat:'no-repeat',
  backgroundSize:'110px',
  paddingLeft:'150px',
  margin:'50px 0px 30px 0px'
}
const partnersTitle = {
  color: '#1F354F',
  fontWeight:600,
}
const Horizontal = {
  backgroundColor: '#ffffff',
	borderTop: '1px dashed #d3d3d3'
}
let Services = [
  {
    img:'../../static/images/services/Bills_Payment_Icon.png',
    partners_icons: '../../static/images/services/BillsPayment_Icons.png',
    title:'Bills Payment',
    description:'UPS Express Bills Payment provides Fast, Secure and Convenient online bills payment solutions. Now you can manage your entire bills payment process online anytime, anywhere.'
  },
  {
    img:'../../static/images/services/Remittance_Icon.png',
    partners_icons: '../../static/images/services/Remittance_Icons.png',
    title:'Remittance' ,
    description:'UPS Remittance Services or Money transfer provides Fast, Secure and Convenient online bills payment solutions. Now you can manage your entire bills payment process online anytime, anywhere.'
  },
  {
    img:'../../static/images/services/Loading_Icon.png',
    partners_icons: '../../static/images/services/Loading_Icons.png',
    title:'Loading' ,
    description:'With UPS Express Loading, start a loading business using Unified System to load all networks locally and international. Use the UPS Online System to make it easier to keep a record of your daily business transactions.'
  },
  {
    img:'../../static/images/services/Insurance_Icon.png',
    partners_icons: '../../static/images/services/Insurance_Icons.png',
    title:'Insurance' ,
    description:'UPS Express Ticketing is a booking services flight in the Philippines to reach out the people with convenient and easy transaction in all GPRS Branches nationwide.'
  },
  {
    img:'../../static/images/services/Ticketing_Icon.png',
    partners_icons: '../../static/images/services/Ticketing_Icons.png',
    title:'Ticketing' ,
    description:'With UPS Express Ticketing is a booking services flight in the Philippines to reach out the people with convenient and easy transaction in all GPRS Branches Nationwide.'
  },
  {
    img:'../../static/images/services/Hotel_Bookings_Icon.png',
    title:'Hotel Bookings' ,
    description:'UPS Express Ticketing is a booking services flight in the Philippines to reach out the people with convenient and easy transaction in all GPRS Branches Nationwide.'
  },
  {
    img:'../../static/images/services/Travel_and_Tours_Icon.png',
    title:'Travel and Tours' ,
    description:'Global Pinoy Travel and Tours, Inc. organized Package Tours; provide tourist guides and/or escorts, tourist vehicles, hotels & resorts reservations, domestic & international tickets. Aside from the regular tour services we tailor-made, customized for groups & individuals, incentive, educational, business, corporate and professionals.'
  }

]

const renderBannerServices = Services.map((service, index) => {
  return (
    <section key={index}>
      <li style={{background:`url(${service.img})`, ...ListIcon}}>
        <p style={Title}>{service.title}</p>
        <p style={Sub}>{service.description}</p>
      </li>
      { service.title !== 'Hotel Bookings' && service.title !== 'Travel and Tours' && service.title !== 'Ticketing' ?
        <p className="text-center" style={partnersTitle}>{service.title} Partners </p> :
        ''
      }
      <img src={service.partners_icons} style={{width:'100%', marginBottom:'50px'}}/>
      { service.title !== 'Travel and Tours' ? <hr style={Horizontal}/> : '' }
    </section>
  )
})

export default() =>{
  //console.log(Services)
  return(
    <div className="container">
      <h1 className="text-center" style={Head}>All in one services</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-6 text-center">
          <img src="/static/images/services/Services_Store.png" style={{width:'80%', marginBottom:'80px'}}/>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <ul style={{listStyleType:'none'}}>
            {renderBannerServices}
          </ul>
        </div>
      </div>
    </div>
  )
}
