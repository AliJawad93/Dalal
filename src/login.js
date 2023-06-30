import './login.css';
import loginImg from './assets/login_img.png';
import { Link, Route, Routes } from "react-router-dom";
const Login =()=>{
    return (
        <div className="box">

        <div className="LoginCard">
         <div className="FormCard">
   
           <h3 id='loginName'>LOGIN</h3>
                   <input type="text" id="Email" name="Email" placeholder="Email"/>
                   
                   <br></br>
                   
                   <input type="password" id="Password" name="Password" placeholder="Password"/>
                   
                   <br></br>
                   
                   <label id="remamberMe">
                   <input type="checkbox" checked=""/>
                     Remamber me
                   </label>
   
                   <br></br>
                   <Link to={'/home2'} className='nav-link px-0 align-middle'>
                   <input type="submit" value="Login"/>
                   </Link>
             

                  
                   
                   </div>
   
          <div className="imgLoginCard">
           <img src={loginImg} alt="login image" height="600"/>
          </div>
        
        </div>
    
   </div>
    );
}

export default Login;