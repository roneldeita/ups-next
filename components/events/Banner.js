import Router from 'next/router'
import css from '../../static/css/banner.css'

export default() => {
  return(
    <div className="cover events-cover">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="slogan-container">
              <p className="slogan slogan-events text-right">
                We always want to celebrate<br/>
                everything with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
