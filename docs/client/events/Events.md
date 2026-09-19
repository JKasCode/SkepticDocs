# Events

## Overview

Provides methods to access ClientEventWrappers on the client-side.

## Properties

#### Packet
```lua
Skeptic.Events.Packet: Packet
```

{version4}

A reference to [Packet](https://devforum.roblox.com/t/packet-networking-library/3573907) used by the Skeptic Framework.

## Methods

#### GetEventAsync
```lua
Skeptic.Events:GetEventAsync(
    name: string
) -> ClientEventWrapper
```

_See: [ClientEventWrapper](ClientEventWrapper.md)_

Waits for a RemoteEvent created by [`Skeptic.Events:GetEvent()`](../../server/events/Events.md) on the server and returns it as soon as possible. This method will wait for max. 30s before timing out and throwing an error.

!!! warning
    RemoteEventWrappers **must** be created on the server before being accessed on the client.

#### GetPacketEvent
```lua
Skeptic.Events:GetPacketEvent<A..., B...>(
    name: string, ...: A...
) -> PacketEventWrapper<A..., B...>
```

{version4}

_See: [PacketEventWrapper](PacketEventWrapper.md)_

Returns a wrapper for a Packet. See [Packet Networking Library](https://devforum.roblox.com/t/packet-networking-library/3573907) by @5uphi.

!!! info
    For events that are fired extremely rapidly (like gun bullets, or updating a CFrame from the client to all other clients), Packets use significantly less data over the network. 