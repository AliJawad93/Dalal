import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebarcss.css";

const SideBar = () => {
  const [selectedLink, setSelectedLink] = useState("/Home2");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <>
      <div class="col-auto col-md-3 col-xl-2  px-0 sidebar">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-1 pt-3 text-white min-vh-100">
          <a
            href="/"
            class="d-flex align-items-center px-3 pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline">Menu</span>
          </a>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <Link
                to="/Home2"
                className={`nav-link px-0 align-middle cardItem ${
                  selectedLink === "/Home2" ? "selectedCardItem" : ""
                }`}
                style={{color:"white"}}
                onClick={() => handleLinkClick("/Home2")}
              >
                <i class={`ms-3 fs-4 bi ${
                  selectedLink === "/Home2" ? "bi-pie-chart-fill" : "bi-pie-chart"
                }`}></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Home</span>{" "}
              </Link>
            </li>

            <li>
              <Link
                to="/page1"
                className={`nav-link px-0 align-middle cardItem ${
                  selectedLink === "/page1" ? "selectedCardItem" : ""
                }`}
                style={{color:"white"}}
                onClick={() => handleLinkClick("/page1")}
              >
                <i class={`ms-3 fs-4 ${
                  selectedLink === "/page1" ? "bi-house-fill" : "bi-house"
                } `}></i>{"  "}
                <span class="ms-1 d-none d-sm-inline">Houses For Sale</span>{" "}
              </Link>
            </li>

            <li>
              <Link to="/page2"  className={`nav-link px-0 align-middle cardItem ${
                  selectedLink === "/page2" ? "selectedCardItem" : ""
                }`}
                style={{color:"white"}}
                onClick={() => handleLinkClick("/page2")}>
                <i class={`ms-3 fs-4 ${
                  selectedLink === "/page2" ? "bi-house-fill" : "bi-house"
                } `}></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Houses For Rent</span>{" "}
              </Link>
            </li>

            <li>
              <Link to="/page3"  className={`nav-link px-0 align-middle cardItem ${
                  selectedLink === "/page3" ? "selectedCardItem" : ""
                }`}
                style={{color:"white"}}
                onClick={() => handleLinkClick("/page3")}>
                <i class={`ms-3 fs-4 ${
                  selectedLink === "/page3" ? "bi-house-x-fill" : "bi-house-x"
                }`}></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Sold Houses </span>{" "}
              </Link>
            </li>

            <li>
              <Link to="/page4" className={`nav-link px-0 align-middle cardItem ${
                  selectedLink === "/page4" ? "selectedCardItem" : ""
                }`}
                style={{color:"white"}}
                onClick={() => handleLinkClick("/page4")}>
                <i class={`ms-3 fs-4 ${
                  selectedLink === "/page4" ? "bi-house-x-fill" : "bi-house-x"
                }`}></i>{" "}
                <span class="ms-1 d-none d-sm-inline">Rent Houese</span>{" "}
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default SideBar;
