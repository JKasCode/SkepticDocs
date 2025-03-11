# Events

## Overview

Provides methods to access ClientEventWrappers on the client-side.

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