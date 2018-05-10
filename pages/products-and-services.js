import Layout from '../components/template/Layout'
import Banner from '../components/productsandservices/Banner'
import css from '../static/css/banner.css'

export default class extends React.Component{
  render(){
    return(
      <Layout>
        <div className="cover products-and-services-cover">
          <Banner/>
        </div>
      </Layout>
    )
  }
}
