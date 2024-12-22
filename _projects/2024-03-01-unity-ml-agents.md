---
title: "Unity ML-Agents with Walking Robot using Curriculum Training"
collection: projects
permalink: /projects/unity-ml-walking-robot/
excerpt: 'Developed a phased curriculum training approach to enhance AI walking and navigation in complex environments using Unity ML-Agents.'
date: 2024-03-01
venue: 'New York University'
header:
  teaser: "unity-walking-robot.png"
---

The **Unity ML-Agents with Walking Robot** project showcases the application of curriculum training to progressively train an AI agent for walking and navigation in dynamic and complex environments. Using Unity's ML-Agents toolkit, the project employs the Proximal Policy Optimization (PPO) algorithm to systematically improve the agent’s performance through structured training phases. The integration of ray perception for obstacle detection further enhances the agent's ability to navigate efficiently.

### Overview
The project is divided into multiple training phases, starting with basic navigation tasks in simple environments and advancing to complex scenarios that require balance, posture control, and dynamic obstacle avoidance. The initial phase focuses on teaching the agent to reach target locations in an environment with minimal distractions. Subsequent phases introduce more challenging tasks, such as walking while maintaining balance and navigating through environments with dynamic obstacles and checkpoints.

The phased training approach allows the agent to build foundational skills before progressing to more difficult challenges, ensuring faster convergence and better overall performance. By leveraging ray perception, the agent effectively detects and avoids obstacles, showcasing significant advancements in its ability to adapt to real-world conditions.

### Technical Details
The project leverages Unity's capabilities for creating realistic training environments and Python-based ML-Agents for reinforcement learning. It includes detailed installation and setup instructions, enabling other researchers and developers to replicate the training process. A virtual environment with Python 3.9 is used to manage dependencies, and the project supports both CPU and GPU-based training, offering flexibility for various hardware configurations. 

The use of the PPO algorithm optimizes the agent’s policy over time, resulting in substantial improvements in navigation and balance efficiency. Optimizing neural network architectures and hyperparameters further reduces training time, highlighting the project's focus on both effectiveness and efficiency.

### Applications and Impact
The Unity ML-Agents with Walking Robot project demonstrates the practical application of reinforcement learning techniques to robotics and AI training. The results include a 35% improvement in obstacle avoidance efficiency and a 25% reduction in training time, indicating the effectiveness of curriculum training in achieving robust and adaptable AI behaviors. This project has potential applications in autonomous robotics, gaming, and simulation-based training systems, offering insights into scalable approaches for real-world AI challenges.

For more information, including the repository and implementation details, visit the project on [GitHub](https://github.com/MissTiny/RL_robot).
