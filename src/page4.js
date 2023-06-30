import React, { Component } from 'react';
import "./housesSale.css";

class Page4 extends Component {
    state = {  } 
    render() { 
        return (
          
               <div className="container" style={{ width: "83%", textAlign: "left" }}>
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

        <div className="header">
          DASHBOARD
          <h3>Rent Houses  </h3>
        </div>
        <div style={{textAlign: "right"}}>
        <button
          type="button"
          class="btn btn-dark btn-sm mb-3"
          style={{
            backgroundColor: "rent",
            marginRight: "18px",
            fontWeight: "bold",
             
          }}
        >
          {" "}
          + New House
        </button>
        </div>
   
         

        <div className='houses-container'>
         
                 
        

    
         <div className='card-house'>
            <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h5>Ahmed Jasem</h5>
            <h6>Distance 200 km</h6>
            <h6>Loaction Albaldat</h6>
        <div className="type type-rent">  RENT </div>

         </div>

         

         <div className='card-house'>
            <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h5>Ahmed Jasem</h5>
            <h6>Distance 200 km</h6>
            <h6>Loaction Albaldat</h6>
        <div className="type type-rent">  RENT </div>

         </div>

         <div className='card-house'>
            <img src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h5>Ahmed Jasem</h5>
            <h6>Distance 200 km</h6>
            <h6>Loaction Albaldat</h6>
        <div className="type type-rent">  RENT </div>

         </div>


        </div>
        </div>
        
        );
        }
}
 

export default Page4;