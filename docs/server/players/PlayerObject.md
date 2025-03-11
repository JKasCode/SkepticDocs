[PlayerHandler]: PlayerHandler.md

# PlayerObject

## Overview

A wrapper for the Player Instance, created automatically for each player in the server. This holds references to all [PlayerHandlers](PlayerHandler.md) created for the player, as well as important methods to manage player data and more. This is a core component of the Skeptic Framework.

## Properties

#### Player
```lua
playerObject.Player: Player
```

{read-only}

A reference to the Player.

#### Profile
```lua
playerObject.Profile: any
```

A reference to the ProfileService Profile created for this player.

## Methods

#### GetHandler
```lua
playerObject:GetHandler(
    handlerName: string
) -> Skeptic.PlayerHandler
```

_See: [PlayerHandler]_

Returns a PlayerHandler by name, if it exists.

!!! warning
    Some handlers will take time to load, and may not be immediately available. Please use [`:BindToLoaded`](#bindtoloaded) to guarantee that all handlers will be loaded.

#### Tunnel
```lua
playerObject:Tunnel(
    handlerName: string,
    method: string,
    ...: any
)
```

Run a method in a handler. Will error if the handler does not exist yet. Generally, `:GetHandler` should be used in place of this.

#### PushRequest
```lua
playerObject:PushRequest(
    handler: string | Skeptic.PlayerHandler,
    alterCallback: (any) -> (any?)
)
```

_See: [Requester](../../client/resources/Resources.md#requester)_

Push a request from the given handler to the client. "alterCallback" accepts the value returned by `playerHandler:Request()`, and returns a new value to replace it. If "alterCallback" returns `nil`, then it is ignored and the original value will be returned anyway.

#### BindToLoaded
```lua
playerObject:BindToLoaded(
    fn: () -> ()
)
```

Bind a function to run when this PlayerObject finishes loading, and when [`playerObject:IsServerLoaded()`](#isserverloaded) returns true.

#### BindToClientLoaded
```lua
playerObject:BindToClientLoaded(
    fn: () -> ()
)
```

Bind a function to run when the client fires an event to indicate they mostly finished loading, and when [`playerObject:IsClientLoaded()`](#isclientloaded) returns true.

#### BindToLeave
```lua
playerObject:BindToLeave(
    fn: () -> ()
)
```

Bind a function to run when the player leaves the server. Functions bound here will run _after_ their Profile is released (their data is unloaded), and _before_ their PlayerHandlers are cleared.

!!! info
    Modifying data in a function passed to `:BindToLeave()` is not guaranteed to save the data. All data should be saved immediately as they are modified, and should not be applied before the player leaves.

!!! warning
    The PlayerObject will run all functions bound here one-by-one until they are complete before clearing PlayerHandlers and removing the reference to the PlayerObject. Ensure that these binds do not error and yield for as little possible, if absolutely necessary.

#### IsServerLoaded
```lua
playerObject:IsServerLoaded() -> boolean
```

Returns true when all their PlayerHandlers and the player's Profile are loaded.

#### IsClientLoaded
```lua
playerObject:IsClientLoaded() -> boolean
```

Returns true if the player has indicated with a RemoteEvent that they finished loading. This method is not guaranteed to accurately represent the client-side state.

#### IsInGame
```lua
playerObject:IsInGame() -> boolean
```

Returns true if the player has not yet left the game. Will only return false after they left the game, regardless of if they're loaded in or not.

#### GetData
```lua
playerObject:GetData(
    key: string
) -> any?
```

_See: [Skeptic.Players:DefineDataTemplateKey()](Players.md#definedatatemplatekey)_

Returns a deepcopy of the data stored in that key. 

!!! info
    This method is guaranteed to return either the most recently saved value or the default value defined by `:DefineDataTemplateKey()`. 

#### UpdateData
```lua
playerObject:UpdateData(
    key: string,
    updateFn: (any) -> (any?) 
)
```

_See: [Skeptic.Players:DefineDataTemplateKey()](Players.md#definedatatemplatekey)_

Update a key in the players data. This method does not yield. 

"updateFn" accepts a deepcopy of the previously saved data as the only argument, and returns the new data to be saved in that key. If `nil` is returned, then the operation is cancelled and the data is unsaved.

!!! info
    You can assume that data updated with this function will always save. With over 230 million total visits, we have yet to hear any reports of data loss.

#### LogCustomEvent
```lua
playerObject:LogCustomEvent(
    eventName: string,
    value: number?,
    customFields: { [string]: any }?
)
```

_See: [Analytics](../Analytics.md)_

#### LogOnboardingFunnelStep
```lua
playerObject:LogOnboardingFunnelStep(
    stepId: string,
    customFields: { [string]: any }?
)
```

_See: [Analytics](../Analytics.md)_

#### BeginFunnelSession
```lua
playerObject:BeginFunnelSession(
    funnelName: string,
    sessionId: string?
) -> any
```

_See: [Analytics](../Analytics.md)_