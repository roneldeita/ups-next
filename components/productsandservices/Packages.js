import React from 'react'
import { animateScroll } from 'react-scroll'
import { withRouter } from 'next/router'

const Head = {
  color: '#1F354F',
  fontWeight:300,
  marginTop:'80px',
  marginBottom:'80px'
}
const Title = {
  color: '#1F354F',
  fontSize:'32px',
  fontWeight:400,
}
const Sub = {
  color: '#20a0ff',
  fontSize:'26px',
  fontWeight:400,
}
const DealerIcon = {
  width: '100%',
  maxWidth: '320px',
  margin: '0 auto'
}
const Button = {
  backgroundColor:'#191D21',
  marginTop:'45px',
  marginBottom:'70px',
}
const ButtonInside = {
  padding:'7px 30px',
  fontSize:'20px'
}
const Note = {
  color: '#1F354F',
  fontWeight:400
}

const rederPackageModal = (data)=>{
  let info = {
    img: '/static/images/Pinoy_Dealer_Icon-01.png',
    title: 'Pinoy Dealer Package',
    price: '₱ 7,998'
  };

  let inclusions = {
    localPackage: [
      {name: 'Remittance Local & International'},
      {name: 'Bills Payment'},
      {name: 'Loading Local & International'},
      {name: 'Online Booking Domestic'},
      {name: 'Hotel Booking Local & International'},
      {name: 'Travel & Tours Package Local & International'},
      {name: 'Insurance'},
      {name: 'Unified Brochure & Tarpauline'}
    ],
    globalPackage: [
      {name: 'Remittance Local & International'},
      {name: 'Bills Payment'},
      {name: 'Loading Local & International'},
      {name: 'Online Booking Domestic and International'},
      {name: 'Hotel Booking Local & International'},
      {name: 'Travel & Tours Package Local & International'},
      {name: 'Insurance'},
      {name: 'Unified Brochure & Tarpauline'}
    ]
  };

  switch(data){
    case 'local-package':
      info.inclusions = inclusions.localPackage;
      //
    break;
    case 'global-package':
      info.img = '/static/images/Global_Dealer_Icon-01.png';
      info.title = 'Global Dealer Package';
      info.price = '₱14,998';
      info.inclusions = inclusions.globalPackage;
    break;
    default:
    //default
  }

  const renderInclusions = info.inclusions.map((item, index) => <li key={index}><span className="fa fa-check"></span> {item.name}</li>);

  return(
    <div className="modal fade" id={data} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body text-center" style={{paddingTop:'0px', paddingBottom:'0px'}}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div style={{padding:'50px 10px'}}>
                  <img src={info.img} alt="img" style={{width:`80%`}}  />
                  <p style={Title}>{info.title}</p>
                  <p style={Sub}>{info.price}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 text-left bg-u-dark">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{marginTop:`8px`, color:`white`}}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <div style={{padding:'50px 10px'}}>
                  <h1 style={{fontWeight:300, color:`gold`}}>Inclusions</h1>
                  <ul style={{listStyle:`none`, marginLeft:`-38px`, color:`white`, lineHeight:`28px`}}>
                    {renderInclusions}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
class Packages extends React.Component{
  componentDidMount(){
    if(this.props.router.query.scroll === 'packages'){
      animateScroll.scrollTo(550)
    }
  }
  render(){
    return(
      <div className="container">
        <h1 className="text-center" style={Head}>Exclusive package deals for you</h1>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <img src="/static/images/Global_Dealer_Icon-01.png" alt="Global dealer icon" style={DealerIcon}/>
            <p style={Title}>Global Dealer Package</p>
            <p style={Sub}>Php 14,998</p>
            <button className="btn btn-transparent-circular" style={Button}  data-toggle="modal" data-target="#global-package">
              <div style={ButtonInside}>See Details</div>
            </button>
            { rederPackageModal('global-package') }
          </div>
          <div className="col-md-6">
            <img src="/static/images/Pinoy_Dealer_Icon-01.png" alt="Global dealer icon" style={DealerIcon}/>
            <p style={Title}>Global Dealer Package</p>
            <p style={Sub}>Php 7,998</p>
            <button className="btn btn-transparent-circular" style={Button} data-toggle="modal" data-target="#local-package">
              <div style={ButtonInside}>See Details</div>
            </button>
            { rederPackageModal('local-package') }
          </div>
          <div className="col-md-10 text-left">
            <p style={Note}>
              <i>Note: Insurance Coverage is good only for one-time coverage.
              In case of multiple heads, multiple coverage is Not allowed.
              Should the dealer is already insured,
              he/she maybe opt to insure other relatives
              (within the 4th degree by consanguinity or affinity)
               or sell the insurance coverage.</i>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Packages)
