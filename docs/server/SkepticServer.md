# SkepticServer

## Overview

The client-side version of the Skeptic Framework. This is the only ModuleScript that needs to be required from anywhere to access the Skeptic Framework on the client.

```lua title="Accessing SkepticServer"
local Skeptic = require(game:GetService("ServerScriptService").SkepticServer)
```

## Events

#### PlayerJoined
```lua
Skeptic.PlayerJoined:Connect(function(
    playerObject: Skeptic.PlayerObject
) ... end)
```

_See: [PlayerObject](players/PlayerObject.md)_

Fires when a player joins and when their PlayerObject is minimally initialized. 

!!! info
    The player's data and PlayerHandlers may not be immediately available when this event fires. 

#### PlayerLeft
```lua
Skeptic.PlayerLeft:Connect(function(
    player: Player
) ... end)
```

Fires when a player leaves. 

!!! warning
    Their PlayerObject technically unloads after this event fires, however it is unsafe to assume that their data or PlayerHandlers will still be accessible as normal. Unless necessary, unloading logic should be handled in PlayerHandlers with [`playerObject:BindToLeave()`](players/PlayerObject.md#bindtoleave)

## Properties

#### Players
```lua
Skeptic.Players: Skeptic.Players
```

_See: [Players](players/Players.md)_

#### Events
```lua
Skeptic.Events: Skeptic.Events
```

_See: [Events](events/Events.md)_

#### Version
```lua
Skeptic.Version: Skeptic.Version
```

_See: [Version](VersionPage.md)_

#### Analytics
```lua
Skeptic.Analytics: Skeptic.Analytics
```

_See: [Analytics](Analytics.md)_