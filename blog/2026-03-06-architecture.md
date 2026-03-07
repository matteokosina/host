---
slug: architecture
title: Week 02 - Architecture and Graphics
authors: [matteo, marvin]
tags: [architecture, graphics, redesign]
image: /img/blog-2.svg
---

## Time Commitment
import TimeCommitment from '@site/src/components/TimeCommitment';
import TaskList from '@site/src/components/TaskList';

<TimeCommitment data={[
  {
    author: 'Matteo Kosina',
    expectedHours: 8,
    timeSpent: 0
  },
  {
    author: 'Marvin Fuchs',
    expectedHours: 8,
    timeSpent: 0
  }
]} />


## Tasks

<TaskList data={[
  {
    id: 1,
    title: 'Design Background image',
    description: 'The background image holds slots for gauges and the main display and should be in pixel art',
    owner: 'Marvin',
    status: 'open'
  },
  {
    id: 2,
    title: 'Design Gauges',
    description: 'Design gauges that will be used by different stats. The design should include the gauge, a indicator light (for exceeding values) and a scale',
    owner: 'Matteo',
    status: 'open'
  },
  {
    id: 3,
    title: 'Redesign graphics',
    description: 'Use the newly created assets and refactor the codebase to use the new assetes',
    owner: 'Matteo & Marvin',
    status: 'open'
  },
  {
    id: 4,
    title: 'Architecture Redesign',
    description: 'Refactor to enhance separation of conecerns and adhere to SOLID principles. Use the UML diagram designed in class as guideline',
    owner: 'Matteo & Marvin',
    status: 'open'
  },
]} />