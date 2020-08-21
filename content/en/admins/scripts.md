---
title: Scripts
description: 'The scripts that spice up TitleManager'
position: 8
category: Guide
---

## Shine
![Shine example](https://github.com/Puharesource/TitleManager/blob/master/animation-gifs/shine.gif?raw=true)

```
${shine:[fade-in,stay,fade-out][primary-color,secondary-color]My text}
```

## Marquee
![Marquee example](https://github.com/Puharesource/TitleManager/blob/master/animation-gifs/marquee.gif?raw=true)

```
${marquee:[fade-in,stay,fade-out][marquee-width]My text}
```

## Text write
![Text write example](https://github.com/Puharesource/TitleManager/blob/master/animation-gifs/text_write.gif?raw=true)

```
${text_write:[fade-in,stay,fade-out]My text}
```

## Text delete
![Text delete example](https://github.com/Puharesource/TitleManager/blob/master/animation-gifs/text_delete.gif?raw=true)

```
${text_delete:[fade-in,stay,fade-out]My text}
```

## Countdown
![Countdown example](https://github.com/Puharesource/TitleManager/blob/master/animation-gifs/count_down.gif?raw=true)

```
${count_down:[fade-in,stay,fade-out]10}
```
`10` is the amount that will be counted

## Count
![Count example](https://github.com/Puharesource/TitleManager/blob/master/animation-gifs/count_up.gif?raw=true)

```
${count_up:[fade-in,stay,fade-out]10}
```
`10` is the amount that will be counted

## Gradient
![Gradient example](https://i.imgur.com/DjAXN6W.gif)

> **Minecraft version 1.16 and above ONLY**

Creates a gradient with the given text and HEX colors that cycles through each color and has bold text.  
You can use `bold`, `strikethrough`, `underline` & `magic` to change the style of the text.

```
${gradient:[#ff0000,#00ff00,#0000ff,#ff0000,bold]My HEX gradient text}
```

## Color cycle
<alert type="">

**No example**

</alert>

> **Minecraft version 1.16 and above ONLY**

Creates a single color that fades into all of the given colors.

```
${gradient_color:[#ff0000,#00ff00,#0000ff]}My HEX colored text
```
