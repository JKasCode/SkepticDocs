# Requester

## Overview

The Requester object is used to listen to and ask for requests from PlayerHandlers on the server. There are three ways requests are triggered:

* Calling `#!lua playerObject:PushRequest(someHandler)` from the server (_See: [`:PushRequest()`](../../server/players/PlayerObject.md#pushrequest)_)
* Calling `#!lua requester:Request()` from the client (_See: [`:Request()`](#request)_)
* Calling `#!lua Skeptic.Resources:RequestAsync(someHandler)` (_See: [`:RequestAsync`](Resources.md#requestasync)_)

When a request is triggered, the PlayerObject calls the [`:Request()`](../../server/players/PlayerHandler.md#request) on the specified [PlayerHandler](../../server/players/PlayerHandler.md), which will return some data. This data is then sent to the client and received through functions bound to [`requester:Listen()`](#listen).

## Constructors

#### new
```lua
Skeptic.Resources.Requester.new(
    handlerName: string,
    limit: boolean?,
    allowServer: boolean?
) -> Skeptic.Resources.Requester
```

Creates a Requester for the given PlayerHandler.<br>If "limit" is true, then only requests triggered by that Requester will be listened to, otherwise requests from any Requester for the same handler will also be accepted. <br>If "allowServer" is true, then requests triggered from the server with `:PushRequest()` are accepted. This will accept requests regardless of if "limit" is true or not.

## Properties

#### Handler
```lua
requester.Handler: string
```

{read-only}

The name of the PlayerHandler that this Requester is listening to.

#### AllowServer
```lua
requester.AllowServer: boolean
```

Whether this Requester will accept requests triggered with `:PushRequest()` from the server.

#### ID
```lua
requester.ID: string
```

{read-only}

The Requester ID used for requests triggered from the client.

#### ServerID
```lua
requester.ServerID: string
```

{read-only}

The Requester ID used for requests triggered from the server.

## Methods

#### Request
```lua
requester:Request(
    targets: { Player }?
)
```

Triggers a request from the client-side. 

!!! warning
    The "targets" argument exists because of legacy functionality, and should not be used in new work.

#### Listen
```lua
requester:Listen(
    func: (Skeptic.Requester.Response) -> ()
) -> RBXScriptConnection
```

_See: [Response](Response.md)_

Listens to any incoming requests accepted by the Requester. Returns an RBXScriptConnection which can be disconnected at any time.

#### WaitForAsync
```lua
requester:WaitForAsync()
```

Waits for the most recent request triggered by `:Request()` from the client. Times out at 5 seconds, and does not error. This method does not return the result of the most recent request. For async requesting, see [`Skeptic.Resources:RequestAsync()`](Resources.md#requestasync).