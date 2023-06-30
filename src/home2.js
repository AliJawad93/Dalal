import React, { Component } from "react";
import chart1 from "./assets/chart1.png";
import chart2 from "./assets/chart2.png";
import chart3 from "./assets/chart3.png";
import chart4 from "./assets/chart4.png";
import "./overall.css";
import { Link } from "react-router-dom";
class Home2 extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ width: "83%", textAlign: "right" }}>
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
            <Link to={'/profile'} className='nav-link px-0 align-middle'>
           <div className="profile">
            <img src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <h5>Ali Jawad</h5>
           </div>
           </Link>
          </div>
        </nav>

        <div className="header">
          DASHBOARD
          <h3>Blog Overview</h3>
        </div>
        <Link to={'/newHouse'} className='nav-link px-0 align-middle'>

        <button
          type="button"
          class="btn btn-dark btn-sm mb-3"
          style={{
            backgroundColor: "#262b40",
            marginRight: "18px",
            fontWeight: "bold",
          }}
        >
          {" "}
          + New House
        </button>
        </Link>
        <div className="over-all-card-itmes">
          
          <div class="card">
            <div
              class="card-content"
              style={{
                background: "url(" + chart1 + ") no-repeat ",
                backgroundSize: "170px",
                backgroundPosition: "bottom",
              }}
            >
              <div className="sub-title"> Homes </div>
              <div className="title">SALES</div>
              <div className="count">34</div>
            </div>
          </div>

          <div class="card">
            <div
              class="card-content"
              style={{
                background: "url(" + chart2 + ") no-repeat ",
                backgroundSize: "170px",
                backgroundPosition: "bottom",
              }}
            >
              <div className="sub-title"> Homes </div>
              <div className="title">RENT</div>
              <div className="count">22</div>
            </div>
          </div>

          <div class="card">
            <div
              class="card-content"
              style={{
                background: "url(" + chart3 + ") no-repeat ",
                backgroundSize: "170px",
                backgroundPosition: "bottom",
              }}
            >
              <div className="sub-title"> Homes </div>
              <div className="title">SOLD</div>
              <div className="count">10</div>
            </div>
          </div>

          <div class="card">
            <div
              class="card-content"
              style={{
                background: "url(" + chart4 + ") no-repeat ",
                backgroundSize: "170px",
                backgroundPosition: "bottom",
              }}
            >
              <div className="sub-title"> Homes </div>
              <div className="title">RENT</div>
              <div className="count">9</div>
            </div>
          </div>
        </div>

        <div className="latest-houses">
          <div className="title-Latest">Latest Houses</div>
      
    <div className="card-row">
        <div class="circle-image"></div>
        <div class="title-card">
            <h5>Ahmed Jasem</h5>
            <p>Distance 150 km, location </p>
        </div>
        <div className="space"></div>
        <div className=" type-rent">  RENT </div>
    </div>

  <div className="card-row">
        <div class="circle-image"></div>
        <div class="title-card">
            <h5>Ahmed Jasem</h5>
            <p>Distance 150 km, location </p>
        </div>
        <div className="space"></div>
        <div className=" type-sale">  SALE </div>
    </div>

  <div className="card-row">
        <div class="circle-image"></div>
        <div class="title-card">
            <h5>Ahmed Jasem</h5>
            <p>Distance 150 km, location </p>
        </div>
        <div className="space"></div>
        <div className=" type-rent">  RENT </div>
    </div>

    <div className="card-row">
        <div class="circle-image"></div>
        <div class="title-card">
            <h5>Ahmed Jasem</h5>
            <p>Distance 150 km, location </p>
        </div>
        <div className="space"></div>
        <div className=" type-sale">  SALE </div>
    </div>

    <div className="card-row">
        <div class="circle-image"></div>
        <div class="title-card">
            <h5>Ahmed Jasem</h5>
            <p>Distance 150 km, location </p>
        </div>
        <div className="space"></div>
        <div className=" type-sale">  SALE </div>
    </div>

    

        </div>
      </div>
    );
  }
}

export default Home2;

/*

*/
