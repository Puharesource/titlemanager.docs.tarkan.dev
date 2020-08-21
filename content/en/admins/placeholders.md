---
title: Placeholders
description: 'Using placeholders'
position: 4
category: Guide
---

TitleManager provides you with a ton of placeholders for your titles, headers and alike.
These placeholders are as followed:

For more placeholders download the plugin [Clips PlaceholderAPI](https://www.spigotmc.org/resources/clips-placeholderapi.6245/) and enjoy its many placeholders in use!

<alert type="warning">

Clips PlaceholderAPI does not use the TitleManager syntax for placeholders and you will therefor need to write your placeholders as like this: `%placeholder%`.

</alert>

## Normal Placeholders

| Placeholder           | Description |
| ----------------------| ----------- |
| %{player}             | The player's username. |
| %{displayname}        | The player's display name (nickname). |
| %{strippeddisplayname}| The player's displayname (nickname), without colors. |
| %{world}              | The current name of the world that the player is in. |
| %{world-time}         | The current time of the world the player is in. |
| %{12h-world-time}     | The current time of the world the player is in, in a 12 hour format. |
| %{24h-world-time}     | The current time of the world the player is in, in a 24 hour format. |
| %{world-online}       | The current amount of players in the world the player is in. |
| %{online}             | The current amount of players on the server. |
| %{max}                | The max amount of players on the server. |
| %{server-time}        | The current time of the server. |
| %{ping}               | The player's ping. |
| %{group}              | The primary group name of the player. *(requires vault)* |
| %{balance}            | The player's balance. |
| %{safe-online}        | The amount of online player's without vanished players. (Requires Essentials, VanishNoPacket and / or SuperVanish) |
| %{tps} | Shows the TPS of the server |
| %{c:YourHexColorHere} | (Minecraft v1.16 and above only) Creates a HEX color code. Replace `YourHexColorHere` with a HEX color, example: `%{c:#ffff00}` |
| %{gradient:[Your,Colors,Here]YourTextHere} | (Minecraft v1.16 and above only) Creates a HEX color gradient. Replace `Your,Colors,Here` with a comma-separated list of HEX colors & YourTextHere with the text you want to have a gradient, example: `%{gradient:[#ff0000,#00ff00,#0000ff]My HEX gradient text}` |

## BungeeCord Placeholders
<alert type="warning">

You need to enable `using-bungeecord` in the configuration file for these placeholders to work.

</alert>

| Placeholders            | Description |
| ------------------------| ----------- |
| %{bungeecord-online}    | Displays the combined player count of all servers behind BungeeCord. |
| %{online:YourServerHere}| Displays the player count of the given server. (Replace YourServerHere with the bungeecord server name) |
| %{server}               | Displays the current server's BungeeCord name. |
