import Link from 'next/link'
import css from '../../static/css/Banner.css'

export default() => {
  return(
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <div className="slogan-container">
            <p className="slogan">
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
            <Link href="/about">
              <button className="btn btn-learn-more">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="col-md-5">
        </div>
      </div>
    </div>
  )
}
