import './Sites.css'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
function Map(){
    return (<GoogleMap 
    defaultZoom={8}
     defaultCenter={{lat:36.38982974858979,lng:6.64401268797548}}
     />
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function Sites() {
    return (
        <div className="engeneerlist">
            <span className="featuredTitle">
                    Map View Of BTS Sites :
            </span>
            <div className="featuredMaps">
          <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                    loadingElement={<div style={{ height: `600px` }}/>}
                    containerElement= {<div style={{ height: `600px` }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: '7px' }} />}

        />  
        </div>
        </div>
    )
}
