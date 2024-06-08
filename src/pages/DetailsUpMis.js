import React from "react";
import { useRef } from "react";

export default function DetailsUpMis() {
  const videoRef = useRef(null);
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing the video
    }
  };

  return (
    <div className="px-4 pt-5">
      <div className="card text-bg-dark mt-5" style={{ width: "100%" }}>
        <h2 className="ps-4 mt-4 pb-2">Town 3D map</h2>
        <video
          src="/images/v2.mp4"
          style={{ width: "100%" }}
          alt="Car"
          autoPlay
          muted
          onEnded={handleVideoEnded}
          controls
        />
        <div className="fs-4 px-3 py-3">
          There are two way for developing Autonomous driving system. These are
          with HD map and without any kind of HD map. Most of the company use HD
          map as its perception and localization is high and need less data
          while tesla run there cars without HD map. <br />
          <br /> Using lidar mapping with ground truth localization is a
          powerful method for accurately mapping environments. Lidar provides
          high-resolution 3D scans of the surroundings, while ground truth
          localization ensures precise positioning data, typically achieved
          through GPS or other sensor fusion techniques. By combining these two
          technologies, you can create detailed maps with accurate spatial
          information, which is invaluable for applications such as autonomous
          vehicles, robotics, and urban planning. <br />
          <br />
          Github:
          <a href="https://github.com/carla-simulator/ros-bridge">
            https://github.com/carla-simulator/ros-bridge
          </a>
          <br />
          Github:{" "}
          <a href="https://github.com/OctoMap">https://github.com/OctoMap</a>
          <br /> #SUST_Autodrive #ROS #3D_mapping #autonomousdriving
        </div>
      </div>
    </div>
  );
}
