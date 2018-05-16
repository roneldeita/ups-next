import Layout from '../components/template/Layout'
import Banner from '../components/about/Banner'
import History from '../components/about/History'

export default class extends React.Component{
  render(){
    return(
      <Layout>
        <Banner/>
        <History/>
      </Layout>
    )
  }
}
