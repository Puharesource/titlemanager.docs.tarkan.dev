---
title: Actionbar messages
description: 'Working with actionbar messages'
position: 12
category: Developers
---

An actionbar message is the message shown on top of the actionbar on the player's screen. The time shown on the player's screen is however not changeable and only stays for approximately 3 seconds.

## Sending an actionbar title
<code-group>
  <code-block label="No placeholders" active>

  ```java
  api.sendActionbar(player, "My message");
  ```

  </code-block>
  <code-block label="Placeholders">

  ```java
  api.sendActionbarWithPlaceholders(player, "My message");
  ```

  </code-block>
</code-group>

## Clearing the actionbar
```java
api.clearActionbar(player);
```
