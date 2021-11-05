import React from './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import InventoryIcon from '@mui/icons-material/Inventory';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    Link
  } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li className="sidebarItem">
                            
                            <LineStyleIcon className="sidebarIcone"/>Home
                            
                        </li>
                        </Link>
                        <Link to={"/surveillance"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        
                        <li className="sidebarItem">
                            <OndemandVideoIcon  className="sidebarIcone"/>Survaillance
                        
                        </li>
                        </Link>
                        <Link to={"/controlpanel"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                      
                        <li className="sidebarItem">
                            <AdminPanelSettingsIcon className="sidebarIcone"/>Control Panel
                        
                        </li>
                        </Link>
                    </ul>
                    

                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Management</h3>
                    <ul className="sidebarList">
                    <Link to={"/sites"} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                        <li className="sidebarItem">
                            <PlaceIcon className="sidebarIcone"/>BTS Sites
                        
                        </li>
                        </Link>
                        <Link to={"/engeneers"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li className="sidebarItem">
                            <PersonIcon className="sidebarIcone"/>Engeneers
                        </li>
                        </Link>
                  
                        <Link to={"/inventory"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  
                        <li className="sidebarItem">
                            <InventoryIcon className="sidebarIcone"/>Inventory
                        
                        </li>
                        </Link>
                    </ul>
                    

                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Logs</h3>
                    <ul className="sidebarList">
                    <Link to={"/securitylogs"} style={{ color: 'inherit', textDecoration: 'inherit'}}>                        
                        <li className="sidebarItem ">
                            <BarChartIcon className="sidebarIcone"/>Security Logs
                        
                        </li>
                        </Link>
                        <Link to={"/temperaturelogs"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li className="sidebarItem">
                            <BarChartIcon  className="sidebarIcone"/>Temperature Logs
                        
                        </li>
                        </Link>
                        <Link to={"/powerlogs"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li className="sidebarItem">
                            <BarChartIcon className="sidebarIcone"/>Power Logs
                        
                        </li>
                        </Link>
                    </ul>
                    

                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">System Settings</h3>
                    <ul className="sidebarList">
                        
                        <li className="sidebarItem">
                            <SettingsIcon className="sidebarIcone"/>General
                        </li>
                        <li className="sidebarItem">
                            <SecurityUpdateIcon  className="sidebarIcone"/>Updates
                        </li>
                        <li className="sidebarItem">
                            <LogoutIcon className="sidebarIcone"/>Log out
                        </li>
                    </ul>
                    

                </div>

            </div>
        </div>
    )
}
