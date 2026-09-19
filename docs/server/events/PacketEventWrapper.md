# PacketEventWrapper (Server)

## Overview

{version4}

This object is a wrapper for Packet events. Packet objects come with several properties and methods that are not outlined in this documentation, and can be found here: [Packet Networking Library](https://devforum.roblox.com/t/packet-networking-library/3573907).

This documentation will only show methods/properties that have been wrapped by the framework to add support for framework-specific objects.

Client-side methods and properties of Packet (eg. `OnClientEvent`, `FireServer`) will error when called from the server.

_See: [Client-side PacketEventWrapper](../../client/events/PacketEventWrapper.md)_

## Events

#### OnServerEvent
```lua
event.OnServerEvent:Connect(function(
    playerObject: Skeptic.PlayerObject,
    ...: any
) ... end)
```

Fires when a client calls `#!lua event:FireServer(...)`.

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