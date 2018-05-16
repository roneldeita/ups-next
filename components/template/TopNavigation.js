import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import css from '../../static/css/topnavigation.css'
import jQ from 'jquery'

class TopNavigation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navClass:"navbar-default",
      toggleIcon:"fas fa-chevron-down"
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
    jQ('#navbar-collapse>.navbar-nav>li>a').on('click', function(){
      if(jQ(window).width() <= 768) {
        jQ('.navbar-toggler').click()
      }
    })
    let parent = this;
    jQ('.navbar-toggler').on('click', function(){
      const State = jQ('.navbar-collapse').hasClass('show')
      const Class = State ? "fas fa-chevron-down" : "fas fa-chevron-up"
      parent.setState({toggleIcon:Class})
    })
  }
  handleScroll(){
    var scroll = window.pageYOffset;
    const Navclass = scroll <= 50 ? 'navbar-default' : 'navbar-default-active';
    this.setState({navClass:Navclass})
  }
  setActive(path){
    return path === this.props.router.pathname ? 'active' : ''
  }
  render(){
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
                  <span className={this.state.toggleIcon} style={{color:'white'}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link prefetch href="/" passHref>
                        <a className={`nav-link ${this.setActive("/")}`}>HOME</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link prefetch href="/products-and-services" passHref>
                        <a className={`nav-link ${this.setActive("/products-and-services")}`}>PRODUCTS & SERVICES</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="http://blog.unified.ph/" className="nav-link">BLOG</a>
                    </li>
                    <li className="nav-item">
                      <Link prefetch href="/about" passHref>
                        <a className={`nav-link ${this.setActive("/about")}`}>ABOUT</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link prefetch href="/events" passHref>
                        <a className={`nav-link ${this.setActive("/events")}`}>EVENTS</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link prefetch href="/contact" passHref>
                        <a className={`nav-link ${this.setActive("/contact")}`}>CONTACT</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link space"></a>
                    </li>
                    <li className="nav-item" style={{paddingBottom:'13px'}}>
                      <a className="btn login-button" rel="noopener noreferrer"  target="_blank" href="https://secure.unified.ph">Login</a>
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

export default withRouter(TopNavigation)
