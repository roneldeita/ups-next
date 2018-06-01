import Layout from '../components/template/Layout'
import Banner from '../components/contact/Banner'
import ContactsAndOffices from '../components/contact/ContactsAndOffices'
import Form from '../components/contact/Form'
import GoogleMap from '../components/contact/GoogleMap'
import Hubs from '../components/contact/Hubs'
import Manuals from '../components/contact/Manuals'

export default () => (
  <Layout>
    <Banner/>
    <ContactsAndOffices/>
    <Form/>
    <GoogleMap/>
    <Hubs/>
    <Manuals/>
  </Layout>
)
