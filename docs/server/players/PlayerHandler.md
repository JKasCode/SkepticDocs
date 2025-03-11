[PlayerObject]: PlayerObject.md

# PlayerHandler

## Overview

A PlayerHandler is a unique object created for each player in the game. They can only be accessed using [`playerObject:GetHandler()`](PlayerObject.md#gethandler).

## Creating a PlayerHandler
PlayerHandlers are standard Luau objects that are created as soon as possible for each player that joins the server. They are defined by a function that returns a table to initialize as a PlayerHandler. This function is defined with [`Skeptic.Players:AddPlayerHandler()`](Players.md#addplayerhandler).

!!! warning
    PlayerHandlers must be defined immediately when the server starts in order to be created for every player that will join the server. Players that joined before a PlayerHandler is defined will not have that handler created for them.

```lua title="Example PlayerHandler"
-- Money Handler
-- Methods for earning and spending money

local PlayerMoney = {}
PlayerMoney.__index = PlayerMoney

local Skeptic = require(game:GetService("ServerScriptService").SkepticServer)

-- Define the data key for money
Skeptic.Players:DefineDataTemplateKey("Money", 0)

-- Define the handler
Skeptic.Players:AddPlayerHandler("Money", function(playerObject)
	local self = setmetatable({}, PlayerMoney)

    -- The amount of money earned in this session
	self.SessionEarnings = 0

	return self
end)

function PlayerMoney:Request()
    return {
        Money = self.PlayerObject:GetData("Money"),
        SessionEarnings = self.SessionEarnings
    }
end

function PlayerMoney:TrySpend(amount: number): boolean
    local money = self.PlayerObject:GetData("Money")
    if money >= amount then
        self.PlayerObject:UpdateData("Money", function(prev)
            return prev - amount
        end)

        -- Update the client with the new amount of money
        self.PlayerObject:PushRequest(self)

        return true
    else
        return false
    end
end

function PlayerMoney:Earn(amount: number)
	self.PlayerObject:UpdateData("Money", function(prev)
        return prev + amount
    end)
    
    self.SessionEarnings += amount

    -- Update the client with the new amount of money
    self.PlayerObject:PushRequest(self)
end

return PlayerMoney
```

In the example above, as soon as the "onPlayerAdded" function returns the "PlayerMoney" object, it is initialized with default properties and methods, such as `.PlayerObject`.

`:Request()` is defined in the example so that it returns the money owned by the player, as well as the amount they earned in that session. Every time [`playerObject:PushRequest()`](PlayerObject.md#pushrequest) is called, the result of this function will be sent to the client, who will receive it via any [Requester](../../client/resources/Resources.md#requester) that is listening to that handler.

## Properties

#### Name
```lua
playerHandler.Name: string
```

#### Player
```lua
playerHandler.Player: Player
```

#### PlayerObject
```lua
playerHandler.PlayerObject: Skeptic.PlayerObject
```
_See: [PlayerObject]_

## Methods

#### Request
```lua
playerHandler:Request(
    requestedBy: Player
) -> any
```

_See: [Requester](../../client/resources/Resources.md#requester), [`playerObject:PushRequest()`](PlayerObject.md#pushrequest)_

This method should return any data that the client may need at any time. If `:Request` is not defined in the PlayerHandler definition, an empty function will be created by default.

The "requestedBy" argument will always be the player that owns the PlayerHandler. It is a legacy argument from V2 and below, and shouldn't be used in new work.