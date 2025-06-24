---
title: "Gaussian Visibility Field for Uncertainty Mapping"
collection: researches
permalink: /researches/gaussian-visibility/
excerpt: 'Developed the Gaussian Visibility Field (GVF) using deep learning techniques for uncertainty mapping, achieving 80% faster rendering compared to Neural Visibility Field.'
date: 2024-08-01
venue: 'NVIDIA Research'
# citation: 'Under development'
# header:
#   teaser: "gvf-research.png"
---

The **Gaussian Visibility Field (GVF)** project represents a significant advancement in uncertainty mapping for 3D environments. By combining deep learning techniques with efficient GPU parallelization, this research addresses the computational challenges in real-time visibility determination while maintaining high accuracy in uncertainty representation.

Key innovations include:
* Development of a novel Gaussian Visibility Field architecture that efficiently handles complex 3D environments
* Implementation of optimized GPU parallelization techniques resulting in 80% faster render times compared to Neural Visibility Field (NVF)
* Integration of BayesRays methodology with CUDA parallelization for robust uncertainty representation

This ongoing research at NVIDIA demonstrates promising results in both computational efficiency and accuracy, making it particularly valuable for applications in computer graphics, robotics, and autonomous systems where real-time visibility determination with uncertainty awareness is crucial.

## Related Work

This research builds upon and improves the [Neural Visibility Field (NVF)](https://sites.google.com/view/nvf-cvpr24/) work presented at CVPR 2024. While NVF pioneered the use of Bayesian networks to composite position-based field uncertainty into ray-based uncertainty for camera observations, GVF introduces Gaussian approximations and optimized GPU parallelization to achieve significant performance improvements while maintaining uncertainty estimation accuracy.

The original NVF implementation is available on [GitHub](https://github.com/GaTech-RL2/nvf_cvpr24) and was developed by researchers at Georgia Institute of Technology. Our work extends their approach by introducing more efficient computation methods while preserving the core benefits of uncertainty-driven active mapping. 