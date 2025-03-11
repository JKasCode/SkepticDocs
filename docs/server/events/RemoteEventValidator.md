[RemoteEventWrapper]: RemoteEventWrapper.md

# RemoteEventValidator

## Overview

This object checks the arguments of every event received on any RemoteEventWrappers that it is attached to, and blocks the event from firing `.OnServerEvent` in the case that one of the arguments don't pass. A single RemoteEventValidator can be used with multiple RemoteEventWrappers.

## Events

#### ServerEventBlocked
```lua
validator.ServerEventBlocked:Connect(function(
    eventWrapper: Skeptic.Events.RemoteEventWrapper,
    playerObject: Skeptic.PlayerObject,
    reason: string,
    blockedArgument: any?
) ... end)
```

_See: [RemoteEventWrapper]_

Fires whenever any RemoteEventWrapper using this RemoteEventValidator is blocked by the validator.

## Properties

#### ArgumentFilter
```lua
validator.ArgumentFilter: ArgumentFilter
```

_See: [ArgumentFilter](Events.md#argumentfilter)_

Refers to the ArgumentFilter table being used by this validator. Can be changed at any time to another valid ArgumentFilter. This should never be nil.

## Methods

#### ValidateArguments
```lua
validator:ValidateArguments(
    eventWrapper: Skeptic.Events.RemoteEventWrapper,
    playerObject: Skeptic.PlayerObject,
    ...: any
) -> pass: boolean, reason: string?, blockedArgument: any?
```

_See: [RemoteEventWrapper]_

Manually validate the arguments passed in an event from a player. "pass" will be `false` if at least one of the arguments don't pass. "reason" will be a short message specifying why the first invalid argument was blocked, and "blockedArgument" will be the value of the invalid argument. "reason" and "blockedArgument" are nil if "pass" is `true`.

!!! info
    This is already done automatically by RemoteEventWrappers with a validator attached to them with [:SetValidator](RemoteEventWrapper.md#setvalidator).

#### Destroy
```lua
validator:Destroy()
```

Destroys the RemoteEventValidator and disconnects connections. RemoteEventWrappers with this validator will no longer be blocked after this is called.