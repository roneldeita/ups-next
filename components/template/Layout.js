import TopNavigation from './TopNavigation'
import Head from 'next/head'
export default (props) => {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
      </Head>
      <div style={{minHeight:'800px'}}>
        <TopNavigation/>
        {props.children}
      </div>
      <style jsx global>{`
        html, body{
          background-color:#f9f9f9;
          font-family: 'Roboto', sans-serif;
          color:#666666 !important
        }
        .border{
          border: 1px solid #666666
        }
        .default-color{
          color:#3d5fac
        }
      `}
      </style>
    </div>
  )
}
