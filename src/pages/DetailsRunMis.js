import React from "react";
import { useRef } from "react";

export default function DetailsRunMis() {
  const videoRef = useRef(null);
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing the video
    }
  };

  return (
    <div>
      {" "}
      <div className="px-3 d-block d-lg-flex gap-3 pt-5">
        <div className="card text-bg-dark mt-5" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Integrating AI with Dubin</h2>
          <video
            src="/images/v1.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Integrating A* with Dubins path planning and LIDAR data would be a
            sophisticated approach to navigation in environments with obstacles.
            A* would handle the global path planning, while Dubins paths would
            generate feasible paths for the vehicle, taking into account its
            kinematic constraints. LIDAR data would provide real-time obstacle
            detection and avoidance, allowing the vehicle to adjust its path
            dynamically. This combination would enable the autonomous vehicle to
            navigate complex environments efficiently and safely.
          </div>
        </div>
      </div>
    </div>
  );
}
