import './surveillance.css'

export default function Surveillance() {
    return (
        <div className="surveillance">
        <div className="surveillancegrid">
            <div className="surveillanceitem">
            <span className="surveillanceTitle">
                    Security Cam 1
            </span>
            <div className="surveillancecamcontainer">
                <div className="surveillancecam">
                <video width="400" height="240" controls>
                    <source src="#" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            </div>
            <div className="surveillanceitem">
            <span className="surveillanceTitle">
                    Security cam 2
            </span>
            <div className="surveillancecamcontainer">
                <div className="surveillancecam">
                <video width="400" height="240" controls>
                    <source src="#" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            </div>
        </div>

        <div className="surveillancegrid">
            <div className="surveillanceitem">
            <span className="surveillanceTitle">
                    Security cam 3
            </span>
            <div className="surveillancecamcontainer">
                <div className="surveillancecam">
                <video width="400" height="240" controls>
                    <source src="#" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            </div>
            <div className="surveillanceitem">
            <span className="surveillanceTitle">
                    Security cam 4
            </span>
            <div className="surveillancecamcontainer">
                <div className="surveillancecam">
                <video width="400" height="240" controls>
                    <source src="#" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
                </div>
            </div>
            </div>
            
        </div>


        </div>
    )
}
