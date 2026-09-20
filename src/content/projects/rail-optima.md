---
title: Rail Optima
category: ai-ml
summary: Machine learning combined with constraint optimization for railway-related planning.
tech: [XGBoost, CP-SAT, Machine Learning, Optimization]
order: 3
draft: true
# github: https://github.com/<user>/<repo>
# demo: https://
---

## Overview

Rail Optima combines two complementary techniques for railway-related planning: a
gradient-boosted model (XGBoost) for the predictive part of the problem, and a CP-SAT
constraint solver for the part that has to respect hard rules.

## Why two techniques

Planning problems usually have two halves. Some quantities are uncertain and have to be
estimated from data — that is a machine learning problem. Others are strict rules that a valid
plan must never break — that is a constraint optimization problem. Rail Optima is built around
using each tool for the half it is suited to, instead of forcing one approach to do both jobs.

<!--
  TODO (Rishikesh): complete this case study with verified details, then set `draft: false`.
  Do not add metrics until you can cite how they were measured.

  ## Problem definition     – what is being planned, and for whom
  ## Dataset                – source, size, time range, licensing
  ## Preprocessing          – cleaning, feature engineering
  ## Model selection        – why XGBoost; what it predicts; alternatives considered
  ## Optimization model     – decision variables, constraints and objective in CP-SAT
  ## How the two connect    – how predictions feed the solver
  ## Evaluation metrics     – measured results only
  ## Limitations
  ## Deployment or inference process
  ## My contribution
  ## Future improvements
-->
