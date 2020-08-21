---
title: Commands
description: 'A list of TitleManager commands'
position: 5
category: Guide
---

All commands start with either `/tm` or `/titlemanager`  

`<argument>` is a required argument.  
`[argument]` is an optional argument.  

Adding `%{placeholder}` or `%{placeholder:parameter}` will replace the given placeholder with its respected value.  
Adding `${animation}` will replace the animation in the message with the given animation.  
Adding `${script:input}` will replace the script and input value with a generated animation.  

<alert type="info">

The permissions for the commands can be found [here](/admins/permissions).

</alert>

## Commands

### Broadcast
Sends a title message to everyone on the server, put `<nl>`, `{nl}` or `%nl%` inside the message, to add a subtitle.

#### Format
`/tm bc [parameters] <message>`  
`/tm broadcast [parameters] <message>`

#### Arguments  
`[parameters]` - The additional parameters.  
`<message>` - The message to be shown.

#### Supported parameters
- silent
- fadein
- stay
- fadeout
- radius
- world

### Actionbar Broadcast
Sends an actionbar message to everyone on the server.

#### Format
`/tm abc [parameters] <message>`  
`/tm abroadcast [parameters] <message>`

#### Supported parameters
- silent
- radius
- world

### Message
Sends a title message to the specified player, put `<nl>` or `{nl}` or `%nl%` inside of the message, to add a subtitle.

#### Format
`/tm msg [parameters] <player> <message>`  
`/tm message [parameters] <player> <message>`

#### Arguments
`[parameters]` - The additional parameters.  
`<player>` - The player the message should be sent to.  
`<message>` - The message to be shown.  

#### Supported parameters
- silent
- fadein
- stay
- fadeout

### Actionbar Message
Sends an actionbar message to the specified player.

#### Format
`/tm amsg [parameters] <player> <message>`  
`/tm amessage [parameters] <player> <message>`

#### Arguments
`[parameters]` - The additional parameters.  
`<player>` - The player the message should be sent to.  
`<message>` - The message to be shown.

#### Supported parameters
- silent

### Scoreboard Toggle
Toggles the scoreboard on and off.

#### Format
`/tm sb toggle`

### Animations
Lists all currently loaded animations.

#### Format
`/tm animations`

### Scripts
Lists all currently loaded scripts.

#### Format
`/tm scripts`

### Reload
Reloads the configuration file, animations and scripts.

#### Format
`/tm reload`

## Parameters
### Silent
> Useful for voting commands as the console won't be spammed by messages anymore.

Makes it so that the command won't return any response text.  

#### Format
`-silent`  

### Fade in
Sets the fade-in time it takes for the title to fade onto the screen (measured in ticks).

#### Format
`-fadein=ticks`  

#### Example
`-fadein=20` Will set the fade-in time to 20 ticks (1 second).  

### Stay
Sets the stay time it takes for the title to stay on the screen (measured in ticks).

#### Format
`-stay=ticks`  

#### Example
`-stay=40` Will set the stay time to 40 ticks (2 seconds).  

### Fade out
Sets the fade-in time it takes for the title to fade off of the screen (measured in ticks).

#### Format
`-fadeout=ticks`  

#### Example
`-fadeout=20` Will set the fade-in time to 20 ticks (1 second).  

### World
Limits broadcasts to the given world, if no world is chosen and the sender is a player, the world will be the world the player is currently located in.

#### Format
`-world`  
`-world=worldname`  

#### Example
`-world=PlotWorld`  

### Radius
Limits broadcasts to the given amount of blocks around of the sending player. If the sender is not a player, then this parameter doesn't do anything.

#### Format
`-radius=radius`  

#### Example
`-radius=10`
