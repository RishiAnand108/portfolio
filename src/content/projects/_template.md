---
# Copy this file, rename it to `your-project-slug.md` (the file name becomes the URL),
# and fill it in. Files starting with "_" are ignored by the site.

title: Project name
category: backend # backend | ai-ml | research | tools
summary: One sentence describing what the project is. Shown on the Projects page and in search results.
tech: [Python, FastAPI]
order: 10 # lower numbers are listed first
draft: true # shows a "work in progress" note on the case study; set to false when complete
# github: https://github.com/<user>/<repo>
# demo: https://example.com
# cover: ./images/your-project-cover.png   # optional, path relative to this file
# coverAlt: Describe what the image shows
---

## Problem

What needed solving, for whom, and why existing options were not enough.

## Solution

What you built, described at a high level in two or three paragraphs.

## My contribution

Exactly what you designed and implemented. If it was a team project, say so and be specific
about your part.

## Architecture

The main components and how data moves between them. Add a diagram only if it is accurate:

```text
client → API (FastAPI) → service layer → PostgreSQL
```

## Technical implementation

Use the sub-sections that apply and delete the rest.

### Backend projects

- **API design** — resources, endpoints, versioning, pagination
- **Authentication and authorization** — how users are identified and what they may access
- **Database schema** — key tables, relationships, indexes
- **Business logic** — where it lives and how it is structured
- **Validation and error handling** — input validation, error format, status codes
- **Deployment** — containers, hosting, CI/CD
- **Testing** — what is covered and how
- **Performance considerations** — caching, query optimisation, measured bottlenecks

### AI/ML projects

- **Problem definition** — the prediction or decision being made
- **Dataset** — source, size, licensing
- **Preprocessing** — cleaning and feature engineering
- **Model selection** — what was tried and why the final choice won
- **Evaluation metrics** — measured results, with the method used to measure them
- **Limitations** — where the model fails or should not be used
- **Deployment or inference process** — how predictions are actually served

## Challenges and decisions

The interesting trade-offs. What did you choose, what did you reject, and why?

## Results

Only include outcomes you can verify. Delete this section if there is nothing measurable yet.

## Future improvements

What you would do next with more time.
