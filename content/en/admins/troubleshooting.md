---
title: Troubleshooting
description: 'Troubleshooting TitleManager'
position: 9
category: Guide
---

## Special characters not working
### Fixing the config.yml file encoding
To fix the issue, you'll have to save your file with the file encoding `UTF-8`, here's how to do it on multiple different editors.

<code-group>
  <code-block label="Notepad++" active>

  ```
  Encoding > Encode in UTF-8
  or
  Encoding > Convert to UTF-8
  ```

  </code-block>
  <code-block label="Sublime Text">

  ```
  File > Save with Encoding > UTF-8
  ```

  </code-block>
  <code-block label="Atom">

  ```
  Edit > Select Encoding > UTF-8
  ```

  </code-block>
</code-group>

### Editing your launch script
<alert type="warning">

This only works if you have full control of your host, and the launch script.

</alert>

If changing the file encoding of the `config.yml` file didn't work,
then editing your launch script might work.

You'll have to add the parameter `-Dfile.encoding=UTF-8` to your launch script, here's an example:

<code-group>
  <code-block label="No extra arguments" active>

  ```bash
  java -Dfile.encoding=UTF-8 -jar spigot.jar
  ```

  </code-block>
  <code-block label="Extra arguments">

  ```bash
  java -Xms=256M -Xms=1024M -Dfile.encoding=UTF-8 -jar spigot.jar
  ```

  </code-block>
</code-group>
