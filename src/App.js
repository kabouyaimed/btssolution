import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Surveillance from "./components/pages/surveillance/Surveillance";
import Controlpanel from "./components/pages/controlpanel/Controlpanel";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Engeneers from "./components/pages/engeneers/Engeneers";
import Templog from "./components/pages/templog/Templog";
import Powerlog from "./components/pages/powerlog/Powerlog";
import Inventory from "./components/pages/inventory/Inventory";
import Securitylog from "./components/pages/securitylog/Securitylog";
import Sites from "./components/pages/sites/Sites";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/surveillance' element={<Surveillance/>}/>
          <Route path='/controlpanel' element={<Controlpanel/>}/>
          <Route path='/engeneers' element={<Engeneers/>}/>
          <Route path='/temperaturelogs' element={<Templog/>}/>
          <Route path='/powerlogs' element={<Powerlog/>}/>
          <Route path='/securitylogs' element={<Securitylog/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/sites' element={<Sites/>}/>
          </Routes>
        
      </div>

    </Router>
  );
}

export default App;
