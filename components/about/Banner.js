import Router from 'next/router'
import css from '../../static/css/banner.css'

export default() => {
  return(
    <div className="cover about-cover">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="slogan-container">
              <p className="slogan slogan-about text-right">
                Global Business for <br/>
                Global Community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
