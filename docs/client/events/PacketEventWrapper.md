# PacketEventWrapper (Client)

## Overview

{version4}

This object is a wrapper for Packet events. Packet methods and properties can be found here: [Packet Networking Library](https://devforum.roblox.com/t/packet-networking-library/3573907). Basic events and methods are included in this documentation for convenience.

The client-side wrapper does not change any method/properties from the original besides disabling server-side methods. Server-side methods and properties of Packet (eg. `OnServerEvent`, `FireClient`) will error when called from the client.

_See: [Server-side PacketEventWrapper](../../server/events/PacketEventWrapper.md)_

## Events

#### OnClientEvent
```lua
event.OnClientEvent:Connect(function(
    ...: any
) ... end)
```

Fires when [`:Fire*`](../../server/events/PacketEventWrapper.md#fireclient) is called on the server.

## Methods

#### FireServer
```lua
event:FireServer(
    ...: any
)
```

Fire an event to the server.

!!! info
    The `FireServer()` method is simply an alias for the `Fire()` method for parity with the Roblox event ecosystem. Both methods work identically.