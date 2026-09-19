[RemoteEventValidator]: RemoteEventValidator.md

# RemoteEventWrapper

## Overview

This object is a wrapper for RemoteEvents. To access the client-side version of the RemoteEventWrapper created on the server, use [`Skeptic.Events:GetEventAsnyc()`](../../client/events/Events.md).

## Events

#### OnServerEvent
```lua
event.OnServerEvent:Connect(function(
    playerObject: Skeptic.PlayerObject,
    ...: any
) ... end)
```

Fires when a client calls `#!lua event:FireServer(...)`.

#### ServerEventBlocked
```lua
event.ServerEventBlocked:Connect(function(
    playerObject: Skeptic.PlayerObject,
    reason: string,
    blockedArgument: any?
) ... end)
```

_See: [RemoteEventValidator]_

Fires when this event is blocked by the RemoteEventValidator. 

#### ServerEventRateLimited
```lua
event.ServerEventRateLimited:Connect(function(
    playerObject: Skeptic.PlayerObject,
    message: string
) ... end)
```

Fires when this event is ratelimited.

## Properties

#### Name
```lua
event.Name: string
```
The name of the RemoteEventWrapper.

#### RemoteEvent
```lua
event.RemoteEvent: RemoteEvent
```

A reference to the actual RemoteEvent created by the wrapper. 

!!! warning
    Avoid directly accessing this RemoteEvent, as lots of functionality is reliant on aspects of it on both the server- and client-side.

## Methods

#### FireClient
```lua
event:FireClient(
    player: Player | Skeptic.PlayerObject,
    ...: any
)
```

Fire an event to a specific client.

#### FireClients
```lua
event:FireClients(
    players: { Player | Skeptic.PlayerObject },
    ...: any
)
```

Fire an event to a list of clients.

#### FireAllClients
```lua
event:FireAllClients(
    ...: any
)
```

Fire an event to all clients loaded in the server.

#### FireAllExcept
```lua
event:FireAllExcept(
    player: Player | Skeptic.PlayerObject,
    ...: any
)
```

Fire an event to all clients except the one specified.

#### SetValidator
```lua
event:SetValidator(
    validator: Skeptic.Events.RemoteEventValidator
)
```
_See: [RemoteEventValidator]_

Assign a RemoteEventValidator to this event. Any arguments from an event that do not pass the validator will cause that event to be blocked. In this case, [ServerEventBlocked](#servereventblocked) will fire.

#### SetRateLimit
```lua
event:SetRateLimit(
    rateLimit: number?
)
```

Set a ratelimit for this event ("rateLimit" is given in Hz). Ratelimiting is tracked and applied each second per player. The default ratelimit for all events is 65 Hz. Set "rateLimit" to nil to remove any ratelimits.