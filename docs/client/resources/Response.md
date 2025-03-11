# Response

## Overview

Represents the response for a request received by the client. 

## Properties

#### Data
```lua
response.Data: { [Player]: any }
```

The data in the response. [`:GetPersonal()`](#getpersonal) should be used rather than this.

#### ReqId
```lua
response.ReqId: string
```

Always equivelant to the [`requester.ID`](Requester.md#id) of the requester that received this response.

#### ServerInvoked
```lua
response.ServerInvoked: boolean
```

Is `true` if this request was created with [`:PushRequest()`](../../server/players/PlayerObject.md#pushrequest) from the server.

## Methods

#### Get
```lua
response:Get(
    player: Player
) -> any
```

{deprecated}

`:GetPersonal()` should be used in place of this in newer work.

#### GetPersonal
```lua
response:GetPersonal() -> any
```

Returns the data passed in the request. Will be equivelant to the return value of [`playerHandler:Request()`](../../server/players/PlayerHandler.md#request).