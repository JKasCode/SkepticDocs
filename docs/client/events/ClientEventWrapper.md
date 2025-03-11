# ClientEventWrapper

## Overview

A client-side version of [RemoteEventWrapper](../../server/events/RemoteEventWrapper.md)

## Events

#### OnClientEvent
```lua
event.OnClientEvent:Connect(function(
    ...any
) ... end)
```
Fires when [`:Fire*`](../../server/events/RemoteEventWrapper.md#fireclient) is called on the server.

## Properties

#### Name
```lua
event.Name: string
```

#### RemoteEvent
```lua
event.RemoteEvent: RemoteEvent
```

## Methods

#### FireServer
```lua
event:FireServer(
    ...any
)
```
Fire an event to the server. This triggers [`.OnServerEvent`](../../server/events/RemoteEventWrapper.md#onserverevent) on the server. 