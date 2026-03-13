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
timeSpent: 13
},
{
author: 'Marvin Fuchs',
expectedHours: 8,
timeSpent: 13
}
]} />

## Tasks

<TaskList data={[
{
id: 1,
title: 'Identify architectual tech debt',
description: 'Identify anti-patterns in the current architecture of the game',
owner: 'Marvin & Matteo',
status: 'done'
},
{
id: 2,
title: 'Plan a redesigned architecture',
description: 'Apply the knowledge learned in class and address the anti-patterns found in the previous task',
owner: 'Marvin & Matteo',
status: 'done'
},
{
id: 3,
title: 'Architecture Redesign',
description: 'Refactor to enhance separation of conecerns and adhere to SOLID principles. Use the UML diagram as guideline',
owner: 'Matteo & Marvin',
status: 'done'
},
{
id: 4,
title: 'Game Music',
description: 'Create and implement a theme song in strudel and integrate it in unity',
owner: 'Matteo',
status: 'done'
},
]} />

## Theme / Backround Song

To make the game feel even more immersive, we worked on adding a theme song that fits into the retro, sci-fi style of the game.
As we are both not deeply experienced in digital music creation or editing we went with a very modern way of creating music. This modern way
is by writing code. We used the _strudel_ project to "code" a little catchy audio that can be easily looped.
While players now play our game they will hear this song.

## Architecture Refactoring

As the rocket landing game grew, the original implementation started to show common issues found in early Unity prototypes. Many responsibilities were handled inside a single controller, including rocket physics, landing validation, UI updates, and game state management. This resulted in tightly coupled systems that were difficult to maintain and extend.

To improve the structure of the project, the architecture was redesigned using **SOLID principles** and **Separation of Concerns (SoC)**.

### Separation of Concerns

The main goal of the refactoring was to clearly separate different responsibilities in the game. Instead of one large controller handling everything, the system is divided into several components:

- `RocketController` handles rocket physics and input.
- `StateManager` manages game state such as landing success or failure.
- `SceneManager` controls scene-level behavior like restarting the game.
- `DataStorage` stores gameplay data such as speed, altitude, fuel, tilt, and heading.

UI elements such as gauges, numeric displays, and indicator lights are managed by separate controllers that read their values from `DataStorage`.

This separation ensures that gameplay logic is independent from the presentation layer.

### Applying SOLID Principles

The refactoring mainly focused on the following SOLID concepts:

- **Single Responsibility Principle**  
  Each class now has a single clear purpose, such as controlling the rocket, managing state, or displaying data.

- **Open/Closed Principle**  
  New instruments (for example gauges or indicators) can be added without modifying existing gameplay code.

- **Dependency Inversion**  
  Instead of directly updating UI elements, gameplay systems write data to `DataStorage`, which is then used by UI controllers.

### Benefits

This architectural redesign improves:

- **Maintainability**, because responsibilities are clearly separated
- **Extensibility**, since new UI elements can easily be added
- **Code readability**, due to smaller and more focused classes

Overall, applying SOLID principles and Separation of Concerns resulted in a more modular and scalable Unity project structure.
The following UML diagram shows the refactored architecture:

![refactored architecture](/img/refactored-architecture.svg)

### Script Order

By having a clean architecture that does not contain cyclic dependencies a clear
order of imports arises. This order can be used to specify a strict [script execution order](https://docs.unity3d.com/6000.3/Documentation/Manual/class-MonoManager.html)
fixing issues arising from dependencies of importing script not being initialized when
the importing script is started.

In our case the script order or import graph goes as follows:

![import order](/img/import-order.svg)

DataStorage needs to be initialized first, after that the game
entities are initialized, consisting of the Rocket and LandingPad
controllers and all the Gauges.

Lastly the StateManager is initialized as it depends on the
game entity controllers.
