import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { Dropdown } from "react-bootstrap";

export default function Navbar() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "35%";
    document.getElementById("blur").style.width = "65%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("blur").style.width = "0%";
  };

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="/">Home</a>
        <a href="/updates">Updates</a>
        <a href="/about">About Us</a>
        <a href="/">Our Mission</a>
        <a href="/">Upcomming Events</a>
        <a href="/">Get Involved</a>
        <a href="/">Contact</a>
      </div>
      <div id="blur">
        <img
          src="/images/carE.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="..."
        />
      </div>
      <div
        id="main"
        className="px-4 py-3 fs-4 position-fixed z-2 w-100 d-flex justify-content-end"
      >
        <div className="logo text-light text-center w-50">
          <a href="/">
            {" "}
            <img src="/images/logo1.png" alt="" style={{ height: "40px" }} />
          </a>{" "}
        </div>
        <span
          style={{ cursor: "pointer" }}
          className="fw-bolder text-light w-25 text-end pe-4"
          onClick={openNav}
        >
          &#9776;
        </span>
      </div>
    </>
  );
}
