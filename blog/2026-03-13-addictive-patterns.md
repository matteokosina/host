---
slug: addictive-patterns
title: Week 03 - Addictive Patterns & UI
authors: [matteo, marvin]
tags: [addictive patterns, ui, gamification]
image: /img/blog-3.svg
---
## Time Commitment

import TimeCommitment from '@site/src/components/TimeCommitment';
import TaskList from '@site/src/components/TaskList';

<TimeCommitment data={[
{
author: 'Matteo Kosina',
expectedHours: 8,
timeSpent: 16
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
title: 'Design Graphics for Stats',
description: 'Design sprites for: Speed-Gauge, Tilt-Indicator, Fuel-Bar, Altitude-Indicator',
owner: 'Matteo',
status: 'done'
},
{
id: 2,
title: 'Come up with planned level design',
description: 'Make a plan for the design of levels: include what kind of specialties are included, e.g. obstacles',
owner: 'Marvin',
status: 'done'
},
{
id: 3,
title: 'Animate stats sprites',
description: 'For each of the new stats indicators: animate them accordingly and use the datastore as database',
owner: 'Matteo',
status: 'done'
},
{
id: 4,
title: 'Build level capabilities',
description: 'Currently we only have one main scene that is started and contains the whole game play. as we want to support levels and an intro scene in the future this setup has to be modified',
owner: 'Marvin',
status: 'done'
},
{
id: 5,
title: 'Work on Addictive Pattterns',
description: 'As learned and planned in the last lecture we want to implement addictive patterns mostly in the perspectives of EXPLORE, COMPETE and EXPRESS. Document and implent the respective progress',
owner: 'Marvin & Matteo',
status: 'done'
},

]} />

## Addictive Patterns

**COMPETE**
- Game mechanics (future: rewards for better completion)
    - fuel consumption (illustrated by the fuelbar)
    - landing roughness / angle (illustrated by the tilt indicator)
- get better than your previous runs (future: show players improvement over time)
 
**EXPLORE**
- new levels (called ranks / seniority) with new obstacle types / challenges
    - unbalanced thrusters
    - screen outages as a way of making it harder
    - different platform types (moving, size, in a cave)
    - varying environmental conditions (gravity, winds, storms, etc.)
- gradually get more infos about the background story / mission
    - Teaser to the end
    - story telling
    —> paradox: retro vibe but still somewhat modern tech (although it looks old)
    —> operator experienced time travel
- come back: our theme song : ) makes the game somewhat addictive too and lets players want to come back

**Express**
- different rocket types (single thruster, dual thruster, etc.)

## Stats indicators

![Speed Indicator](/img/speed.png)

_Speed indicator gauge with dynamic / auto-updating mid and max values (here set to 50 and 100)_

![Altitude Indicator](/img/altitude.png)

_Altitude indicator with vertically moving needle and numeric value with the platform as a baseline 0m_

![Tilt Indicator](/img/tilt.png)

_Angle indicator with rotating needle and numeric value display_

![Fuelpeed Indicator](/img/fuel.png)

_Fuel bar with vertically moving bar and numeric indicator below_

![Updated Looks](/img/week3-full.png)

_This is how the updated screen looks right now. It is inspired by an spaceship operation panel with a display of the rocket camera in the middle surrounded by analog loooking indicators_

## Planned Levels:
| Level | Start | Obstacle | Notes |
|------|------|---------|------|
| 1 | Straight above landing pad, slow velocity downwards | None | - |
| 2 | Slightly left of landing pad, slow velocity downwards | None | - |
| 2 | Slightly left of landing pad, slight tilt, slow velocity downwards and right | None | - |
| 3 (current level) | Far left of landing pad, big tilt, slow velocity downwards and right | None | - |
| 4 | Same as 3, but the landing pad is located directly below the rocket | None | - |
| 5 | Same as 3, but the landing pad is in a valley  | None | - |
| 6 | Same as 3 | Round obstacles distributed in the space | - |
| 7 | Same as 3 | A black hole central above the landing pad is disturbing the player | - |


## Multiview Design

 In preparation for the levels and the Home / Lobby UI we built a multi-scene capability in our game. This allows us not be limited anymore to just one single scene which currently renders the complete game.

 This works as follows:
 - we introduced a InitScene which should be run to start the game
 - additionally the gamemanager now loads LevelShared which contains all data and objects (e.g. the datastorage, state manager, camera etc.) that are used across all levels
 - it also loads level1 and starts the game