import React from 'react'
import UPShubs from '../../static/json/hubs.json'
import 'rc-menu/assets/index.css'
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hubs: UPShubs,
      activeHub: UPShubs[0].offices[0]
    }

  }

  showHubDetail(hub){
    this.setState({activeHub:hub})
  }

  renderHub(hub){
    var offices = [];
    for (var i = 0; i < hub.offices.length ; i++){
      offices.push(<MenuItem key={i} onClick={this.showHubDetail.bind(this, hub.offices[i])}><a>{hub.offices[i].short_name}</a></MenuItem>)
    }
    return(
      <SubMenu title={hub.area} key={hub.id}>
        { offices }
      </SubMenu>
    )
  }
  render(){
    var hubs = [];
    for (var i = 0; i < this.state.hubs.length ; i++){
      hubs.push(this.renderHub(this.state.hubs[i]))
    }
    return(
      <div className="container text-center" style={{marginTop:'90px',marginBottom:'100px', color: '#1F354F'}}>
        <h1 style={{fontWeight:300, marginBottom:'90px'}}>Unified Hub Locations</h1>
        <div className="row justify-content-md-center">
          <div className="col-md-5 text-left">
            <div className="btn-group-vertical" role="group" aria-label="...">
              <ul className="list-group">
                <Menu multiple style={{minWidth:'280px', marginBottom:'35px'}}>
                  { hubs }
                </Menu>
              </ul>
            </div>
          </div>
          <div className="col-md-5 text-left" style={{marginTop:`-10px`}}>
            <h4 style={{fontWeight:600}}>{ this.state.activeHub.long_name }</h4>
            <p>{ this.state.activeHub.address }</p>
            <p>{ this.state.activeHub.contact1 ? this.state.activeHub.contact1: '' }</p>
            <p>{ this.state.activeHub.contact2 ? this.state.activeHub.contact2: '' }</p>
            <p>{ this.state.activeHub.contact3 ? this.state.activeHub.contact3: '' }</p>
            <p>{ this.state.activeHub.contact4 ? this.state.activeHub.contact4: '' }</p>
          </div>
        </div>
        <style jsx global>{`
          .rc-menu-submenu-selected,
          .rc-menu-item-selected{
            background-color: transparent !important
          }
        `}
        </style>
      </div>
    )
  }
}
