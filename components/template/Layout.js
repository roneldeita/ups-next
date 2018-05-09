import TopNavigation from './TopNavigation'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
      </Head>
      <div>
        <TopNavigation/>
        {props.children}
      </div>
      <style jsx global>{`
        html, body{
          font-family: 'Roboto', sans-serif !important;
          color:#666666 !important;
        }
        @font-face {
          font-family: 'DharmaGothicLight';
          font-style: normal;
          font-weight: normal;
          src: url('/static/fonts/dharma-ghotic/DharmaGothicE_Light_I.otf') format('truetype');
        }
        .border{
          border: 3px solid blue
        }
        .default-color{
          color:#3d5fac
        }
      `}</style>
    </div>
  )
}
