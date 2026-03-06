---
slug: project-init
title: Week 01 - Kick-off
authors: [matteo]
tags: [kick-off, setup, MVP]
image: /img/blog-1.svg
---

## Time Commitment
import TimeCommitment from '@site/src/components/TimeCommitment';
import TaskList from '@site/src/components/TaskList';

<TimeCommitment data={[
  {
    author: 'Matteo Kosina',
    expectedHours: 8,
    timeSpent: 10
  },
  {
    author: 'Marvin Fuchs',
    expectedHours: 8,
    timeSpent: 10
  }
]} />


## Tasks

<TaskList data={[
  {
    id: 1,
    title: 'Setup Blog',
    description: 'Build a blog to document the dev process for the H.O.S.T. game.',
    owner: 'Matteo',
    status: 'done'
  },
  {
    id: 2,
    title: 'Setup Dev Environment',
    description: 'Setup Unity and get started with tutorials',
    owner: 'ALL',
    status: 'done'
  },
  {
    id: 3,
    title: 'Project Setup',
    description: 'Setup a unity collaborative project',
    owner: 'Marvin',
    status: 'done'
  },
  {
    id: 4,
    title: 'Build the MVP',
    description: 'Implement a physics-based rocket controlled by arrow keys, including a mid-air spawn system with initial velocity. The MVP is complete when the rocket can be steered from its start point to a landing platform that successfully detects touchdown.',
    owner: 'ALL',
    status: 'done'
  }
]} />

## First ideation

We want to build a game in which a user has the mission to bring a rocket back to planet earth safely.

The player is sitting in a retro styled operation center with a monitor and operation station to control the rocket remotely. On the display only an abstracted world is displayed in the style o CT Scan including all the info needed to land the rocket.

The initial version will have a sinlge rocket with two thrust, the player can control each one individually and therefore steer up / left / right. Future version might include rockets with a single thrust that can be tilted.

### First sketch

![First sketch of the H.O.S.T. game concept](/img/first-sketch.png)

The rocket is displayed on a retro looking monitor that represents the operation terminal for the player. They can monitor the current position, speed and status on the screen and on the control panel below. The setting should feel immersive and retro. 

### Screenshots of the first iterations

![POC Screenshot 0](/img/poc0.png)
_Moving obstacles, if the rocket touches it the player looses_
![POC Screenshot 0](/img/poc1.png)
_Thrust and landing platform_
![POC Screenshot 0](/img/poc2.png)
_Dynamic camera movement and first shaders_
![Intro](/img/intro-scene.png)
_This screenshot shows the introscene that tells the story of the game and will be shown before the first level_
![game](/img/game.png)
_After the introscene the game starts. Additional effects like glow etc. were added_

## Results from this week
What the game currently offers:
- a rocket with two thrusts (controlled via arrow keys)
- a landing platform (if a player lands the rocket successfully a success / failed message appears)
- ground exitst (must be avoided by the rocket)
- game style was agreed on (retro, sci-fi, old space operation terminals, CT-scan style graphics)
- a fuelbar is implemented (if rocket runs out of fuel, the player cant use the thrusts anymore)
- blog was setup, as well as all other dev related environments

