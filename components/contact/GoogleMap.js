import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: 14.640785, lng: 121.032600 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 14.640785, lng: 121.032600 }} >
      <InfoWindow>
         <div>
          <h6>Unified Products and Services Inc.,</h6>
          <p>JR building 1520 Quezon Avenue, South Triangle
            Sct. Albano, Quezon City
            1103 Metro Manila
            Philippines</p>
         </div>
       </InfoWindow>
    </Marker>}
  </GoogleMap>
))

export default() => (
  <div style={{marginTop:'100px'}}>
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFn-0O9J1JRcEpmzIVsYy-mYSEpik2EkA&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)
