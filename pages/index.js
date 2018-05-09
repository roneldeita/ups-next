import Layout from '../components/template/Layout'
import Banner from '../components/home/Banner'
import css from '../static/css/Home.css'

export default () => {
  return(
    <Layout>
      <div className="cover-container">
        <Banner/>
      </div>
    </Layout>
  )
}
