import Router from 'next/router'
import css from '../../static/css/banner.css'

export default() => {
  return(
    <div className="cover gallery-cover">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="slogan-container">
              <p className="slogan slogan-about">
                Every moment  <br/>
                matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
