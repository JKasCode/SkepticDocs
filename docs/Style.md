# Style

## Overview

Skeptic Softworks generally isn't restrictive on programming styles, but you will notice certain patterns throughout the framework.

## Caveats

The first version of the Skeptic Framework was created for [Maldives Resorts](https://www.roblox.com/games/13861145060/Maldives-Resorts) in 2023. Since then, the framework has changed massively, however there is still a lot of legacy code that is simply too valuable and time-consuming to rewrite. Therefore, there will be some quirks left over in certain methods or workflows that exist to support bits of important code, such as the large Economy PlayerHandler, or the range of client-side modules created for the player.

## Formatting

Formatting style is mostly based off the [Roblox Lua Style Guide](https://roblox.github.io/lua-style-guide/). 

Some legacy code will not follow this style and is actively being reformatted. New code, however, should follow this style guide.

## Practices

* A fork of GoodSignal (by stravant) is used to replace standard RBXScriptSignals whenever possible.
* Accessible references to objects that need to be accessed often are created– eg. all PlayerObjects are accessible with `:GetPlayerObject()` from anywhere
* Minimally destructive `:Destroy()` methods are preferred, ie. calling `:Destroy()` on an object should not break code that will try to access it in the future unless it absolutely has to.
* Generally, functions that wrap object constructors are used rather than allowing direct access to the base object, as this allows direct access to object methods which are meaningless without an object to use them on.
* Historically, promises haven't been used in code with the framework, though using this class is encouraged in newer work.
* Maid/janitor classes historically haven't been used either. Connections are tracked on an individual basis, though using these classes are encouraged in newer work.
* Using _G is seen as unreliable.
* In Madworks we trust.

## Version 4 notes

{version4}

Since Version 4, code has been reorganized to keep all code besides the Skeptic Framework within 3 locations:

* **Client-side code**: ReplicatedStorage.Client
* **Shared code**: ReplicatedStorage.Shared
* **Server-side code**: ServerScriptService.Server

Ideally, these are the only places where code should be edited for a project. Code elsewhere are dependencies or framework code that do not need to be edited.

However, code is also stored in other locations:

* **SkepticServer/SkepticClient**: Stored directly in ReplicatedStorage and ServerScriptService.
* **Legacy Skeptic modules**: Some modules are required by Skeptic dependencies and would require a large restructure to move them. These are kept in ReplicatedStorage.Skeptic. You shouldn't need to require these, as they have identical mirrors in ReplicatedStorage.Shared.
* **Skeptic dependencies**: Stored directly in ServerScriptService.
* **Init scripts**: Stored directly in ReplicatedStorage and ServerScriptService. These call the client-side/server-side code.