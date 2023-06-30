import React, { Component } from 'react';
import './profileHouse.css'
class ProfileHouse extends Component {
    state = {  } 
    
    render() { 
        return (
            <div className="container " style={{ width: "83%" }}>
             <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <div class="navbar-collapse ">
              <form class="d-flex" role="search">
                <input
                  class="form-control fs-5 me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
        
              </form>
            </div>

           <div className="profile">
            <img src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <h5>Ali Jawad</h5>
           </div>
          </div>
        </nav>
        
        <div className='info-house-1'>
       
        
        <div className='card-infos'>
            
                <div className='card-infos-house'>
                <i class="bi bi-person-fill icon-info" ></i>
                    Name of Owner: Ali jawad
                </div>

                <div className='card-infos-house'>
                <i class="bi bi-bounding-box icon-info"></i>
                    Distance of House: 200 km
                </div>

                <div className='card-infos-house'>
                <i class="bi bi-pin-map-fill icon-info"></i>
                    Location: Alkndlksn
                </div>

                <div className='card-infos-house'>
                <i class="bi bi-house-fill icon-info"></i>
                    Number of House: 12
                </div>

                <div className='card-infos-house'>
                <i class="bi bi-houses-fill icon-info"></i>
                    Number of Rooms: 5
                </div>
        </div>

        </div>
         
        <div className='info-house-2'>
            <div className='card-infos-image'>
                <img src='https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
                <img src='https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'/>
                <img src='https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'/>
                <img src='https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'/>
                <img src='https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg'/>
            </div>
        </div> 

        
  
            </div>
        );
    }
}
 
export default ProfileHouse;