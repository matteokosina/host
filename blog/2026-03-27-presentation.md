---
slug: final_presentation
title: Week 05 - Final Presentation
authors: [matteo, marvin]
tags: [final, presentation, results]
image: /img/blog-4.svg
---

## Time Commitment

import TimeCommitment from '@site/src/components/TimeCommitment';
import TaskList from '@site/src/components/TaskList';

<TimeCommitment data={[
{
author: 'Matteo Kosina',
expectedHours: 8,
timeSpent: 11
},
{
author: 'Marvin Fuchs',
expectedHours: 8,
timeSpent: 11
}
]} />

## Tasks

<TaskList data={[
{
id: 1,
title: 'Export Game to Web',
description: 'For an itch.io release, we need to export our game with web as target. Find out how to do this and adapt what\'s necessary.',
owner: 'Marvin',
status: 'done'
},
{
id: 2,
title: 'Create itch.io page',
description: 'Create a itch.io page for our game and prepare it for the release.',
owner: 'Matteo',
status: 'done'
},
{
id: 3,
title: 'Research Talo Analytics',
description: 'Research whether it is feasible to implement Talo for analytics gathering. Decision: we will build a custom solution without talo.',
owner: 'Marvin',
status: 'done'
},
{
id: 4,
title: 'Fix intro scene',
description: 'Fix that the intro scene is currently not playable from the main menu.',
owner: 'Matteo',
status: 'done'
},
{
id: 5,
title: 'Implement return to main menu',
description: 'It is currently not possible to return to the main menu once a level is started.',
owner: 'Marvin',
status: 'done'
}
{
id: 6,
title: 'Create final presentation',
description: 'Create a presentation showcasing what we achieved in the past weeks.',
owner: 'Matteo, Marvin',
status: 'done'
},
]} />

# Improved analytics
We now collect comprehensive analytics to better understand player behavior and game performance. Our analytics pipeline consists of three main components: the game is hosted on itch.io, where it sends analytics data to a Google Sheet via Google Apps Script, and then we use Google Colab to evaluate the data and generate visualizations. The figure below shows the types of data we collect throughout this process.

![Analytics Data](/img/data.png)

# Our analytics results at a glance
![Avg Idle Time](/img/avidle.png)
![Crash-Rates](/img/pies.png)
![Remaining Fuel](/img/reminingf.png)
![Thruster Usage](/img/tclicks.png)
![Termination Positions](/img/thermal.png)

# What else? (House-Keeping tasks)
We finalized our presentation for class, showcasing the complete development journey and results. Additionally, we expanded the game with new levels, each assigned rank names to enhance progression and player engagement. The start menu received a comprehensive UI overhaul, making navigation more intuitive and visually appealing. We successfully deployed the game to itch.io and established a dedicated game website on the platform. Throughout this process, we collected valuable user analytics and thoroughly analyzed player behavior, performance metrics, and gameplay patterns. Our findings and key learnings from this data are detailed in the final presentation, providing insights into player engagement and game performance.
