import Router from 'next/router'
import css from '../../static/css/banner.css'

export default() => {
  return(
    <div className="cover products-and-services-cover">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <p className="slogan slogan-products-and-services">
              The customer experience is <br/>
              the next competitive battleground.
            </p>
            <button className="btn btn-signup-circular" onClick={() => Router.push({pathname:'/contact', query:{scroll: 'support'}})}>SIGN UP NOW AND BE OUR PARTNER!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
