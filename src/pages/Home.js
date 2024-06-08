import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";

// https://sustautodrive.000webhostapp.com/
// 2020339001@Raj/RUET

export default function Home() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing the video
    }
  };

  return (
    <div>
      {/* Static Background Section */}
      <div
        className="card text-bg-dark"
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      >
        <video
          src="/images/v1.mp4"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          alt="Car"
          autoPlay
          muted
          onEnded={handleVideoEnded}
        />
        <div className="card-img-overlay">
          <div className="runningMission">
            <div className="orm">Our upcoming Mission</div>
            <div className="adc">Auto drive car</div>
            <Link to="/detailsRunMis">
              {" "}
              {/* Use Link to navigate to About page */}
              <button className="button">
                <span>Know more</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Section 1 */}
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000" // Set the interval to 4000 milliseconds (4 seconds)
        data-bs-pause="false" // Continue sliding on hover
      >
        <div className="carousel-inner">
          {["car.avif", "car.avif", "car.avif"].map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ width: "100%", height: "100vh", overflow: "hidden" }}
            >
              <img
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                src={`/images/${image}`}
                className="d-block w-100"
                alt="Car"
              />
            </div>
          ))}
          <div className="card-img-overlay">
            <div className="up">
              <div className="orm">Our upcoming Mission</div>
              <div className="adc">Auto drive car</div>
              <Link to="/detailsUpMis">
                {" "}
                {/* Use Link to navigate to About page */}
                <button className="button">
                  <span>Know more</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Carousel Section 2 */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000" // Set the interval to 5000 milliseconds (5 seconds)
        data-bs-pause="false" // Continue sliding on hover
      >
        <div className="carousel-indicators">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {["car.avif", "RRR.jpg", "car.avif"].map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ width: "100%", height: "100vh", overflow: "hidden" }}
            >
              <img
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                src={`/images/${image}`}
                className="d-block w-100"
                alt="Car"
              />
              <div className="card-img-overlay">
                <div className="carousel-caption d-none d-md-block">
                  <Link
                    to="/detailsUpMis"
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <h3>Our Previous missions</h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
