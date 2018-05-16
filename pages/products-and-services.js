import Layout from '../components/template/Layout'
import Banner from '../components/productsandservices/Banner'
import Packages from '../components/productsandservices/Packages'
import Services from '../components/productsandservices/Services'

export default class extends React.Component{
  render(){
    return(
      <Layout>
        <Banner/>
        <Packages/>
        <Services/>
      </Layout>
    )
  }
}
