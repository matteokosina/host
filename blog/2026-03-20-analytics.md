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