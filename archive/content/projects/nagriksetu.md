---
title: NagrikSetu
category: backend
summary: A Django platform where citizens submit municipal complaints and track what happens to them afterwards.
problem: Municipal complaints are easy to file and almost impossible to follow. Once a grievance is submitted it disappears into an office, and the person who raised it has no way of knowing whether anyone picked it up.
features:
  - Complaint submission with the details needed to route it to the right department
  - Status tracking so a citizen can see where their complaint currently sits
  - Administrative views for managing and resolving incoming grievances
  - Relational data model covering citizens, complaints and their status history
contribution: Built the Django application — the data model for complaints and their lifecycle, the views and forms citizens use, and the administrative side for managing them.
tech: [Django, Python, PostgreSQL, REST APIs]
order: 2
draft: true
github: https://github.com/RishiAnand108/Nagriksetu
---

## Overview

NagrikSetu is a citizen grievance platform built with Django. A resident files a municipal
complaint, the complaint is stored against a structured record rather than a mailbox, and both
the citizen and the administrator can see its current state.

The interesting part of the problem is not the form — it is the lifecycle. A complaint has a
status that changes over time, it belongs to a category that determines who should act on it,
and the history of those changes is what makes the system trustworthy to the person who filed it.

<!--
  TODO (Rishikesh): complete this case study with verified details, then set `draft: false`.
  Suggested sections (see `_template.md`):

  ## Problem                  – expand on who this was built for
  ## Architecture             – apps, models, request flow
  ## Database schema          – complaint, status history, category, user tables
  ## Authentication and authorization – citizen vs administrator
  ## Validation and error handling
  ## Deployment               – where it runs, if anywhere yet
  ## Challenges and decisions
  ## Future improvements
-->
