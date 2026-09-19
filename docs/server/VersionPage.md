# Version

## Overview

This module contains methods to view the server and experience-wide version of the place. 

## Properties

#### LocalVersion
```lua
Skeptic.Version.LocalVersion: {any}
```

{read-only}

The currently stored server and experience versions. 

!!! info
    This shouldn't be directly accessed. Use the dedicated methods instead please.

## Methods

#### GetServerVersion
```lua
Skeptic.Version:GetServerVersion() -> string
```

Returns the version of the experience in this server. This will either be the same as or older than the experience version.

#### GetExperienceVersion
```lua
Skeptic.Version:GetExperienceVersion() -> string -- In V3 
Skeptic.Version:GetExperienceVersion() -> (string, {[number]: string}) -- in V4 and above
```

{version3} Returns the experience-wide version. This will only be up-to-date when the server starts up. Use [`:UpdateValuesAsync`](#updatevaluesasync) to get the latest version data from the DataStore.

{version4} In V4 and above, also returns a table of versions of all places in the experiences. The key is the place ID (as a number), and the value is the version tag (as a string).

#### UpdateValuesAsync
```lua
Skeptic.Version:UpdateValuesAsync(
    timeOut: number?
) -> boolean
```

Updates the experience version value from the DataStore. Calling this will take about 1-2 seconds, so wrap it in `task.spawn` if needed.

#### GetServerValuesAge
```lua
Skeptic.Version:GetServerValuesAge() -> number
```

Returns the time, in seconds, since `:UpdateValuesAsync` was last called.