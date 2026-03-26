---
slug: analytics
title: Week 04 - Analytics
authors: [matteo, marvin]
tags: [analytics, start menu, levels]
image: /img/blog-4.svg
---

## Time Commitment

import TimeCommitment from '@site/src/components/TimeCommitment';
import TaskList from '@site/src/components/TaskList';

<TimeCommitment data={[
{
author: 'Matteo Kosina',
expectedHours: 8,
timeSpent: 18
},
{
author: 'Marvin Fuchs',
expectedHours: 8,
timeSpent: 15
}
]} />

## Tasks

<TaskList data={[
{
id: 1,
title: 'Refactor Level-Setup',
description: 'Prepare the scene setup to support mutiple levels and a start menu in which a user can select the level and its username (input +  dropdown from existing players)',
owner: 'Marvin',
status: 'done'
},
{
id: 2,
title: 'Implement Analytics Collection',
description: 'Collect the in-game analytics metrics that were planned in last weeks class',
owner: 'Matteo',
status: 'done'
},
{
id: 3,
title: 'Implement Analytics Persistence',
description: 'To keep things simple, just persist analytics data within a CSV file',
owner: 'Marvin',
status: 'done'
},
{
id: 4,
title: 'Design first levels',
description: 'Design two easy levels that can be started from the start menu and which leverage the new multi-level / multi-scene architecture',
owner: 'Matteo',
status: 'done'
},
{
id: 5,
title: 'Build an data evaluation board',
description: 'Use e.g. python to evaluate the gathered data and display it in a semantic-rich / visual format',
owner: 'Matteo',
status: 'done'
},
{
id: 6,
title: 'Build an intro level',
description: 'The intro level should contain a terminal like text animation displaying the mission / game instructions. Afterwards an NPC controlled rocket should show how the game mechanics work',
owner: 'Matteo',
status: 'done'
},

]} />


## Key Metrics to Track

### 1. Player Performance

These metrics help evaluate difficulty and skill progression.

- **Completion Rate**
  - Percentage of players who successfully land
- **Crash Rate**
  - Number of failed attempts vs total attempts
- **Average Attempts per Success**
  - Indicates how hard the game is
- **Time to Complete Level**
  - Measures efficiency and learning

---

### 2. Difficulty & Balancing

Used to determine if the level is too easy or too hard.

- **Landing Speed at Impact**
- **Tilt Angle on Landing**
- **Fuel Remaining**

Insights:
- High crash rate + low fuel → possibly too hard
- High fuel remaining → too easy
- players always having to idle a lot above the landing pad -> possibly hard

---

### 3. Player Behavior

Tracks how players interact with the game.

- **Input Frequency**
  - How often thrusters are used
- **Idle Time**
  - Moments where player does nothing
- **Thruster Click Frequency & Idle Time (Logged)**
  - `thruster_clicks`, `thruster_clicks_per_minute`, and `idle_time_seconds` are now written per run.
- **Crash/Landing Coordinates**
  - `x` and `y` positions at crash or success are captured for heatmaps.

Insights:
- Frequent overcorrection → controls may feel too sensitive
- Long idle time → confusion or lack of feedback

---

### 4. Pain Points (Level Analysis)

Identify where players struggle the most.

- **Crash Position Heatmap**
- **Altitude at Failure**
- **Time of Failure (early vs late)**
- **Repeated Fail Locations**

Insights:
- Many crashes near landing pad → landing too difficult
- Early crashes → onboarding problem

---

### 5. Player Satisfaction Indicators

Indirect metrics to estimate satisfaction.

- **Session Length**
- **Number of Restarts**
- **Return Rate (if tracked over time)**
- **Win vs Quit Ratio**

Insights:
- Many restarts + eventual success → engaging challenge
- Early quits → frustration or confusion

## A look into our CSV-Schema

We designed the following CSV schema to track the before mentioned metrics. The data below is just sample data:

| timestamp                     | username | level  | event       | duration_ms | speed | altitude | fuel   | tilt   | heading | x      | y      | thruster_clicks | thruster_clicks_per_minute | idle_time_seconds |
|------------------------------|----------|--------|-------------|-------------|-------|----------|--------|--------|---------|--------|--------|-----------------|----------------------------|-------------------|
| 2026-03-25T16:12:33.1847080Z | matteo   | Level1 | start_level |             |       |          |        |        |         |        |        | 0               | 0.00                       |                   |
| 2026-03-25T16:12:59.4145410Z | matteo   | Level1 | crash       | 26083       | 8.73  | 8.47     | 30.55  | 59.83  | 285.52  | 1.79   | -4.94  | 53              | 121.92                     | 10.32             |
| 2026-03-25T16:13:39.4299770Z | frank   | Level1 | crash       | 38470       | 4.73  | 10.34    | 3.30   | 1.48   | 128.70  | -4.94  | 10.34  | 76              | 118.53                     | 17.34             |
| 2026-03-25T16:18:45.5065040Z | frank   | Level1 | start_level |             |       |          |        |        |         |        |        | 0               | 0.00                       |                   |

## Lets visualize

With the help of a python script and and `MathplotLib` we automized the evaluation and visualization of our dataset. The following diagrams show example diagrams from several analytics test-tuns.

![Level1 Scatter](/img/crash-level1-scatter.png)

![Level1 HeatMap](/img/crash-level1.png)

![Total HeatMap](/img/crash-total.png)

![Fuel Remaining](/img/fuel-remaining.png)

![Idle Time](/img/idle-time.png)

![Landing Speed](/img/landing-speed.png)
