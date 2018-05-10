import Layout from '../components/template/Layout'
import Banner from '../components/events/Banner'
import css from '../static/css/banner.css'

export default class extends React.Component{
  render(){
    return(
      <Layout>
        <div className="cover events-cover">
          <Banner/>
        </div>
      </Layout>
    )
  }
}
