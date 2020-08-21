---
title: Scoreboard
description: 'Working with the scoreboard'
position: 14
category: Developers
---

The scoreboard is the sidebar shown on the right side of the player's screen. The scoreboard is made of a title and 1 to 15 lines of text. If there are no values (the 1-15 lines of text), then the scoreboard won't be shown.

<alert type="warning">

The values can only be a maximum of 42 characters long **(color codes included)**.

</alert>

## Commonly used methods

### General
<alert type="info">

The scoreboard won't be shown if it is empty.

</alert>

#### Giving the player a scoreboard
```java
api.giveScoreboard(player);
```

#### Checking if the player has a scoreboard already
```java
api.hasScoreboard(player);
```

#### Removing scoreboard from player
```java
api.removeScoreboard(player);
```

### Scoreboard title
<alert type="warning">

The scoreboard title can only be a maximum of 32 characters long **(color codes included)**.

</alert>

#### Setting the title
<code-group>
  <code-block label="No placeholders" active>

  ```java
  api.setScoreboardTitle(player, "My title");
  ```

  </code-block>
  <code-block label="Placeholders">

  ```java
  api.setScoreboardTitleWithPlaceholders(player, "My title");
  ```

  </code-block>
</code-group>

#### Getting the title
```java
api.getScoreboardTitle(player);
```

### Scoreboard values
<alert type="info">

The index is a number from 1 to 15 **inclusive**.

</alert>

#### Setting without placeholders
<code-group>
  <code-block label="No placeholders" active>

  ```java
  api.setScoreboardValue(player, index, "My value");
  ```

  </code-block>
  <code-block label="Placeholders">

  ```java
  api.setScoreboardValueWithPlaceholders(player, 1, "My value");
  ```

  </code-block>
</code-group>

#### Getting a value at a given index
```java
api.getScoreboardValue(player, index);
```

#### Removing a value at a given index
```java
api.removeScoreboardValue(player, index);
```
