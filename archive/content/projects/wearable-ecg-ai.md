---
title: Wearable ECG AI
category: research
summary: Research-oriented work on continuous ECG analysis with machine learning models that are feasible to run at the edge.
problem: Continuous ECG analysis is usually done by sending signals to a large model in the cloud. On a wearable that is the wrong shape of solution — the device has a power budget, a latency budget, and no guarantee of connectivity.
features:
  - Works on long-running ECG streams rather than short, clean clips
  - Signal processing applied before any model sees the data
  - Model size and compute cost treated as design constraints, not afterthoughts
contribution: TODO (Rishikesh) — describe your part, and say whether this was team or academic work.
tech: [Python, Machine Learning, Signal Processing, Edge AI]
order: 4
draft: true
# TODO (Rishikesh): is this the same project as github.com/RishiAnand108/CardioRhythm-AI?
# If so, set the link below. I did not assume it, because the names do not match.
# github: https://github.com/RishiAnand108/CardioRhythm-AI
---

## Overview

Wearable ECG AI is a research-oriented project on analysing continuous ECG signals with
machine learning, with a specific constraint: the approach should be feasible on edge hardware
such as a wearable device, rather than depending on a large model in the cloud.

## Research focus

- **Continuous signals** — working with long-running ECG streams rather than short, clean clips
- **Signal processing** — preparing raw signals before any model sees them
- **Edge feasibility** — treating model size and compute cost as design constraints from the start

This is research work, not a medical product, and it makes no clinical claims.

<!--
  TODO (Rishikesh): complete this case study with verified details, then set `draft: false`.
  Do not add accuracy or performance numbers until you can cite how they were measured.

  ## Problem definition
  ## Dataset                – which public/private dataset(s), and any ethics considerations
  ## Preprocessing          – filtering, segmentation, normalisation
  ## Model selection        – architectures considered, and why
  ## Evaluation metrics     – measured results only
  ## Edge constraints       – target hardware, model size, latency budget
  ## Limitations
  ## My contribution
  ## Future improvements
-->
