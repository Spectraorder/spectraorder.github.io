---
title: "Night Walker with Raspberry Pi-Controlled Viam Rover"
collection: projects
permalink: /projects/night-walker-viam-rover/
excerpt: "Developed an autonomous robot equipped with a TensorFlow Lite model for object detection and navigation in low-light environments."
date: 2023-12-01
venue: "Independent Research"
header:
  teaser: "night-walker-robot.png"
---

The **Night Walker Robot** project represents an innovative advancement in robotics, combining machine learning and real-time adaptability for autonomous navigation in low-light conditions. Using a Raspberry Pi-controlled Viam Rover as the hardware platform, the project deployed a custom-trained TensorFlow Lite model for object detection, enabling the robot to identify obstacles and navigate effectively even in challenging environments.

### Overview
This project aimed to address the limitations of autonomous robots in low-visibility settings. By leveraging TensorFlow Lite and Viam's vision services, the Night Walker Robot was designed to process real-time visual input, detect objects, and make navigation decisions autonomously. The robot's adaptability to extremely dark environments marked a significant achievement in enhancing its reliability and reducing navigation error rates.

The project began with custom dataset collection using a transformer camera module to capture images of tracks and obstacles. Objects were labeled with green sticky notes to improve visibility during training. The TensorFlow Lite model was optimized for deployment on lightweight hardware like the Raspberry Pi, ensuring efficient operation without compromising performance.

### Technical Achievements
The TensorFlow Lite model was trained and optimized using custom datasets, resulting in a 30% improvement in navigation accuracy. By integrating the trained model with Viam's vision service, the robot achieved a 15% reduction in error rates in low-light conditions. The model's deployment on the Raspberry Pi ensured seamless and efficient navigation capabilities, even in resource-constrained environments.

### Applications and Impact
The Night Walker Robot demonstrates the potential of machine learning in robotics, particularly for tasks requiring robust performance in challenging conditions. Its ability to navigate autonomously in low-light environments opens possibilities for applications in security, search-and-rescue operations, and nighttime exploration. The project's methodology also provides a framework for integrating ML models with lightweight hardware and vision services, paving the way for more accessible and scalable robotic solutions.

For more details, including the dataset and implementation resources, visit the [GitHub repository](https://github.com/Spectraorder/night-walker).
