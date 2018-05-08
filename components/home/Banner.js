import Link from 'next/link'
import {Button} from 'react-bootstrap'
import css from '../../static/css/Banner.css'

export default() => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-5">
          <div className={css.slogan_container}>
            <p className={css.slogan}>
              We empower you<br/>
              to build the future<br/>
              you deserve!
            </p>
            <p className={css.slogan_sub}>
              In Unified Products and Services,
              we continuously innovate the needs
              of every Filipino entrepreneur in
              attaining financial freedom through
              our one-stop-shop business.
            </p>
            <Link href="/about">
              <Button className={css.btn_learn_more}>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
