---
title: Animations
description: 'How to create basic animations'
position: 7
category: Guide
---

Animations spark life to your server and are easy to create,
just by adding a few lines to a text file or two.

## Creating an animation
<alert type="info">

The animation files are located in the `plugins/TitleManager/animations` directory.

</alert>

<alert type="info">

Need help creating your animations? Try out the animation generator [here](https://tarkan.dev/tmgenerator).

</alert>

### Naming
The name of the animation comes from whatever comes before `.txt` in the file name.

### Timings
<alert type="warning">

The `fadeIn` and `fadeOut` values will act as the `stay` value when used outside of titles.

</alert>

All lines (frames) in an animation start with `[fadeIn;stay;fadeOut]`

Here's what these values do for each type of animation:
#### fadeIn
The amount of ticks it takes for the title to fade into view.

#### stay
The amount of ticks the title stays on screen.

#### fadeOut
The amount of ticks it takes for the title to fade out of view.

## Example
Below you see an example of two animations on the player list and their corresponding files.
![Example animation](https://i.imgur.com/KFgC8V1.gif)

<code-group>
  <code-block label="left-to-right" active>

  ```[left-to-right.txt]
  [0;5;0]&7&b-&7---------
  [0;2;0]&7-&b-&7--------
  [0;2;0]&7--&b-&7-------
  [0;2;0]&7---&b-&7------
  [0;2;0]&7----&b-&7-----
  [0;2;0]&7-----&b-&7----
  [0;2;0]&7------&b-&7---
  [0;2;0]&7-------&b-&7--
  [0;2;0]&7--------&b-&7-
  [0;5;0]&7---------&b-&7
  [0;2;0]&7--------&b-&7-
  [0;2;0]&7-------&b-&7--
  [0;2;0]&7------&b-&7---
  [0;2;0]&7-----&b-&7----
  [0;2;0]&7----&b-&7-----
  [0;2;0]&7---&b-&7------
  [0;2;0]&7--&b-&7-------
  [0;2;0]&7-&b-&7--------
  ```

  </code-block>
  <code-block label="right-to-left">

  ```[right-to-left.txt]
  [0;5;0]&7---------&b-&7
  [0;2;0]&7--------&b-&7-
  [0;2;0]&7-------&b-&7--
  [0;2;0]&7------&b-&7---
  [0;2;0]&7-----&b-&7----
  [0;2;0]&7----&b-&7-----
  [0;2;0]&7---&b-&7------
  [0;2;0]&7--&b-&7-------
  [0;2;0]&7-&b-&7--------
  [0;5;0]&7&b-&7---------
  [0;2;0]&7-&b-&7--------
  [0;2;0]&7--&b-&7-------
  [0;2;0]&7---&b-&7------
  [0;2;0]&7----&b-&7-----
  [0;2;0]&7-----&b-&7----
  [0;2;0]&7------&b-&7---
  [0;2;0]&7-------&b-&7--
  [0;2;0]&7--------&b-&7-
  ```

  </code-block>
</code-group>
