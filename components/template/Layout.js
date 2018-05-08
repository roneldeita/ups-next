import TopNavigation from './TopNavigation'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';

export default (props) => {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
      </Head>
      <div style={{minHeight:'800px'}}>
        <TopNavigation/>
        {props.children}
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
        html, body{
          background-color:#ffffff;
          font-family: 'Roboto', sans-serif;
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
