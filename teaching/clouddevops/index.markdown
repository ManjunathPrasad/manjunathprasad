---
layout: page
title: Cloud DevOps
permalink: /teaching/clouddevops/
---
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">


<style>
  body {
    font-family: 'Inter', sans-serif;
  }
</style>


<div style="max-width:950px; margin:auto;">

<!-- ================== Course Header ================== -->
<div style="background:#f8f9fa; border-radius:10px; padding:25px; border:1px solid #e2e6ea; box-shadow:0 2px 6px rgba(0,0,0,0.05); margin-bottom:30px;">
  <!-- <h2 style="margin-top:0;">Cloud DevOps</h2> -->
  <p><strong>Course Code:</strong> 22PCA611</p>
  <p><strong>Semester:</strong> Spring 2026</p>
  <p><strong>Duration:</strong> Jan 2026 – May 2026</p>
  <p><strong>Course Syllabus:</strong><a href="/Downloads/Syllabus/22PCA611_Cloud_Native_DevOps_Syllabus.pdf">22PCA611-Syllabus</a></p>
  <p style="text-align:justify;">
    In this course, we will explore the concepts, principles, and best practices related to cloud native
development and DevOps methodologies. If you have a aim to become software developer, system
administrator, or IT professional, this course will provide you with valuable insights and practical
knowledge to excel in the world of cloud native DevOps.
  </p>
</div>

<!-- ================== Reference Books ================== -->
<div style="margin-bottom:35px;">
  <h3>Text Book</h3>
  <ol>
    <li><strong>AWS Certified DevOps Engineer - Professional Certification and Beyond</strong><br>
        Adam Book, Packt, Nov. 2021.<br>
        <a href="https://www.packtpub.com/en-in/product/aws-certified-devops-engineer-professional-certification-and-beyond-9781801071512">Publisher Link</a>
        
    </li>
  </ol>
</div>

<!-- ================== Announcements ================== -->
<div style="margin-bottom: 16px;">
  <div style="background:#f8f9fa; border-radius:10px; border-left:5px solid #C0392B; padding:20px; margin-top:40px;">
    <h3>Announcements</h3>
    <ul style="margin-top:10px;">
      <li><span style="color:blue;">10 Students are enrolled for the course</span></li>
      <!-- <li>Lab and project components will be announced before semester commencement.</li> -->
    </ul>
  </div>
</div>

<!-- ================== Course Objectives ================== -->
<div style="background:#f8f9fa; border-radius:10px; border-left:5px solid #007BFF; padding:20px; margin-bottom:30px;">
  <h3>Course Objectives</h3>
  <ul>
    <li>Implement Agile methodologies and utilize collaboration tools for software development.</li>
    <li>Deploy Continuous Integration/Continuous Development pipelines in cloud
environments</li>
    <li>Describe about the collaboration and communication.</li>
    <li>Discuss successful DevOps and CI/CD case studies for reference.</li>
    <li>Use Infrastructure as Code (IaC) best practices for software delivery.</li>
  </ul>
</div>

<!-- ================== Weekly Schedule ================== -->
<h3 id="TheoryLoc">Weekly Schedule</h3>

<!-- Total Classes Counter -->
<div style="margin:15px 0; padding:12px; background:#f4f6f8; border-left:5px solid #007BFF; border-radius:6px;">
  <strong>Total Number of Classes: 56 (14 Weeks × 4 Classes per Week)</strong>
</div>

<div style="overflow-x:auto;">
<table>
  <thead>
    <tr>
      <th style="min-width:125px;">Week</th>
      <th>Class (W#C#)</th>
      <th>Date</th>
      <th>Topics</th>
      <th>Resources</th>
    </tr>
  </thead>

  <tbody>
    <!-- Unit 1 header -->
    <tr>
      <td colspan="5" style="background:#eef6ff; font-weight:bold; padding:10px; font-size:16px;">
        Unit 1 – Introduction to DevOps
      </td>
    </tr>
    <!-- WEEK 1 -->
    <tr>
      <!-- rowspan increased to 5 to accommodate the Holiday row on 12/25 -->
      <td rowspan="5" style="min-width:105px;">Week 1<br>(Dec 22–26)</td>
      <td>W1C1</td>
      <td>12/22</td>
      <td>DevOps overview; Cloud-native concepts (syllabus-aligned)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W1C2</td>
      <td>12/23</td>
      <td>Service pillars overview: Operational Excellence; Security</td>
      <td><a href="https://www.canva.com/assignment/access?token=bGBzXaRPmb5be1UdPbd4cQ&resourceId=DAG8RwLDe5I" >Unit 1 Presentation Slides</a></td>
    </tr>
    <tr>
      <td>W1C3</td>
      <td>12/24</td>
      <td><span style="color:red">Leave — Christmas Eve</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td></td>
      <td>12/25</td>
      <td><span style="color:red">Holiday – Christmas</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td>W1C4</td>
      <td>12/26</td>
      <td>Fundamental AWS services – Setting up & accessing AWS account (conceptual)</td>
      <td>—</td>
    </tr>
    <!-- WEEK 2 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 2<br>(Dec 29–Jan 2)</td>
      <td>W2C1</td>
      <td>12/29</td>
      <td>Cloud compute in AWS – EC2, Lambda (conceptual, syllabus item)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W2C2</td>
      <td>12/30</td>
      <td>Virtual Private Cloud (VPC) networking – subnets, route tables</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W2C3</td>
      <td>12/31</td>
      <td>Route networking details & VPC concepts (syllabus)</td>
      <td>—</td>
    </tr>
    
    <tr>
      <td>W2C4</td>
      <td>01/02</td>
      <td>Cloud databases (overview) — syllabus topic</td>
      <td>—</td>
    </tr>
    <!-- WEEK 3: Unit 2 starts this week -->
    <tr>
      <td colspan="5" style="background:#e7ffe7; font-weight:bold; padding:10px; font-size:16px;">
        Unit 2 – Implementation of a DevOps Culture
      </td>
    </tr>
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 3<br>(Jan 5–9)</td>
      <td>W3C1</td>
      <td>01/05</td>
      <td>Message & queuing systems (SNS/SQS conceptual) — syllabus item</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W3C2</td>
      <td>01/06</td>
      <td>Trusted Advisor (conceptual) — syllabus item</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W3C3</td>
      <td>01/07</td>
      <td>Identity & Access Management (IAM) — Users, Groups (start of IAM topics)</td>
      <td><a href="https://www.canva.com/assignment/access?token=deZ_ALffMYKn0YnVcJ06FA&resourceId=DAG9m2AChUc" >Unit 2 Presentation Slides</a></td>
    </tr>
    <tr>
      <td>W3C4</td>
      <td>01/08</td>
      <td>IAM roles, policies (continuation)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 4 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 4<br>(Jan 12–16)</td>
      <td>W4C1</td>
      <td>01/12</td>
      <td>Understanding shared responsibility model in AWS (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W4C2</td>
      <td>01/13</td>
      <td>Integrating federation with an AWS account (syllabus)</td>
      <td>—</td>
    </tr>
    
    <tr>
      <td>W4C3</td>
      <td><span style="color:red">01/15</span></td>
      <td><span style="color:red">Holiday – Makara Sankranti</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td>W4C4</td>
      <td>01/15</td>
      <td>Storing secrets securely in AWS (syllabus) — conceptual</td>
      <td>—</td>
    </tr>

    <!-- WEEK 5 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 5<br>(Jan 19–23)</td>
      <td>W5C1</td>
      <td>01/19</td>
      <td>Using Cognito with application authentication (conceptual)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W5C2</td>
      <td>01/20</td>
      <td>Amazon S3: blob storage, S3 concepts, endpoints (start of S3 topics)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>W5C3</td>
      <td>01/21</td>
      <td>S3 access control, access logs, encryption options</td>
      <td><a href="/Downloads/01-19-2026/s3_logs.py" >s3_logs.py</a></td>
    </tr>
    <tr>
      <td>W5C4</td>
      <td>01/22</td>
      <td>Using S3 events to trigger other services; S3 Batch Operations</td>
      <td>—</td>
    </tr>

    <!-- WEEK 6 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 6<br>(Jan 26–30)</td>
      <td>W6C1</td>
      <td><span style="color:red">01/26</span></td>
      <td><span style="color:red">Holiday – Republic Day</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td>W6C2</td>
      <td>01/27</td>
      <td>S3 replication and versioning (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W6C3</td>
      <td>01/28</td>
      <td>Understanding basics/background of DynamoDB; data model introduction</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W6C4</td>
      <td>01/29</td>
      <td>Inserting and accessing data in DynamoDB (syllabus)</td>
      <td>—</td>
    </tr>

    <!-- Unit 3 header -->
    <tr>
      <td colspan="5" style="background:#fff4e6; font-weight:bold; padding:10px; font-size:16px;">
        Unit 3 – Continuous Integration and Delivery (CI/CD) using Infrastructure as Code (IaC)
      </td>
    </tr>

    <!-- WEEK 7 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 7<br>(Feb 2–6)</td>
      <td>W7C1</td>
      <td>02/02</td>
      <td>Introduction to SDLC (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W7C2</td>
      <td>02/03</td>
      <td>Different teams in SDLC (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W7C3</td>
      <td>02/04</td>
      <td>Understanding different types of deployments (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W7C4</td>
      <td>02/05</td>
      <td>Essential CloudFormation topics (start)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 8 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 8<br>(Feb 9–13)</td>
      <td>W8C1</td>
      <td>02/09</td>
      <td>Creating nested stacks with dependencies (CloudFormation topic)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W8C2</td>
      <td>02/10</td>
      <td>Detecting drift in CloudFormation templates (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W8C3</td>
      <td>02/11</td>
      <td>Using the Cloud Development Kit (CDK) – conceptual (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W8C4</td>
      <td>02/12</td>
      <td>Using CodeCommit for code versioning; setting up CodeCommit repository (syllabus)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 9 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 9<br>(Feb 16–20)</td>
      <td>W9C1</td>
      <td>02/16</td>
      <td>AWS CodeBuild – concepts (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W9C2</td>
      <td>02/17</td>
      <td>AWS CodePipeline – setting up a code pipeline (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W9C3</td>
      <td>02/18</td>
      <td>Using Jenkins to build workloads – pipeline concepts (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W9C4</td>
      <td>02/19</td>
      <td>AWS CodeDeploy – concepts and use-cases (syllabus)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 10 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 10<br>(Feb 23–27)</td>
      <td>W10C1</td>
      <td>02/23</td>
      <td>Elastic Beanstalk – built-in functionality (start)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W10C2</td>
      <td>02/24</td>
      <td>Creating service role in IAM for Beanstalk; Beanstalk CLI (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W10C3</td>
      <td>02/25</td>
      <td>Deployment types in Elastic Beanstalk; deploy application using Beanstalk (conceptual)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W10C4</td>
      <td>02/26</td>
      <td>Lambda deployment & versioning – Lambda functions overview (start)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 11 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 11<br>(Mar 2–6)</td>
      <td>W11C1</td>
      <td>03/02</td>
      <td>Lambda triggers and event source mappings (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W11C2</td>
      <td>03/03</td>
      <td>Deploying versions using Lambda; working with Lambda Layers</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W11C3</td>
      <td>03/04</td>
      <td>Monitoring Lambda functions (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W11C4</td>
      <td>03/05</td>
      <td>Blue-Green deployments – understanding, AWS services & techniques</td>
      <td>—</td>
    </tr>

    <!-- Unit 4 header -->
    <tr>
      <td colspan="5" style="background:#f3e6ff; font-weight:bold; padding:10px; font-size:16px;">
        Unit 4 – Monitoring and Logging Environments and Workloads
      </td>
    </tr>

    <!-- WEEK 12 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 12<br>(Mar 9–13)</td>
      <td>W12C1</td>
      <td>03/09</td>
      <td>CloudWatch overview; using CloudWatch to aggregate logs (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W12C2</td>
      <td>03/10</td>
      <td>CloudWatch alarms; basic metrics and creating dashboards</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W12C3</td>
      <td>03/11</td>
      <td>Adding application tracing with X-Ray; X-Ray role in DevOps</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W12C4</td>
      <td>03/12</td>
      <td>Amazon EventBridge overview (syllabus)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 13: Unit 5 header -->
    <tr>
      <td colspan="5" style="background:#ffe6e6; font-weight:bold; padding:10px; font-size:16px;">
        Unit 5 – Enabling Highly Available Workloads and Implementing Fault Tolerant Workloads
      </td>
    </tr>

    <tr>
      <td rowspan="4" style="min-width:105px;">Week 13<br>(Mar 16–20)</td>
      <td>W13C1</td>
      <td>03/16</td>
      <td>Various logs generated; power of AWS CloudTrail (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W13C2</td>
      <td>03/17</td>
      <td>Enabling Elastic Load Balancers; ELB logs</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W13C3</td>
      <td>03/18</td>
      <td>Using VPC Flow Logs (syllabus)</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W13C4</td>
      <td>03/19</td>
      <td>Understanding AWS Auto Scaling; overview (start of Auto Scaling topics)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 14 -->
    <tr>
      <td rowspan="4" style="min-width:105px;">Week 14<br>(Mar 23–27)</td>
      <td>W14C1</td>
      <td>03/23</td>
      <td>Deploying EC2 instance with Auto Scaling; Auto Scaling life cycle</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W14C2</td>
      <td>03/24</td>
      <td>Using Auto Scaling life cycle hooks</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W14C3</td>
      <td>03/25</td>
      <td>Data Encryption introduction; understanding KMS keys</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W14C4</td>
      <td>03/26</td>
      <td>Protecting data in transit with Certificate Manager; AWS Systems Manager, AWS Config essentials; Amazon Inspector, GuardDuty, Macie (overview & wrap-up)</td>
      <td>—</td>
    </tr>

  </tbody>
</table>
</div>




<!-- ### <a id="TheoryLoc">Theory</a>

| Lecture | Date | Topics | Resources |
|:------:|:------|:--------|:-----------|

| 1 | 12/22 | Introduction to DevOps, Cloud-Native Concepts | |
| 2 | 12/23 | AWS Service Pillars: Operational Excellence, Reliability | |
| 3 | 12/24 | AWS Service Pillars: Security, Performance, Cost Optimization | |
|  | 12/25 | <span style="color:red">Holiday – Christmas</span> | |

| 4 | 12/26 | AWS Compute Overview (EC2, Lambda – conceptual), Virtualization | |

| 5 | 12/29 | VPC Basics, Subnets, Route Tables | |
| 6 | 12/30 | Cloud Databases Overview | |
| 7 | 12/31 | Messaging & Queuing (SNS, SQS – conceptual) | |
|  | 01/01 | <span style="color:red">Holiday – New Year</span> | |

| 8 | 01/02 | Trusted Advisor, Cloud Best Practices | |

| 9 | 01/05 | IAM Overview, Users, Groups | |
| 10 | 01/06 | IAM Policies & Permissions | |
| 11 | 01/07 | Shared Responsibility Model | |
| 12 | 01/08 | Identity Federation Concepts | |

| 13 | 01/09 | Secrets Management, Credential Rotation | |

| 14 | 01/12 | Cognito – Authentication Concepts | |
| 15 | 01/13 | S3 Basics: Buckets, Objects, ACLs | |
|  | 01/14 | <span style="color:red">Holiday – Makara Sankranti</span> | |
| 16 | 01/15 | S3 Logging, Encryption Options | |

| 17 | 01/16 | S3 Events, Replication, Versioning | |

| 18 | 01/19 | DynamoDB Basics, Tables, Keys | |
| 19 | 01/20 | DynamoDB Data Modeling | |
| 20 | 01/21 | DynamoDB Streams, DAX | |
| 21 | 01/22 | DynamoDB Security & Monitoring | |

| 22 | 01/23 | MSE–1 Revision | |

| 23 | 01/26 | <span style="color:red">Holiday – Republic Day</span> | |
| 24 | 01/27 | Introduction to CI/CD | |
| 25 | 01/28 | SDLC, Deployment Types | |
| 26 | 01/29 | Introduction to IaC | |

| 27 | 01/30 | CloudFormation Basics | |

| 28 | 02/02 | CloudFormation Nested Stacks | |
| 29 | 02/03 | Detecting Drift in IaC | |
| 30 | 02/04 | CodeCommit – Git-Based Versioning | |
| 31 | 02/05 | CodeBuild Concepts | |

| 32 | 02/06 | CodePipeline Workflow | |

| 33 | 02/09 | Jenkins CI/CD Pipeline Concepts | |
| 34 | 02/10 | Build Stages, Job Runners | |
| 35 | 02/11 | Deployment Types & CodeDeploy | |
| 36 | 02/12 | Blue-Green Deployments | |

| 37 | 02/13 | Mid-Sem Revision – Unit 3 | |

| 38 | 02/16 | Lambda Basics: Functions & Execution Model | |
| 39 | 02/17 | Lambda Triggers & Event Source Mappings | |
| 40 | 02/18 | Lambda Layers, Versioning | |
| 41 | 02/19 | Monitoring Lambda (Conceptual) | |

| 42 | 02/20 | MSE–2 & Review | |

| 43 | 02/23 | CloudWatch Metrics & Dashboards | |
| 44 | 02/24 | CloudWatch Logs & Alarms | |
| 45 | 02/25 | X-Ray Tracing Concepts | |
| 46 | 02/26 | EventBridge Overview | |

| 47 | 02/27 | Logging Deep Dive (VPC Flow Logs, ELB Logs) | |

| 48 | 03/02 | Auto Scaling Basics | |
| 49 | 03/03 | Auto Scaling Lifecycle Hooks | |
| 50 | 03/04 | KMS – Encryption & Key Concepts | |
| 51 | 03/05 | Protecting Data in Transit – Certificate Manager | |

| 52 | 03/06 | AWS Config – Compliance Overview | |

| 53 | 03/09 | Amazon Inspector – Security Scanning | |
| 54 | 03/10 | Amazon GuardDuty – Threat Detection | |
| 55 | 03/11 | Amazon Macie – Data Protection | |
| 56 | 03/12 | Full Course Recap & SEE Preparation | | -->


<h3 id="LabLoc">Lab Schedule (14 Labs × 2 Hours)</h3>

<div style="margin:15px 0; padding:12px; background:#eaf7ff; border-left:5px solid #007BFF; border-radius:6px;">
  <strong>Total Lab Sessions: 14 (One 2-Hour Lab per Week)</strong>
</div>

<div style="overflow-x:auto;">
<table>
  <thead>
    <tr>
      <th style="min-width:100px;">Week</th>
      <th>Lab (W#L#)</th>
      <th>Date</th>
      <th>Lab Topics / Activities</th>
      <th>Resources</th>
    </tr>
  </thead>

  <tbody>

    <!-- WEEK 1 LAB -->
    <tr>
      <td>Week 1</td>
      <td>W1L1</td>
      <td>—</td>
      <td>Introduction to DevOps Tools, CLI Setup, Git Installation</td>
      <td>—</td>
    </tr>

    <!-- WEEK 2 LAB -->
    <tr>
      <td>Week 2</td>
      <td>W2L1</td>
      <td>—</td>
      <td>Git Hands-On: Branching, Merging, Pull Requests (Local)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 3 LAB -->
    <tr>
      <td>Week 3</td>
      <td>W3L1</td>
      <td>—</td>
      <td>Simulated IAM: Creating Users, Groups, Policies using Local JSON</td>
      <td>—</td>
    </tr>

    <!-- WEEK 4 LAB -->
    <tr>
      <td>Week 4</td>
      <td>W4L1</td>
      <td>—</td>
      <td>S3 Simulation using Local Tools (MinIO / LocalStack)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 5 LAB -->
    <tr>
      <td>Week 5</td>
      <td>W5L1</td>
      <td>—</td>
      <td>DynamoDB Data Modeling using Local NoSQL Sandbox</td>
      <td>—</td>
    </tr>

    <!-- WEEK 6 LAB -->
    <tr>
      <td>Week 6</td>
      <td>W6L1</td>
      <td>—</td>
      <td>Writing IaC Templates (YAML) – CloudFormation Style (Offline)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 7 LAB -->
    <tr>
      <td>Week 7</td>
      <td>W7L1</td>
      <td>—</td>
      <td>GitHub Actions CI Pipeline – Build + Test Workflow</td>
      <td>—</td>
    </tr>

    <!-- WEEK 8 LAB -->
    <tr>
      <td>Week 8</td>
      <td>W8L1</td>
      <td>—</td>
      <td>Jenkins Pipeline – Build + Archive Artifacts (Local Jenkins)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 9 LAB -->
    <tr>
      <td>Week 9</td>
      <td>W9L1</td>
      <td>—</td>
      <td>Blue-Green Deployment (Simulated using Docker Containers)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 10 LAB -->
    <tr>
      <td>Week 10</td>
      <td>W10L1</td>
      <td>—</td>
      <td>Serverless Simulation – Write & Run Local Lambda Functions</td>
      <td>—</td>
    </tr>

    <!-- WEEK 11 LAB -->
    <tr>
      <td>Week 11</td>
      <td>W11L1</td>
      <td>—</td>
      <td>Monitoring Simulation – Logs + Metrics using Prometheus + Grafana</td>
      <td>—</td>
    </tr>

    <!-- WEEK 12 LAB -->
    <tr>
      <td>Week 12</td>
      <td>W12L1</td>
      <td>—</td>
      <td>Auto Scaling Simulation using Docker Compose Replica Scaling</td>
      <td>—</td>
    </tr>

    <!-- WEEK 13 LAB -->
    <tr>
      <td>Week 13</td>
      <td>W13L1</td>
      <td>—</td>
      <td>Security Lab – Inspector, GuardDuty, Macie Simulation (Local Security Rules)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 14 LAB -->
    <tr>
      <td>Week 14</td>
      <td>W14L1</td>
      <td>—</td>
      <td>Final Lab – Full CI/CD Simulation (Local Git → Jenkins → Docker → Monitor)</td>
      <td>—</td>
    </tr>

  </tbody>
</table>
</div>





<hr style="margin:2.5em 0 1em; border:0; border-top:1px solid #ccc;">
<p style="text-align:center; color:#777;">Last updated: {{ site.time | date: "%B %d, %Y" }}</p>

</div>
