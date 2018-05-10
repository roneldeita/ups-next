import Router from 'next/router'
import css from '../../static/css/banner.css'

export default() => {
  return(
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="slogan-container">
            <p className="slogan slogan-events">
              We always want to celebrate<br/>
              everything with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
