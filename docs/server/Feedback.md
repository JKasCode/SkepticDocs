[Events]: events/Events.md

# Feedback

## Overview

This module allows players to submit feedback and modcalls directly to the developers with a Discord webhook. The messages given to these methods are filtered behind the scenes to block spam as much as possible.

These methods do not need to be directly used. By default, two [Events] are created: "SendFeedback" and "SendModcall". Example usage:
```lua title="Client-side script"
local event = Skeptic.Events:GetEventAsync("SendFeedback")
event:FireServer("Feedback", "Fix ur game!!", game:GetService("LogService"):GetLogHistory())
```

!!! warning
    These methods are **not** ratelimited. Please account for Discord ratelimits.

## Methods

#### SendFeedback
```lua
Skeptic.Feedback:SendFeedback(
    sender: Player,
    sendType: string, 
    message: string,
    consoleOutput: {any}?
) -> success: boolean, blocked: boolean
```

Submit feedback to the webhook, automatically formatted into an embed behind the scenes.

"sendType" must be either `"Bug Report"`, `"Feedback"` or `"Suggestion"`.

"consoleOutput" must be the raw return value of `#!lua game:GetService("LogService"):GetLogHistory()`.

"success" is `true` if the submission was considered successful. "blocked" is `true` if the submission was **blocked**. In this case, "success" will always be true, despite the submission technically failing.

!!! info
    "success" should always be used as the user-facing status of the submission. The player should not be able to see if their feedback was blocked or not.

#### ModCall
```lua
Skeptic.Feedback:ModCall(
    sender: Player, 
    message: string
) -> success: boolean, blocked: boolean
```

Submit a modcall to the webhook, mainly for reporting player behavior. 

The return behavior is identical to that of `:SendFeedback()`.