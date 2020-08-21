---
title: Getting started
description: 'Getting started with the TitleManager API'
position: 10
category: Developers
---

This is the getting started guide for using the TitleManager API.
If you're looking for the JavaDocs they can be found [here](https://tarkan.dev/javadoc/titlemanager).

## Build tools

Add the TitleManager repository to your project:

<code-group>
  <code-block label="pom.xml" active>

  ```xml
  <repository>
    <id>puha-repo</id>
    <url>http://repo.puha.io/repo/</url>
  </repository>
  ```

  </code-block>
  <code-block label="build.gradle">

  ```groovy
  maven {
      name 'puharesource-repo'
      url 'http://repo.puha.io/repo/'
  }
  ```

  </code-block>
  <code-block label="build.gradle.kts">

  ```kotlin
  maven {
      name = "puharesource-repo"
      url = uri("http://repo.puha.io/repo/")
  }
  ```

  </code-block>
</code-group>

Add the TitleManager repository to your project:

<code-group>
  <code-block label="pom.xml" active>

  ```xml
  <dependency>
     <groupId>io.puharesource.mc</groupId>
     <artifactId>TitleManager</artifactId>
     <version>2.2.0</version>
  </dependency>
  ```

  </code-block>
  <code-block label="build.gradle">

  ```groovy
  compile group: 'io.puharesource.mc', name: 'TitleManager', version: '2.2.0'
  ```

  </code-block>
  <code-block label="build.gradle.kts">

  ```kotlin
  implementation(group = "io.puharesource.mc", name = "TitleManager", version = "2.2.0")
  ```

  </code-block>
</code-group>

## Plugin integration

### plugin.yml

If your plugin can't run without TitleManager add the following line to your plugin.yml file:

```yaml
depend: [TitleManager]
```

If your plugin can run without TitleManager, then add the following line to your plugin.yml file instead:

```yaml
soft-depend: [TitleManager]
```

### Getting the API instance

<code-group>
  <code-block label="Java" active>

  ```java
  @Override
  public void onEnable() {
    TitleManagerAPI api = (TitleManagerAPI) Bukkit.getServer().getPluginManager().getPlugin("TitleManager");
  }
  ```

  </code-block>
  <code-block label="Kotlin">

  ```kotlin
  override fun onEnable() {
    val api = Bukkit.getServer().pluginManager.getPlugin("TitleManager") as TitleManagerAPI
  }
  ```

  </code-block>
</code-group>
