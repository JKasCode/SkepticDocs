# SkepticClient

## Overview

The client-side version of the Skeptic Framework. This is the only ModuleScript that needs to be required from anywhere to access the Skeptic Framework on the client.

```lua title="Accessing SkepticClient"
local Skeptic = require(game:GetService("ReplicatedStorage").SkepticClient)
```

## Properties

#### Player
```lua
Skeptic.Player: Player
```

A reference to `#!lua game:GetService("Players").LocalPlayer`.

#### GUI
```lua
Skeptic.GUI: Frame?
```

Equivelant to [`Skeptic.Resources.GUI`](resources/Resources.md#gui).

#### Resources
```lua
Skeptic.Resources: Skeptic.Resources
```

_See: [Resources](resources/Resources.md)_

#### Interface
```lua
Skeptic.Interface: Skeptic.Interface
```

_See: [Interface](Interface.md)_

#### Events
```lua
Skeptic.Events: Skeptic.Events
```

_See: [Events](events/Events.md)_

#### ClientModules
```lua
Skeptic.ClientModules: LuaSourceContainer?
```

Defined by [`:RegisterClientModules()`](#registerclientmodules).

## Methods

#### RegisterClientModules
```lua
Skeptic:RegisterClientModules(
    parent: LuaSourceContainer
)
```

Register a reference to the location with the majority of modules used on the client-side. Will error if client modules have already been registered.

#### UpdateServerLoadStatus
```lua
Skeptic:UpdateServerLoadStatus(
    log: any
)
```

Notify the server that the client-side has finished loading, which runs any functions bound with [`:BindToClientLoaded()`](../server/players/PlayerObject.md#bindtoclientloaded).