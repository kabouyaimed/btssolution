import './featuredinfo.css'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
function Map(){
    return (<GoogleMap 
    defaultZoom={10}
     defaultCenter={{lat:36.38982974858979,lng:6.64401268797548}}
     />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function featuredinfo() {
    return (
        <div><div className="featured">
            <div className="featureditem">
                <span className="featuredTitle">
                    Room Temperature
                </span>
                <div className="featuredTempcontainer">
                    <div className="featuredTermometer">
                        <ul className="numbers">
                            <li><span>100°C</span></li>

                            <li><span>50°C</span></li>

                            <li><span>0°C</span></li>
                        </ul>
                        <ul className="bars">
                            <li><div className="bar" data-percentage="50"></div><span>Temperature:60°C</span></li>
                        </ul>
                    </div>
                </div>
                <span className="featuredsub">Level : Very Hot</span>
            </div>

            <div className="featureditemtwo">
                <span className="featuredTitle">
                    Power and Fuel Charts
                </span>
                <div className="featuredfuelcontainer">
                    <div className="bartwo b" data-percentage="95%"><span className="label">Batery level</span><span className="count">85%</span></div>
                    <div className="bartwo f" data-percentage="70%"><span className="labelsecond">Fuel level</span><span className="count">50%</span></div>
                    <div className="bartwo e" data-percentage="10%"><span className="label">Effeciency</span><span className="count">73%</span></div>
                </div>
                <span className="featuredsub">Level : Medium</span>

            </div>



        </div>
        <div className="featured2">
                
                <div className="featureditem1">
                <span className="featuredTitle">
                    Battery Rack Temp
                </span>    
                <div className="featuredTempcontainer">
                    <div className="featuredTermometer">
                        <div className="temperature">
                        50°C
                        </div>
                    </div>
                </div>
                <span className="featuredsub">Level : Very Hot</span>
                </div>
                <div className="featureditem2">
                <span className="featuredTitle">
                    Panel Box Temp
                </span>
                <div className="featuredTempcontainer">
                    <div className="featuredTermometer">
                    <div className="temperature good">
                        30°C
                    </div>
                    </div>
                </div>
                <span className="featuredsub">Level : Good</span>
                </div>
                <div className="featureditem3">
                <span className="featuredTitle">
                    Map View
                </span>
                <div className="featuredMapcontainer">
                    <div className="featuredMap">
                    <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB-BDRnvPD7Szx78j_9DF5mF3HYtV6cTr0'}
                    loadingElement={<div style={{ height: `300px` }}/>}
                    containerElement= {<div style={{ height: `300px` }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: '7px' }} />}

                    />

                    </div>
                </div>
                </div>
        </div>
        </div>
    )
}
