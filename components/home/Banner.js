import Router from 'next/router'
import css from '../../static/css/banner.css'
import { Link } from 'react-scroll'

export default() => {
  return(
    <div className="cover home-cover">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <div className="slogan-container">
              <p className="slogan slogan-home">
                We empower you<br/>
                to build the future<br/>
                you deserve!
              </p>
              <p className="slogan-sub">
                In Unified Products and Services,
                we continuously innovate the needs
                of every Filipino entrepreneur in
                attaining financial freedom through
                our one-stop-shop business.
              </p>
              <Link to="info" smooth={true} offset={-80}  duration={800}>
                <button className="btn btn-transparent-circular">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-5">
          </div>
        </div>
      </div>
    </div>
  )
}
