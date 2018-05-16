const Head = {
  color: '#1F354F',
  fontWeight:300,
  marginTop:'100px',
  marginBottom:'80px'
}
const Banner = {
  minHeight: '570px',
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  paddingBottom:'100px'
}
const Title = {
  paddingTop: '100px',
  fontSize:'38px',
  fontWeight: 500,
  color: '#ffffff'
}
const Sub = {
  fontSize:'22px',
  fontWeight: 200,
  color: '#ffffff'
}
let Services = [
  {
    img:'../../static/images/services/Bills_Payment.png',
    title:'Bills Payment',
    description:'Unified Express Bills Payment provides Fast, Secure and Convenient online bills payment solutions. Now you can manage your entire bills payment process online anytime, anywhere you have Internet availability.',
    position:'text-right'
  },
  {
    img:'../../static/images/services/Loading.png',
    title:'Loading' ,
    description:'With Unified Express Loading, start a loading business using one sim to load all networks and use the Unified Online System to make it easier to keep a record of your daily business transactions.',
    position:'text-left'
  },
  {
    img:'../../static/images/services/Ticketing-01.jpg',
    title:'Ticketing' ,
    description:'With Unified Express Ticketing is a booking service flight in the Philippines to reach out the people with convenient and easy transaction in all GPRS Branches Nationwide.',
    position:'text-right'
  },
  {
    img:'../../static/images/services/Travel_and_Tours.png',
    title:'Travel and Tours' ,
    description:'Global Pinoy Travel and Tours, Inc. organized Package Tours; provide tourist guides and/or escorts, tourist vehicles, hotels & resorts reservations, domestic & international tickets. Aside from the regular tour services we tailor-made, customized for groups & individuals, incentive, educational, business, corporate and professionals.',
    position:'text-left'
  },
  {
    img:'../../static/images/services/Courier-01.jpg',
    title:'Courier Services' ,
    description:'Lorem ipsum dolor sit amet, ne nonumy fierent consulatu eum, vel eu docendi perpetua. Cum solet corpora pertinax cu, pro et utamur delicata. Error dissentiunt nec ei, tollit iisque invenire pri id. Atqui alienum laboramus his ei, his nisl oblique veritus cu.',
    position:'text-right'
  },
]

const renderBannerServices = Services.map((service, index) => {
  return (
    <div key={index} style={{backgroundImage: `url(${service.img})`, ...Banner}}>
      <div className={`container ${service.position}`}>
      <p style={Title}>{service.title}</p>
      <p style={Sub}>{service.description}</p>
      <a href="/" className="btn btn-transparent-circular">Read More</a>
      </div>
    </div>
  )
})

export default() =>{
  console.log(Services)
  return(
    <div className="">
      <h1 className="text-center" style={Head}>All in one services</h1>
      {renderBannerServices}
    </div>
  )
}
