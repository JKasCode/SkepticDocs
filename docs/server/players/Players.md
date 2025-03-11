[PlayerObject]: PlayerObject.md
[PlayerHandler]: PlayerHandler.md

# Players

## Overview

The Player module contains methods to access PlayerObjects and access or define PlayerHandlers. 

## Properties

#### PlayerProfileStore
``` lua
Skeptic.Players.PlayerProfileStore: any
```

A reference to the ProfileStore created for player data managed by the framework.

#### ProfileService
``` lua
Skeptic.Players.ProfileService: any
```

A reference to the framework's version of [ProfileService](https://madstudioroblox.github.io/ProfileService/). ProfileService is a player data management module created by Mad Studio.

## Methods

#### GetPlayerObject
```lua
Skeptic.Players:GetPlayerObject(
    player: Player
) -> Skeptic.PlayerObject?
```

_See: [PlayerObject]_

Returns the PlayerObject given the Player in the server, if it exists.

#### GetPlayerHandler
```lua
Skeptic.Players:GetPlayerHandler(
    player: Player,
    handler: string
) -> Skeptic.PlayerHandler?
```

_See: [PlayerHandler]_

Returns the relevant PlayerHandler for that player, if it exists. This simply calls `GetPlayerObject(player):GetHandler(handler)` behind the scenes.

#### IsPlayerInGame
```lua
Skeptic.Players:IsPlayerInGame(
    player: Player | Skeptic.PlayerObject
) -> boolean
```

Returns `true` if the player currently has a loaded PlayerObject in this server. Any Instance or table can be passed.

#### GetPlayers
```lua
Skeptic.Players:GetPlayers() -> { Skeptic.PlayerObject }
```

_See: [PlayerObject]_

Returns a table of PlayerObjects that are currently loaded in the server.

#### DefineDataTemplateKey
```lua
Skeptic.Players:DefineDataTemplateKey(
    key: string,
    default: any
)
```

Defines a key that will be present in all players' data. By default, this key will have the default value given in the function. Calling `PlayerObject:GetData(key)` after using this function will return the previously saved value or the default value provided, even if that player did not have that data key before.

#### LockDataTemplate
```lua
Skeptic.Players:LockDataTemplate()
```

Locks the DataTemplate and provides the template table to ProfileService. Attempting to call `DefineDataTemplateKey` after calling this will throw an error.

!!! info 
    This method **must** be called once any relevant scripts have finished defining DataTemplate keys in order for the keys to appear in player data.

#### AddPlayerHandler
```lua
Skeptic.Players:AddPlayerHandler(
    name: string,
    onPlayerAdded: (playerObject: Skeptic.PlayerObject) -> ({ any })
)
```

_See: [PlayerHandler], [Creating a PlayerHandler](PlayerHandler.md#creating-a-playerhandler)_

Defines a function to create a PlayerHandler with the given name. Calling [`playerObject:GetHandler(name)`](PlayerObject.md#gethandler)) will return the result of the "onPlayerAdded" function, initialized with the default properties of PlayerHandlers. 

#### AddPlayerHandlerPreInitialized
```lua
Skeptic.Players:AddPlayerHandlerPreInitialized(
    name: string,
    onPlayerAdded: (baseHandler: Skeptic.PlayerHandler) -> ({ any })
)
```

Defines a function to create a PlayerHandler with the given name. Rather than passing the PlayerObject, this passes an initialized PlayerHandler object to be modified.

!!! warning
    This method was created to support handlers created before V3. `:AddPlayerHandler()` should always be used in new work.