import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Updates() {
  const videoRef = useRef(null);
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing the video
    }
  };

  return (
    <div>
      <div style={{ height: "72px", backgroundColor: "black" }}></div>
      {/* 1/2 */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
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

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Town 3D map</h2>
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
            There are two way for developing Autonomous driving system. These
            are with HD map and without any kind of HD map. Most of the company
            use HD map as its perception and localization is high and need less
            data while tesla run there cars without HD map. <br />
            <br /> Using lidar mapping with ground truth localization is a
            powerful method for accurately mapping environments. Lidar provides
            high-resolution 3D scans of the surroundings, while ground truth
            localization ensures precise positioning data, typically achieved
            through GPS or other sensor fusion techniques. By combining these
            two technologies, you can create detailed maps with accurate spatial
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
      {/* 2/4 */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Hybrid A* Algorithm</h2>
          <video
            src="/public/images/v3.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Hybrid A* combined with Dubins path and reversing is a sophisticated
            algorithm used for motion planning in robotics, particularly for
            vehicles with non-holonomic constraints like cars. Here's a
            breakdown of the approach:
            <br />
            1. Hybrid A* Algorithm
            <br />
            Hybrid A* is an extension of the A* algorithm tailored for vehicles
            with kinematic constraints. It uses a discretized state space and
            generates a grid of nodes representing feasible states of the
            vehicle.
            <br />
            <br />
            Steps:
            <br />
            Initialize Open and Closed lists: Start and end nodes are added to
            the open list.
            <br />
            Select Node from Open List: The node with the lowest cost is
            selected and removed from the open list.
            <br />
            Check Goal: If the node is the goal node, the path is found.
            <br />
            Generate Successors: Possible next states (nodes) are generated
            based on the vehicle's kinematic constraints.
            <br />
            Evaluate Successors: Calculate the cost and heuristic for each
            successor and add them to the open list.
            <br />
            Repeat: Continue this process until the goal is reached or no more
            nodes are left in the open list.
            <br />
            2. Dubins Path
            <br />
            Dubins path is the shortest path to connect two points for a vehicle
            with a minimum turning radius. It consists of three segments:
            <br />
            Straight Line Segment: A straight line between the initial and final
            positions.
            <br />
            Minimal Turning Radius Curves: A curve with the minimum turning
            radius that connects the initial and final orientations.
            <br />
            Straight Line Segment: Another straight line to connect the end of
            the curve to the final position.
            <br />
            3. Reversing
            <br />
            To add the ability to reverse, the vehicle can backtrack along its
            path, adding a new dimension to the state space. This means the
            vehicle can move forward or backward, and the Hybrid A* algorithm
            should consider both possibilities.
            <br />
            Implementing this algorithm requires a good understanding of vehicle
            kinematics, Dubins path calculations, and the A* algorithm. There
            are several libraries and tools available in robotics frameworks
            like ROS that can help implement this efficiently.
            <br />
            <br />
            github :{" "}
            <a href="https://lnkd.in/geqnEDcw">https://lnkd.in/geqnEDcw</a>
            <br />
            #SUST_Autodrive #ros #robotics #selfdrivingcar #pathplanning
            #algorithm
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Traditional A* algorithm</h2>
          <video
            src="/images/v4.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            The Hybrid A* algorithm is an extension of the traditional A*
            algorithm, specifically designed for motion planning in continuous
            state spaces, such as those encountered in self-driving cars and
            robotics. It's particularly useful when dealing with
            high-dimensional state spaces and complex environments. Here's a
            simplified overview of how it works: <br />
            1. Discretization: The algorithm discretizes the continuous state
            space into a grid, similar to traditional A*. <br />
            2. Graph Search: It then performs a graph search using A* on the
            discretized grid to find an initial feasible path from the start to
            the goal. <br />
            3. Recovery and Refinement: Unlike traditional A*, Hybrid A*
            incorporates a continuous state-space search phase to refine the
            initial path found in the grid search. This phase involves using
            numerical optimization techniques to iteratively improve the path in
            the continuous space, ensuring smoother trajectories and better
            handling of vehicle dynamics. <br />
            4. Cost Evaluation: Throughout the search process, Hybrid A*
            evaluates the cost of each candidate path based on factors such as
            distance, vehicle dynamics, and obstacle avoidance. <br />
            5. Optimization: The algorithm aims to find the optimal path while
            considering both feasibility and optimality in terms of the defined
            cost function. Overall, Hybrid A* combines the benefits of
            grid-based search with continuous space refinement, making it
            well-suited for real-world applications where accuracy, efficiency,
            and smooth trajectory planning are essential, such as self-driving
            cars navigating complex environments. <br />
            <br /> #SUST_Autodrive #pathplanning #algorithm
          </div>
        </div>
      </div>
      {/* 3/6 */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Stanley control algorithm</h2>
          <video
            src="/public/images/v5.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            The Stanley control (Front wheel feedback) algorithm is a pioneering
            approach used in self-driving cars to navigate off-road terrains and
            follow predefined paths. Here's an overview of how it works:
            <br />
            1. Global Path Planning: The algorithm begins with a global path
            planned using GPS waypoints or other navigation systems. This path
            defines the desired trajectory for the vehicle.
            <br />
            2. Localization: The vehicle's position is determined using sensors
            such as GPS, IMU (Inertial Measurement Unit), and wheel encoders.
            This information is crucial for the vehicle to know where it is
            relative to the planned path.
            <br />
            3. Error Calculation: The Stanley algorithm calculates two main
            errors: lateral error and heading error. Lateral error measures the
            distance between the vehicle's actual position and the nearest point
            on the planned path. Heading error represents the difference between
            the vehicle's orientation and the tangent of the planned path at the
            nearest point.
            <br />
            4. Control Strategy: Using the calculated errors, the algorithm
            generates steering commands to keep the vehicle on the desired path.
            The steering commands are typically proportional to the lateral
            error and inversely proportional to the vehicle's speed, aiming to
            minimize both lateral and heading errors.
            <br />
            5. Feedback Control: The Stanley controller continuously adjusts
            steering commands based on real-time sensor feedback, allowing the
            vehicle to dynamically respond to changes in the environment and
            maintain stable navigation.
            <br />
            6. Integration with Perception Systems: The Stanley algorithm can be
            integrated with perception systems such as LIDAR, cameras, and radar
            to detect obstacles and adjust the planned path accordingly,
            ensuring safe navigation in complex environments.
            <br />
            Overall, the Stanley control algorithm has been influential in the
            development of self-driving cars, providing a robust framework for
            path following and navigation in challenging off-road conditions.
            <br />
            <br />
            #SUST_Autodrive #selfdrivingcars
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Solidworks Design</h2>
          <video
            src="/images/v6.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Our roads could be on the verge of a revolution with the rise of
            autonomous vehicles (AVs). These self-driving cars hold the promise
            of a dramatic decrease in accidents, thanks to their ability to
            follow traffic laws flawlessly and react faster than humans. Traffic
            congestion could become a distant memory as AVs communicate with
            each other and infrastructure, leading to smoother traffic flow.
            <br />
            Imagine a world where everyone has access to transportation,
            regardless of age or ability. AVs could offer a lifeline of
            independence for those who can't drive themselves. The environment
            could also benefit with the potential for cleaner-burning, more
            efficient AVs and a reduction in traffic-related emissions. Of
            course, challenges remain. We need clear regulations and robust
            cybersecurity measures to ensure safe and ethical development of AV
            technology. The potential impact on jobs in the traditional
            transportation sector also requires attention.
            <br />
            Despite these hurdles, the potential of AVs to create a safer, more
            accessible, and environmentally friendly transportation system is
            undeniable.
            <br />
            <br />
            #RoadSafety #AccidentPrevention #AutonomousSafety #SUST_Autodrive
          </div>
        </div>
      </div>
      {/* 4/8 */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Pure Pursuit control</h2>
          <video
            src="/public/images/v7.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            The Pure Pursuit control system is a path tracking algorithm
            commonly used in autonomous vehicles. Here's how it generally works:
            <br />
            1. Target Path: The system requires a predefined path for the
            vehicle to follow. This path is typically represented as a series of
            waypoints or reference points.
            <br />
            2. Current Vehicle Position: The system continuously monitors the
            vehicle's position using sensors such as GPS, LiDAR, or cameras.
            <br />
            3. Lookahead Point: The control algorithm calculates a lookahead
            point on the path based on the vehicle's current position and
            velocity. This lookahead point represents where the vehicle should
            be at a future time.
            <br />
            4. Target Point Selection: The algorithm selects a target point on
            the path based on the lookahead point. This target point is usually
            the closest point to the lookahead point that the vehicle can
            realistically reach.
            <br />
            5. Steering Angle Calculation: Once the target point is determined,
            the Pure Pursuit algorithm calculates the steering angle required
            for the vehicle to reach the target point. This calculation is based
            on the geometry of the vehicle and the desired path.
            <br />
            6. Adjustment and Feedback: The calculated steering angle is then
            used to control the vehicle's steering system. The process repeats
            continuously, with the control system updating the steering angle
            based on the vehicle's current position and the target point on the
            path.
            <br />
            Overall, the Pure Pursuit control system enables autonomous vehicles
            to smoothly track a predefined path by adjusting the steering angle
            in real-time based on the vehicle's position and the desired
            trajectory.
            <br />
            <br />
            #SUST_Autodrive #selfdrivingcars
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Object recognition</h2>
          <video
            src="/images/v8.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Object recognition by rectangle filtering is a fundamental and
            indispensable component of the perception and decision-making
            systems in self-driving cars. It plays a pivotal role in ensuring
            the safety, efficiency, and reliability of autonomous vehicles,
            making it a crucial area of research and development in the field of
            autonomous driving. Here are the key reasons why it's essential:
            <br />
            1. Safety: Safety is the foremost concern in autonomous driving.
            Accurate object recognition allows the self-driving car to identify
            and avoid potential hazards, such as other vehicles, pedestrians,
            cyclists, and obstacles. This capability is vital for preventing
            accidents and ensuring the safety of passengers and other road
            users.
            <br />
            2. Object Detection and Tracking: Rectangle filtering enables the
            detection and tracking of various objects in the vehicle's
            environment. This information is essential for the autonomous car to
            understand the dynamics of the traffic scene, predict the movements
            of other objects, and make informed driving decisions.
            <br />
            3. Navigation and Path Planning: Accurate object recognition and
            tracking are crucial for effective navigation and path planning. By
            understanding the position, size, and movement of objects in its
            surroundings, the self-driving car can plan and execute optimal
            routes, navigate complex traffic scenarios, and safely interact with
            other road users.
            <br />
            4. Enhanced Perception and Situational Awareness: Rectangle
            filtering enhances the car's perception capabilities by providing a
            structured and organized representation of the environment. This
            structured data is easier to analyze and interpret, enabling the
            car's onboard computer to have a more comprehensive and accurate
            situational awareness, which is essential for making real-time
            driving decisions.
            <br />
            5. Adaptive and Predictive Driving: With object recognition and
            tracking, the self-driving car can adapt its driving behavior in
            real-time based on the detected objects and their predicted
            movements. For instance, the car can adjust its speed, change lanes,
            or make emergency stops to avoid collisions and ensure safe and
            smooth driving.
            <br />
            <br />
            #sust_autodrive #selfdrivingcars #AutonomousDriving
          </div>
        </div>
      </div>
      {/* 5/10 */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">
            Reinforcement Learning environments
          </h2>
          <video
            src="/public/images/v9.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Reinforcement Learning environments and custom Computer-Aided Design
            models play crucial roles in the development and testing of
            self-driving systems. SUST Autodrive co-lead Ad-Deen Mahbub build
            this environmental setup for training our model.
            <br />
            RL Environments:
            <br />
            RL environments simulate real-world scenarios where self-driving
            algorithms can learn and adapt through trial and error.
            <br />
            These environments allow developers to train and evaluate the
            performance of self-driving algorithms in a safe and controlled
            manner. They can include various factors such as different road
            conditions, weather conditions, traffic scenarios, and pedestrian
            behavior. RL environments enable the reinforcement learning
            algorithm to learn optimal policies for driving tasks by providing
            feedback based on the actions taken by the agent.
            <br />
            <br />
            Custom CAD Models:
            <br />
            CAD models are used to design virtual representations of vehicles,
            road infrastructure, and other elements of the environment.
            <br />
            Custom CAD models allow developers to create highly detailed and
            realistic virtual environments for testing self-driving algorithms.
            <br />
            These models can accurately simulate the physical properties and
            interactions of objects, such as friction, collision detection, and
            vehicle dynamics.
            <br />
            By using custom CAD models, developers can recreate specific
            real-world scenarios and conditions that may be difficult or
            dangerous to replicate in the real world.
            <br />
            Custom CAD models also enable developers to iteratively refine and
            optimize the design of self-driving systems before deploying them in
            real-world settings.
            <br />
            <br />
            #SUST_Autodrive #selfdrivingcars #ReinforcementLearning
            #AutonomousDriving
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Simulation</h2>
          <video
            src="/images/v10.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Model Predictive Control (MPC) is a popular control strategy used in
            many applications, including autonomous or self-driving cars. MPC is
            an advanced method of process control that uses a dynamic model of
            the system to predict future behavior and optimize control inputs
            over a specified prediction horizon. In the context of self-driving
            cars, MPC can be used to plan a trajectory that takes into account
            various constraints and objectives, such as avoiding obstacles,
            staying within lane boundaries, and reaching a desired destination.
            <br />
            Here is a high-level overview of how MPC can be used for controlling
            a self-driving car:
            <br />
            MPC for Self-Driving Cars:
            <br />
            State and Input Definitions:
            <br />
            State Variables: These could include the position, velocity,
            orientation, and other relevant parameters of the vehicle.
            <br />
            Control Inputs: These are the actions that can be applied to the
            vehicle, such as steering angle, throttle, and braking.
            <br />
            Dynamic Model:
            <br />A mathematical model that describes the evolution of the state
            variables over time. This model should capture the dynamics of the
            vehicle accurately.
            <br />
            Cost Function:
            <br />A cost function is defined to optimize the control inputs. The
            cost function can be designed to minimize the deviation from the
            desired trajectory, ensure smoothness of control inputs, and satisfy
            various constraints such as avoiding collisions or staying within
            lane boundaries.
            <br />
            Constraints:
            <br />
            State Constraints: These could include bounds on the position,
            velocity, and orientation of the vehicle.
            <br />
            Input Constraints: These could include bounds on the steering angle,
            throttle, and braking inputs.
            <br />
            Safety Constraints: These could include constraints to avoid
            collisions with obstacles or other vehicles.
            <br />
            Prediction Horizon:
            <br />A finite time horizon over which the future states and inputs
            are predicted. This horizon determines the planning depth of the
            MPC.
            <br />
            Optimization:
            <br />
            At each time step, an optimization problem is solved to compute the
            optimal control inputs that minimize the cost function while
            satisfying the constraints over the prediction horizon.
            <br />
            Implementation:
            <br />
            The computed optimal control inputs are then applied to the vehicle
            to execute the planned trajectory.
            <br />
            Advantages of MPC for Self-Driving Cars:
            <br />
            Predictive Control: MPC considers future behavior and can handle
            complex dynamic constraints, making it well-suited for self-driving
            cars operating in dynamic environments.
            <br />
            Flexible Constraints Handling: MPC allows for the incorporation of
            various constraints, such as collision avoidance, lane keeping, and
            vehicle dynamics, in a unified framework.
            <br />
            Optimal Control Inputs: MPC optimizes control inputs over a
            prediction horizon, resulting in smoother and more efficient control
            compared to other methods.
            <br />
            Challenges:
            <br />
            Computational Complexity: MPC involves solving an optimization
            problem at each time step, which can be computationally intensive
            and require real-time processing capabilities.
            <br />
            Model Accuracy: The accuracy of the dynamic model used in MPC is
            crucial for the performance of the controller. Inaccurate modeling
            can lead to suboptimal or unsafe control actions.
            <br />
            Real-World Uncertainties: Handling uncertainties such as sensor
            noise, communication delays, and unpredictable behavior of other
            road users is a challenging aspect of implementing MPC in real-world
            self-driving cars.
            <br />
            #SUST_Autodrive
          </div>
        </div>
      </div>
      {/* 6/12 again */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">The real-world SUST</h2>
          <video
            src="/images/v11.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            Shahjalal University of Science and Technology's (SUST) AutoDrive
            team is making significant strides towards the future of
            transportation with the development of an autonomous car. To propel
            our research and development efforts, we have created a virtual
            training ground using Blender, a powerful 3D creation software.
            <br />
            The real-world SUST kiloroad, known for its diverse traffic patterns
            and controlled environment, will be the inspiration for the virtual
            training ground. This digital replica will allow the SUST AutoDrive
            team to:
            <br />
            Safely Test Autonomous Systems:
            <br />
            The virtual test track eliminates the risks associated with
            real-world testing, enabling the team to experiment with various
            driving scenarios and algorithms without jeopardizing safety.
            <br />
            Simulate Complex Traffic Conditions:
            <br />
            The virtual environment can be meticulously crafted to include
            elements like traffic lights, pedestrians, cyclists, and different
            weather conditions. This allows for comprehensive testing of the
            autonomous car's ability to handle diverse situations.
            <br />
            Efficiently Gather Data:
            <br />
            The virtual test track provides a controlled platform to collect
            valuable data on the performance of the autonomous car's systems.
            This data can then be used to refine algorithms and improve overall
            functionality.
            <br />
            The creation of the virtual SUST kiloroad represents the initial
            phase of SUST AutoDrive's project. We can expect to see the team
            leverage the data and insights gained from the virtual environment
            to refine their autonomous car's capabilities. The ultimate goal is
            likely the transition to real-world testing on the physical SUST
            kiloroad, paving the way for a future of intelligent vehicles in
            Bangladesh.
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Town 3D map</h2>
          <video
            src="/images/v12.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            SUST Autodrive is a research and innovation team on self-driving
            technology of Shahjalal University of Science and Technology.
            <br />
            SUST Autodrive's mission is to be the hub of autonomous driving
            technology in Bangladesh. It is the place where innovative minds
            come to learn about the challenges of deploying software on a
            full-scale autonomous car. We collaborate with global leaders in
            autonomous driving technology to develop more advanced and safer
            technology for the road. Our goal is to develop an autonomous car
            and achieve level four autonomy for the critical road condition of
            Bangladesh.
            <br />
            We partner with companies that also have the same interest as us in
            developing advanced autonomous driving technology.We offer a variety
            of opportunities for our sponsors as well. We are aiming to
            participate in autonomous driving challenges all over the world.
            <br />
            Developing and testing robust autonomous driving (AD) models
            requires a comprehensive approach that addresses all crucial aspects
            – perception, localization, planning, and control. These four
            pillars work in concert, with each stage building upon the previous
            one.
            <br />
            Perception:
            <br />
            This initial stage acts as the "eyes" of the vehicle, gathering
            real-world data through sensors like LiDAR, cameras, and radar. This
            data needs to be accurately interpreted to understand the
            surrounding environment, including objects like vehicles,
            pedestrians, and traffic signals.
            <br />
            Localization:
            <br />
            Here, the AD model determines the vehicle's precise location within
            the environment. By leveraging data from GPS, LiDAR, and odometry
            (measuring distance traveled), the model builds a map of its
            surroundings and pinpoints its own position within that map.
            <br />
            Trajectory Planning:
            <br />
            Once the vehicle "sees" its environment and knows its location, it
            needs to plan a safe and efficient path to its destination. This
            stage involves factors like traffic rules, obstacle avoidance, and
            optimizing for smooth navigation.
            <br />
            Control:
            <br />
            Finally, the planned trajectory translates into real-world actions.
            The control system sends commands to the vehicle's steering,
            acceleration, and braking systems to execute the planned path while
            maintaining safety and stability.
            <br />
            Leveraging nuScenes for Real-Life Testing
            <br />
            nuScenes provides a valuable resource for evaluating and testing AD
            models with real-world data. This dataset captures diverse driving
            scenarios in a variety of weather conditions and lighting
            situations.
            <br />
            The nuScenes2bag conversion tool plays a critical role by
            transforming the data into a ROS (Robot Operating System) bag file
            format. This standardized format allows for easier visualization and
            integration with various robotics toolkits and simulation platforms.
            <br />
            By incorporating these enhancements, we'll create a more informative
            and comprehensive explanation of how real-life data from nuScenes,
            facilitated by the nuScenes2bag conversion, plays a crucial role in
            evaluating and testing autonomous driving models.
          </div>
        </div>
      </div>
      {/* 7/14  again*/}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Autonomus</h2>
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
            <br />
            Civil and Geographical team is creating a 3D environment of SUST for
            reinforcement learning.
            <br />
            Obaidul Islam Milu is trying to recreate SUST map for our simulation
            environment.
            <br />
            Reinforcment Learning is crucial in developing self-driving cars;
            enabling them to make decisions in real-time traffic scenarios.
            Environments are essential for training RL agents. They provide the
            necessary feedback loop, allowing the agent to learn from its
            actions and improve its policy over time. The complexity and
            diversity of these environments can greatly influence the learning
            process and the performance of the trained agent. The agent’s
            objective is to learn a policy that maximises the expected
            cumulative reward. The environment plays a crucial role in this
            process by providing the agent with rewards and new states, which
            are used to update the agent’s policy.
            <br />
            <br />
            #SUST_Autodrive
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Town 3D map</h2>
          <video
            src="/images/v14.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            SUST Autodrive tasted the basic software architecture for a
            self-driving car and became successful with it.
            <br />
            We applied machine learning techniques and computer vision
            algorithms with proper control theory. As our simulation works
            properly, we are aiming to develop Bangladesh's first self-driving
            car in real life as soon as possible.
            <br />
            We are aiming to collaborate with companies with the same interests
            to make the first self-driving car in Bangladesh and achieve level 4
            autonomy.
            <br />
            <br />
            #SUST_Autodrive
          </div>
        </div>
      </div>
      {/* 8/16 */}
      <div className="px-3 d-block d-lg-flex gap-3">
        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Model Predictive Control (MPC)</h2>
          <video
            src="/images/v15.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          />
          <div className="fs-4 px-3 py-3">
            <br />
            Model Predictive Control (MPC) is a popular control strategy used in
            many applications, including autonomous or self-driving cars. MPC is
            an advanced method of process control that uses a dynamic model of
            the system to predict future behavior and optimize control inputs
            over a specified prediction horizon. In the context of self-driving
            cars, MPC can be used to plan a trajectory that takes into account
            various constraints and objectives, such as avoiding obstacles,
            staying within lane boundaries, and reaching a desired destination.
            <br />
            Here is a high-level overview of how MPC can be used for controlling
            a self-driving car:
            <br /> <br />
            MPC for Self-Driving Cars:
            <br />
            State and Input Definitions:
            <br /> <br />
            State Variables: These could include the position, velocity,
            orientation, and other relevant parameters of the vehicle.
            <br />
            <br />
            Control Inputs: These are the actions that can be applied to the
            vehicle, such as steering angle, throttle, and braking.
            <br />
            <br />
            Dynamic Model:
            <br />
            <br />A mathematical model that describes the evolution of the state
            variables over time. This model should capture the dynamics of the
            vehicle accurately.
            <br />
            <br />
            Cost Function:
            <br />A cost function is defined to optimize the control inputs. The
            cost function can be designed to minimize the deviation from the
            desired trajectory, ensure smoothness of control inputs, and satisfy
            various constraints such as avoiding collisions or staying within
            lane boundaries.
            <br />
            <br />
            Constraints:
            <br />
            State Constraints: These could include bounds on the position,
            velocity, and orientation of the vehicle.
            <br />
            Input Constraints: These could include bounds on the steering angle,
            throttle, and braking inputs.
            <br />
            Safety Constraints: These could include constraints to avoid
            collisions with obstacles or other vehicles.
            <br />
            <br />
            Prediction Horizon:
            <br />A finite time horizon over which the future states and inputs
            are predicted. This horizon determines the planning depth of the
            MPC.
            <br />
            <br />
            Optimization:
            <br />
            At each time step, an optimization problem is solved to compute the
            optimal control inputs that minimize the cost function while
            satisfying the constraints over the prediction horizon.
            <br />
            <br />
            Implementation:
            <br />
            The computed optimal control inputs are then applied to the vehicle
            to execute the planned trajectory.
            <br />
            <br />
            Advantages of MPC for Self-Driving Cars:
            <br />
            <br />
            Predictive Control: MPC considers future behavior and can handle
            complex dynamic constraints, making it well-suited for self-driving
            cars operating in dynamic environments.
            <br />
            <br />
            Flexible Constraints Handling: MPC allows for the incorporation of
            various constraints, such as collision avoidance, lane keeping, and
            vehicle dynamics, in a unified framework.
            <br />
            <br />
            Optimal Control Inputs: MPC optimizes control inputs over a
            prediction horizon, resulting in smoother and more efficient control
            compared to other methods.
            <br />
            <br />
            Challenges:
            <br />
            <br />
            Computational Complexity: MPC involves solving an optimization
            problem at each time step, which can be computationally intensive
            and require real-time processing capabilities.
            <br />
            <br />
            Model Accuracy: The accuracy of the dynamic model used in MPC is
            crucial for the performance of the controller. Inaccurate modeling
            can lead to suboptimal or unsafe control actions.
            <br />
            <br />
            Real-World Uncertainties: Handling uncertainties such as sensor
            noise, communication delays, and unpredictable behavior of other
            road users is a challenging aspect of implementing MPC in real-world
            self-driving cars.
            <br />
            <br />
            <br />
            #SUST_Autodrive
          </div>
        </div>

        <div className="card text-bg-dark mt-3" style={{ width: "100%" }}>
          <h2 className="ps-4 pt-3 pb-2">Rolls Royce</h2>
          {/* <video
            src="/images/v14.mp4"
            style={{ width: "100%" }}
            alt="Car"
            autoPlay
            muted
            onEnded={handleVideoEnded}
            controls
          /> */}
          <img src="images/RRR.jpg" alt="" />
          <div className="fs-4 px-3 py-3">#SUST_Autodrive</div>
        </div>
      </div>
    </div>
  );
}
