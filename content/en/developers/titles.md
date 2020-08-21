---
title: Title messages
description: 'Working with title messages'
position: 11
category: Developers
---

A title message is the message shown in the middle of a player's screen.
A title consists of a title and a subtitle, both of which can be sent individually.
Timings sent before the message will control how long the titles will stay on the players' screens.

## Sending a title
<code-group>
  <code-block label="No placeholders" active>

  ```java
  api.sendTitle(player, "My message", fadeIn, stay, fadeOut);
  ```

  </code-block>
  <code-block label="Placeholders">

  ```java
  api.sendTitleWithPlaceholders(player, "My message", fadeIn, stay, fadeOut);
  ```

  </code-block>
</code-group>

## Sending a subtitle
<code-group>
  <code-block label="No placeholders" active>

  ```java
  api.sendSubtitle(player, "My message");
  ```

  </code-block>
  <code-block label="Placeholders">

  ```java
  api.sendSubtitleWithPlaceholders(player, "My message");
  ```

  </code-block>
</code-group>

## Clearing titles before their stay time is over
<code-group>
  <code-block label="Both" active>

  ```java
  api.clearTitles(player);
  ```

  </code-block>
  <code-block label="Individually">

  ```java
  api.clearTitle(player);
  api.clearSubtitle(player);
  ```

  </code-block>
</code-group>
