import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Topbar() {
    return (
        <div className="topbar"> 
            <div className="topbarWrapper">
                <div className="topLeft"><span className="logo">BTS Solution</span></div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsIcon fontSize="large"/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <GTranslateIcon fontSize="large"/>
                    
                    </div>
                    <div className="topbarIconContainer">
                    <AccountCircleIcon fontSize="large"/>
                    </div>
                    
                    
                    
                </div>  
                    
                    
            </div>
        </div>
    )
}
