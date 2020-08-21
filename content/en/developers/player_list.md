---
title: Player list
description: 'Working with the player list'
position: 13
category: Developers
---

The player list header and footer is the text shown above and underneath the player list, on the player's screen when holding the key `TAB` on their keyboard.

## Setting the header and footer
<code-group>
  <code-block label="No placeholders" active>

  ```java
  api.setHeader(player, "My header");
  api.setFooter(player, "My footer");
  ```

  </code-block>
  <code-block label="Placeholders">

  ```java
  api.setHeaderWithPlaceholders(player, "My header");
  api.setFooterWithPlaceholders(player, "My footer");
  ```

  </code-block>
</code-group>

## Getting the header and footer values
```java
api.getHeader(player);
api.getFooter(player);
```
