import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Home from "./home";
import Home2 from "./home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import ProfileHouse from "./profileHouse";
import Login from "./login";
import Profile from "./profile";
import NewHouse from "./newHouse";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div class="container-fluid" style={{backgroundColor:'#f5f8fb'}}>
        <div class="row flex-nowrap">
    <SideBar></SideBar>
     
    <Routes>  
         <Route index element={<Login />} />
         <Route path="/home2" element={<Home2 />} />
         <Route path="/page1" element={<Page1 />} />
         <Route path="/page2" element={<Page2 />} />
         <Route path="/page3" element={<Page3 />} />
         <Route path="/page4" element={<Page4 />} />
         <Route path="/profileHouse" element={<ProfileHouse />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/newHouse" element={<NewHouse />} />
         <Route path="*" element={<Home />} />    
     </Routes>
  </div>
  </div>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
