---
layout: page
title:                                                
permalink: /
---

<!-- ===== Hero Section ===== -->
<div style="text-align: center; margin-top: 30px; margin-bottom: 40px;">

  <!-- ================== Oval Profile Image with Hover Effect ================== -->
  <style>
  .profile-pic-oval {
    width: 200px;
    height: auto;
    border-radius: 50%;
    object-fit: contain;
    border: 3px solid #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .profile-pic-oval:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0,123,255,0.4);
  }

  /* Responsive layout adjustments */
  .page-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .sidebar {
    flex: 1;
    min-width: 240px;
    max-width: 280px;
    background: #f8f9fa;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    height: 750px;
  }
  .main-content {
    flex: 3.5;
    min-width: 350px;
  }

  /* Mobile: Stack columns vertically */
  @media (max-width: 768px) {
    .page-container {
      flex-direction: column-reverse;
      gap: 20px;
      padding: 0 10px;
    }
    .sidebar {
      order: 2;
      max-width: 100%;
    }
    .main-content {
      order: 1;
      max-width: 100%;
    }
    .profile-pic-oval {
      width: 160px;
    }
  }
  </style>

  <img src="{{ '/assets/images/profile.png' | relative_url }}" 
       alt="Manjunath Prasad H. R."
       class="profile-pic-oval"
       style="margin-bottom:15px;">

  <h1 style="margin-bottom: 5px;">Manjunath Prasad Holenarasipura Rajiv</h1>

  <!-- ================== Profile Summary Card ================== -->
  <div style="max-width:800px; margin:auto; background:#f8f9fa; border:1px solid #e2e6ea; border-radius:12px; box-shadow:0 2px 6px rgba(0,0,0,0.05); padding:20px; margin-top:25px;">

    <p style="font-size:0.95em; text-align:center; margin-bottom:15px;">
      <strong>Assistant Professor</strong><br>
      Department of Computer Applications<br>
      Nitte Institute of Professional Education<br>
      <span style="color:#555;">Nitte (Deemed to be University)</span>
    </p>

    <hr style="border:0; height:1px; background:#ddd; margin:10px 0;">

    <p style="font-size:0.9em; text-align:center; color:#333; margin-bottom:10px;">
      <strong>Research Interests</strong><br>
      Machine Learning · Computer Vision · Vision-Language Models
    </p>

    <p style="font-size:0.9em; color:#444; text-align:justify; line-height:1.5; margin-bottom:15px;">
      My research explores the integration of visual and linguistic representations
      for <strong>zero-shot scene understanding</strong> and <strong>context-aware multimodal learning</strong>.  
      I aim to build efficient and interpretable AI systems capable of
      reasoning across perception and language in real-world environments.
    </p>

    <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; margin-top:15px;">
      <a href="https://scholar.google.com/citations?user=5370e0oAAAAJ&hl=en" target="_blank"
         style="text-decoration:none; background:#333; color:white; padding:6px 10px; border-radius:5px; font-size:0.85em;">Google Scholar</a>
      <a href="{{ '/group/' | relative_url }}" 
         style="text-decoration:none; background:#0056b3; color:white; padding:6px 10px; border-radius:5px; font-size:0.85em;">Research Group</a>
      <a href="mailto:manjunathprasad99@gmail.com"
         style="text-decoration:none; background:#6c3483; color:white; padding:6px 10px; border-radius:5px; font-size:0.85em;">Email</a>
      <a href="{{ '/Downloads/CV_ManjunathPrasad.pdf' | relative_url }}" target="_blank"
         style="text-decoration:none; background:#198754; color:white; padding:6px 10px; border-radius:5px; font-size:0.85em;">Download CV</a>
    </div>

  </div>
</div>

---

<!-- ===== Two-Column Responsive Layout ===== -->
<div class="page-container">

  <!-- Sidebar -->
  <div class="sidebar">
    <h3>Contact</h3>
    <p style="font-size: 0.95em;">
      Nitte Institute of Professional Education<br>
      Nitte (Deemed to be University), India<br>
      <a href="mailto:manjunathprasad99@gmail.com">Email</a><br>
      <a href="https://github.com/manjunathprasad">GitHub</a><br>
      <a href="https://scholar.google.com/citations?user=5370e0oAAAAJ&hl=en">Google Scholar</a>
    </p>
    <h3>Research Interests</h3>
    <ul style="font-size: 0.95em; margin-top: 0;">
      <li>Machine Learning</li>
      <li>Deep Learning</li>
      <li>Computer Vision</li>
      <li>Vision-Language Models</li>
      <li>Cloud-AI Integration</li>
    </ul>
    <h3>Quick Links</h3>
    <ul style="font-size: 0.95em; margin-top: 0;">
      <li><a href="{{ '/group/' | relative_url }}">Research Group</a></li>
      <li><a href="{{ '/publications/' | relative_url }}">Publications</a></li>
      <li><a href="{{ '/teaching/' | relative_url }}">Teaching</a></li>
    </ul>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <p>
      I am an <strong>Assistant Professor</strong> in the Department of Computer Applications at the 
      <strong>Nitte Institute of Professional Education, Nitte (Deemed to be University)</strong>.
      My research interests include <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, 
      <strong>Computer Vision</strong>, and <strong>Vision-Language Models</strong>.
    </p>
    <p>
      I am currently exploring innovative methods to integrate visual and textual modalities for intelligent scene understanding — focusing on <strong>zero-shot learning</strong>, 
      <strong>vision-language retrieval</strong>, and <strong>context-aware multimodal reasoning</strong>. 
      Additionally, I work on <strong>Cloud-AI integration</strong>, emphasizing scalable deployment, inference optimization, and efficient fine-tuning of large pretrained models.
    </p>
    <h2>Current Research</h2>
    <ul>
      <li><strong>Vision-Language Integration for Zero-shot Scene Understanding</strong> — under review at IEEE TPAMI</li>
      <li><strong>Dynamic Context-Aware Scene Reasoning Using Vision-Language Alignment</strong> — under review at IEEE TPAMI</li>
      <li><strong>Cloud-AI Integration Projects</strong> — scalable deployment and inference optimization for deep models</li>
    </ul>
    <h2>Academic Role</h2>
    <p>
      I teach courses on <strong>Programming Languages</strong> (Python and C#) and <strong>Multi-cloud Computing</strong>. 
      As part of my academic role, I mentor student projects that connect theoretical foundations with practical, research-oriented applications.
    </p>
  </div>
</div>



<!-- <p style="text-align: center; color: #777; font-size: 0.9em; margin-top: 40px;">
  Last updated: {{ site.time | date: "%B %d, %Y" }}
</p> -->
