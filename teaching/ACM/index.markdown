---
layout: page
title: Automation and Configuration Management
permalink: /teaching/ACM/
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
  <!-- <h2 style="margin-top:0;">Automation and Configuration Management</h2> -->
  <p><strong>Course Code:</strong> 24PCA412</p>
  <p><strong>Semester:</strong> Spring 2026</p>
  <p><strong>Duration:</strong> Jan 2026 – May 2026</p>
  <p><strong>Course Syllabus:</strong> Coming Soon</p>
  <p style="text-align:justify;">
    This course introduces the fundamentals of PowerShell scripting for automation and configuration management in Windows environments. Students learn to develop, execute, and debug scripts to automate system administration tasks using cmdlets, pipelines, and Desired State Configuration (DSC). It bridges theory with industry practice, preparing learners for roles in DevOps, cloud operations, and IT infrastructure automation.
  </p>
</div>


<!-- ================== Reference Books ================== -->
<div style="margin-bottom:35px;">
  <h3>Reference Books</h3>
  <ol>
    <li><strong>Professional Windows PowerShell</strong><br>
        Andre Watt, Wrox <br>
        <a href="https://www.oreilly.com/library/view/professional-windows-r-powershell/9780471946939/">Publisher Link</a>
        <a href="/Downloads/ACMTextBook/professional-windows-powershell_compress (1).pdf">Textbook</a>
    </li>
    <li><strong>Learning PowerShell DSC</strong><br>
        James Pogran, Packt - Second Edition<br>
        <a href="https://www.packtpub.com/en-in/product/learning-powershell-dsc-9781787281516">Publisher Link</a>
    </li>
  </ol>
</div>


<!-- ================== Announcements ================== -->
<div style="margin-bottom: 16px;">
  <div style="background:#f8f9fa; border-radius:10px; border-left:5px solid #C0392B; padding:20px; margin-top:40px;">
    <h3>Announcements</h3>
    <ul style="margin-top:10px;">
      <li><span style="color:blue;">Coming Soon</span> – Course enrollment details will be published soon.</li>
      <li>Lab and project components will be announced before semester commencement.</li>
    </ul>
  </div>
</div>

<h3 id="TheoryLoc">Theory Schedule</h3>

<div style="margin:15px 0; padding:12px; background:#f4f6f8; border-left:5px solid #007BFF; border-radius:6px;">
  <strong>Total Number of Theory Classes: 42 (14 Weeks × 3 Classes per Week)</strong>
</div>

<div style="overflow-x:auto;">
<table>
  <thead>
    <tr>
      <th style="min-width:105px;">Week</th>
      <th>Class (W#C#)</th>
      <th>Topics</th>
      <th>Resources</th>
    </tr>
  </thead>
  <tbody>

    <!-- MODULE 1 -->
    <tr>
      <td colspan="4" style="background:#eef6ff; font-weight:bold; padding:10px; font-size:16px;">
        Module 1 – Introduction to Windows PowerShell
      </td>
    </tr>

    <!-- WEEK 1 -->
    <tr>
      <!-- rowspan increased from 3 -> 4 to add Leave + Holiday rows inside the week -->
      <td rowspan="4" style="min-width:105px;">Week 1<br>(Dec 22 – Dec 26)</td>
      <td>W1C1</td>
      <td>Introduction, setting up lab environment, Installing PowerShell</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W1C2</td>
      <td>Starting/Stopping PowerShell, Finding commands, Limitations of CMD.exe</td>
      <td>—</td>
    </tr>
    <tr>
      <td></td>
      <td><span style="color:red">Leave — Christmas Eve (12/24)</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td></td>
      <td><span style="color:red">Holiday — Christmas (12/25)</span></td>
      <td>—</td>
    </tr>

    <!-- WEEK 2 -->
    <tr>
      <!-- rowspan increased from 3 -> 4 to add New Year holiday -->
      <td rowspan="4" style="min-width:105px;">Week 2<br>(Dec 29 – Jan 02)</td>
      <td>W2C1</td>
      <td>A new architecture, cross-tool approach, Namespaces as drives</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W2C2</td>
      <td>Extensibility & backward compatibility, Object-based approach</td>
      <td>—</td>
    </tr>
    <tr>
      <td></td>
      <td><span style="color:green">Wish you a Happy New Year - 01/01/2026</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td>W2C3</td>
      <td>Consistent verb-noun naming scheme, upgrade path to C#, working with errors</td>
      <td>—</td>
    </tr>

    <!-- WEEK 3 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 3<br>(Jan 05 – Jan 09)</td>
      <td>W3C1</td>
      <td>Debugging in PowerShell, Additional PowerShell features</td>
      <td>—</td>
    </tr>

    <tr>
      <td colspan="3" style="background:#e7ffe7; font-weight:bold; padding:10px; font-size:16px;">
        Module 2 – Windows System with PowerShell
      </td>
    </tr>

    <tr>
      <td>W3C2</td>
      <td>Two command line parsing approaches, exploring system with PowerShell</td>
      <td>—</td>
    </tr>

    <!-- WEEK 4 -->
    <tr>
      <!-- rowspan increased from 3 -> 4 to add Makara Sankranti holiday -->
      <td rowspan="4" style="min-width:105px;">Week 4<br>(Jan 12 – Jan 16)</td>
      <td>W4C1</td>
      <td>Using abbreviated commands, Object Pipelines, pros & cons of verbosity</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W4C2</td>
      <td>Snapins, Profiles, Aliases, Prompts, Preference variables</td>
      <td>—</td>
    </tr>
    <tr>
      <td></td>
      <td><span style="color:red">Holiday — Makara Sankranti (01/14)</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td>W4C3</td>
      <td>Parameters, Variables as parameters</td>
      <td>—</td>
    </tr>

    <!-- MODULE 3 -->
    <tr>
      <td colspan="4" style="background:#fff4e6; font-weight:bold; padding:10px; font-size:16px;">
        Module 3 – PowerShell Cmdlets
      </td>
    </tr>

    <!-- WEEK 5 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 5<br>(Jan 19 – Jan 23)</td>
      <td>W5C1</td>
      <td>Where-Object, Select-Object, Default formatting</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W5C2</td>
      <td>Format-Table, Format-List, update-formatdata, update-typedata</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W5C3</td>
      <td>Remove-Item, WhatIf, Confirm, Verbose parameters</td>
      <td>—</td>
    </tr>

    <!-- WEEK 6 -->
    <tr>
      <!-- rowspan increased from 3 -> 4 to add Republic Day holiday -->
      <td rowspan="4" style="min-width:105px;">Week 6<br>(Jan 26 – Jan 30)</td>
      <td></td>
      <td><span style="color:red">Holiday — Republic Day (01/26)</span></td>
      <td>—</td>
    </tr>
    <tr>
      <td>W6C1</td>
      <td>PowerShell providers, PSDrives, Set-Location, Get-ChildItem</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W6C2</td>
      <td>Get-Location, Get-Content, Measure-Object, New-Item</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W6C3</td>
      <td>New-PSDrive, Exploring system state, Environment variables</td>
      <td>—</td>
    </tr>

    <!-- WEEK 7 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 7<br>(Feb 02 – Feb 06)</td>
      <td>W7C1</td>
      <td>Services using Get-Service (end Module 3)</td>
      <td>—</td>
    </tr>

    <tr>
      <td colspan="3" style="background:#f3e6ff; font-weight:bold; padding:10px; font-size:16px;">
        Module 4 – Errors and Exceptions
      </td>
    </tr>

    <tr>
      <td>W7C2</td>
      <td>Errors, error-related variables, Trap statement, common parameters</td>
      <td>—</td>
    </tr>

    <!-- WEEK 8 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 8<br>(Feb 09 – Feb 13)</td>
      <td>W8C1</td>
      <td>Handling syntax errors, Set-PSDebug, Write-Debug</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W8C2</td>
      <td>Tracing, Path names, simple tasks with folders/files</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W8C3</td>
      <td>WMI Introduction, WMI essentials, Exploring WMI</td>
      <td>—</td>
    </tr>

    <!-- WEEK 9 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 9<br>(Feb 16 – Feb 20)</td>
      <td>W9C1</td>
      <td>Choosing WMI or CIM; Get-WmiObject</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W9C2</td>
      <td>Using Get-CimInstance (end Module 4)</td>
      <td>—</td>
    </tr>

    <!-- MODULE 5 -->
    <tr>
      <td colspan="3" style="background:#ffe6e6; font-weight:bold; padding:10px; font-size:16px;">
        Module 5 – PowerShell DSC
      </td>
    </tr>

    <!-- WEEK 10 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 10<br>(Feb 23 – Feb 27)</td>
      <td>W10C1</td>
      <td>DSC Introduction; High-level overview; DSC Features</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W10C2</td>
      <td>PS V4, V5, V6 DSC; ISE; Partial configurations</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W10C3</td>
      <td>DSC Dependencies; DSC Architecture overview</td>
      <td>—</td>
    </tr>

    <!-- WEEK 11 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 11<br>(Mar 02 – Mar 06)</td>
      <td>W11C1</td>
      <td>Push & Pull modes; General workflow; Example workflow</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W11C2</td>
      <td>Configuration data; Local Configuration Manager</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W11C3</td>
      <td>DSC Pull Server; Deployment considerations (end Module 5)</td>
      <td>—</td>
    </tr>

    <!-- WEEK 12 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 12<br>(Mar 09 – Mar 13)</td>
      <td>W12C1</td>
      <td>Revision – Modules 1 & 2</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W12C2</td>
      <td>Revision – Module 3</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W12C3</td>
      <td>Revision – Modules 4 & 5</td>
      <td>—</td>
    </tr>

    <!-- WEEK 13 -->
    <tr>
    <td rowspan="4" style="min-width:105px;">Week 13<br>(Mar 16 – Mar 20)</td>
    <td>W13C1</td>
    <td>Past Questions Solving – Part 1</td>
    <td>—</td>
    </tr>
    <tr>
    <td>W13C2</td>
    <td>Past Questions Solving – Part 2</td>
    <td>—</td>
    </tr>
    <tr>
    <td></td>
    <td><span style="color:red">Holiday — Ugadi (03/19)</span></td>
    <td>—</td>
    </tr>
    <tr>
    <td>W13C3</td>
    <td>Important Concepts Discussion</td>
    <td>—</td>
    </tr>


    <!-- WEEK 14 -->
    <tr>
      <td rowspan="3" style="min-width:105px;">Week 14<br>(Mar 23 – Mar 27)</td>
      <td>W14C1</td>
      <td>SEE Pattern + Expected Questions</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W14C2</td>
      <td>Mock Test</td>
      <td>—</td>
    </tr>
    <tr>
      <td>W14C3</td>
      <td>Final Wrap-Up</td>
      <td>—</td>
    </tr>

  </tbody>
</table>
</div>



<hr style="margin:2.5em 0 1em; border:0; border-top:1px solid #ccc;">
<p style="text-align:center; color:#777;">Last updated: {{ site.time | date: "%B %d, %Y" }}</p>