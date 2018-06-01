import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'
import Head from 'next/head'
import '../../static/css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
  return(
    <div>
      <Head>
        <link rel="shortcut icon" href="../../static/images/UPS_Favicon.ico"/>
        <title>Unified Products and Services</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossOrigin="anonymous"/>
      </Head>
      <div>
        <TopNavigation/>
        {props.children}
        <BottomNavigation/>
      </div>
    </div>
  )
}
