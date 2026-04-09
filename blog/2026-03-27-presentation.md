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

