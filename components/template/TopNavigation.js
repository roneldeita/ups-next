import React from 'react'
import Link from 'next/link'
import css from '../../static/css/TopNavigation.css'
import jQ from 'jquery'

class TopNavigation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navClass:"navbar-default"
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
    jQ('#navbar-collapse>.navbar-nav>li>a').on('click', function(){
      if(jQ(window).width() <= 768) {
        jQ('.navbar-toggler').click()
      }
    })
  }
  handleScroll(){
    var scroll = window.pageYOffset;
    const Navclass = scroll <= 50 ? 'navbar-default' : 'navbar-default-active';
    this.setState({navClass:Navclass})
  }
  render(){
  //  console.log(this)
    return(
      <div className={`container-fluid fixed-top ${this.state.navClass}`}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <nav className="navbar navbar-expand-lg navbar-light" style={{padding:'0px'}}>
                <a className="navbar-brand" href="#">
                  <img src="/static/images/UPS_Logo.png" alt="logo" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">PRODUCTS & SERVICES</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">BLOG</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">EVENTS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">CONTACTS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link space"></a>
                    </li>
                    <li className="nav-item">
                      <a className="btn login-button" target="_blank" href="https://secure.unified.ph">Login</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNavigation
