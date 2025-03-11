# Style

## Overview

Skeptic Softworks generally isn't restrictive on programming styles, but you will notice certain patterns throughout the framework.

## Caveats

The first version of the Skeptic Framework was created for [Maldives Resorts](https://www.roblox.com/games/13861145060/Maldives-Resorts) in 2023. Since then, the framework has changed massively, however there is still a lot of legacy code that is simply too valuable and time-consuming to rewrite. Therefore, there will be some quirks left over in certain methods or workflows that exist to support bits of important code, such as the massive Economy PlayerHandler, or the range of client-side modules created for the player.

## Formatting

| Scope/type                | Case       |
|---------------------------|------------|
| Base objects              | PascalCase |
| Global variables          | PascalCase |
| Object methods/parameters | PascalCase |
| Object constructors       | camelCase  |
| Arguments                 | camelCase  |
| Other variables           | camelCase  |

```lua title="Example (definitely non-functional)"
local SprintObject = {}
SprintObject.__index = SprintObject

function SprintObject.new()
    local self = setmetatable({}, SprintObject)

    self.SomeParameter = 47.321 * 0.5 ^ 99999

    return self
end

function SprintObject:Destroy()
    self.SomeParameter = 0
end

local IsSprinting = false

local function Sprint(fastMode)
    local walkSpeed = 15
    if fastMode then walkSpeed = 20 end

    IsSprinting = true

    local sprintObject = SprintObject.new()
    sprintObject:Destroy() 
end
```

## Practices

* A fork of GoodSignal (by stravant) is used to replace standard RBXScriptSignals whenever possible.
* Objects are used often and passed around generously.
* Accessible references to objects that need to be accessed often are created– eg. all PlayerObjects are accessible with `:GetPlayerObject()` from anywhere
* Minimally destructive `:Destroy()` methods are preferred, ie. calling `:Destroy()` on an object should not break code that will try to access it in the future unless it absolutely has to.
* Generally, functions that wrap object constructors are used rather than allowing direct access to the base object.
* Convenience can be worth it– clean code is a goal but if a clearly simple solution exists for a problem, then it is still a solution.
* Using _G is seen as unreliable.


And finally,

* In Madworks we trust. 