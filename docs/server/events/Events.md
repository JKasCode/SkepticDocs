[RemoteEventWrapper]: RemoteEventWrapper.md
[RemoteEventValidator]: RemoteEventValidator.md

# Events

## Overview

An advanced wrapper for RemoteEvents, with support for custom Validators and automatic references to PlayerObjects.

## Default Events

There are several EventWrappers created and used by the framework internally.

| Name         | Usage    |
|--------------|----------|
| Request      | Internal |
| LoadStatus   | Internal |
| UpdateDevice | Internal |
| SendModcall  | See: [Feedback](../Feedback.md)    |
| SendFeedback | See: [Feedback](../Feedback.md)    |

!!! warning
    Any EventWrappers with the "Internal" usage tag must be avoided. 

## Types

#### ArgumentFilter
```lua
local argumentFilter: {
    { 
        Type: string?, 
        Callback: (any) -> (boolean)?
    }
} = ...
```
The ArgumentFilter type is a table of tables, where each item in the table represents an expected argument when an event is received on the server.

"Type" can be a type name (eg. `"string"`) or `"any"` in order to accept anything except for `nil`. <br>"Callback" can be a callback function that returns `true` if the received argument is accepted.

## Methods

#### GetEvent
```lua
Skeptic.Events:GetEvent(
    name: string
) -> Skeptic.Events.RemoteEventWrapper
```

_See: [RemoteEventWrapper]_

Returns the RemoteEventWrapper by name. Creates one if one does not exist yet. There can only be one RemoteEventWrapper with any given name.

#### GetEventIfExists
```lua
Skeptic.Events:GetEventIfExists(
    name: string
) -> Skeptic.Events.RemoteEventWrapper?
```

_See: [RemoteEventWrapper]_

Returns the RemoteEventWrapper by name, but returns `nil` if one with that name has not been created yet.

#### DestroyEvent
```lua
Skeptic.Events:DestroyEvent(
    name: string
)
```

Destroys the RemoteEventWrapper with that name if it exists.

!!! warning
    This does not automatically disconnect client-side connections to this event. Avoid using this method at all.

#### CreateValidator
```lua
Skeptic.Events:CreateValidator(
    argumentFilter: ArgumentFilter?
): Skeptic.Events.RemoteEventValidator
```

_See: [RemoteEventValidator], [ArgumentFilter](#argumentfilter)_

Creates a RemoteEventValidator to be used for RemoteEventWrappers created by this module.