# Home

## Overview

The Skeptic Framework is a light-weight, player-centric framework built for games by [Skeptic Softworks](https://skepticsoftworks.com/). It was designed to allow easy access to important components from anywhere in the codebase at any time.

Find out more about Skeptic Softworks at [skepticsoftworks.com](https://skepticsoftworks.com/).

``` lua
local Skeptic = require(game:GetService("ServerScriptService").SkepticServer)

-- When was Carry an Egg released?
local AnswerEvent = Skeptic.Events:GetEvent("AnswerOnStage")
local EffectEvent = Skeptic.Events:GetEvent("InvokeEffect")

AnswerEvent.OnServerEvent:Connect(function(playerObject, answer)
    if answer == "2024" then
        local economy = playerObject:GetHandler("Economy")
        economy:Earn(100)

        playerObject:UpdateData("CorrectAnswers", function(prev)
            prev = prev + 1
            return prev
        end)
    else
        local character = playerObject:GetHandler("Character")
        local hrp = character:GetCharacter().HumanoidRootPart
        EffectEvent:FireAllClients("Explode", hrp.Position)
    end
end)
```

## Notes

This documentation is relevant for Skeptic Framework V3+. Certain places use Skeptic Framework V2 or V1, which contain different methods and behavior than the ones outlines in this documentation.