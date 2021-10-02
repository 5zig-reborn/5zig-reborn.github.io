---
permalink: /guide/5zig-options/server-options/

title: "Server Options"
excerpt: "Detailed information about the 'Server Options' of 5zig Reborn"
---

{% capture notice-text %}
This page is part of the [5zig Options Guide](/guide/5zig-options) explaining all the different options that 5zig Reborn offers.

This section has been separated because of its size and/or complexity.
{% endcapture %}

<div class="notice--info">
  <h4 class="no_toc"><i class="fas fa-info-circle"></i> Info</h4>
  {{ notice-text | markdownify }}
</div>

The `Server Options` screen contains a few settings that can be useful for multiplayer experiences.

## Overview
![server-options]({{ "/assets/images/guides/5zig-options/server-options.png" | relative_url }}){: .align-right }

Most options are text/chat-based ones and are quickly explained below.

## Options

### General
![general]({{ "/assets/images/guides/5zig-options/server-options/general.png" | relative_url }}){: .align-right }

Contains main/generic options.

#### Notify on Chat-Mention
When enabled will you receive a System-notification whenever your Ingame name has been used in chat.

#### Use CMD-Key
*This is a Mac-only setting and disabled for other Systems*

When enabled will you be able to use the CMD-key instead of Control.  
Note that pressing CMD + Q for dropping an item may close the window.

#### Show Large Killstreaks
When enabled will larger killstreaks be displayed. This only works with supported gamemodes/server.

#### Show Mojang Status
When enabled will a Toast message appear every whenever things such as the Session Server go offline or come back online.

#### Automatically Reconnect
This slider allows you to set a time in seconds after which your client should try to reconnect to the last server it was disconnected from.  
The Range goes from 0 (off) up to 30 seconds.

#### Show Compass Target
When enabled will the compas target player be active. Only works with supported gamemodes/server.

#### Allow mod plugin requests
When enabled can Servers send requests to the mod through the usage of plugins and enable/disable certain features of the mod and allow to display even more stats.

#### Confirm Disconnect
When enabled will you be required to click a second time on the Disconnect button to confirm your disconnect.

### Highlight Words
![highlight-words]({{ "/assets/images/guides/5zig-options/server-options/highlight-words.png" | relative_url }}){: .align-right }

Allows you to add words/phrases using `Add Entry...` which should be highlighted in chat whenever they are posted.  
You can use `%player%` for your own player name.

You can delete an entry by selecting it and clicking `Remove Entry`

### Chat Message Filter
![message-filter]({{ "/assets/images/guides/5zig-options/server-options/message-filter.png" | relative_url }}){: .align-right }

Allows you to filter out specific chat messages.  
You can add new entries using the `Add Message` button. Use the `Edit Message` button to edit a selected message and `Delete Message` to delete it.

Placeholders and Wildcards are supported too!  
Read more about this feature here: https://docs.5zigreborn.eu/Mod/chat-filter/

### Text Macros
![text-macros]({{ "/assets/images/guides/5zig-options/server-options/text-macros.png" | relative_url }}){: .align-right }

Allows you to set key combinations to send predefined text.  
Use the `Add Macro` button to add a new Macro, `Edit Macro` to edit one and `Delete Macro` to delete it.

When adding or editing a Macro can you set a message, set a key combination and toggle auto-sending.  
When setting your key combination will you need to click on `Press And Enter Your Key Combination` followed by the key strokes to use.

### Join Auto-texts
![join-text]({{ "/assets/images/guides/5zig-options/server-options/join-text.png" | relative_url }}){: .align-right }

Add text that should be automatically send whenever you join a specific server.  
When clicking on `Add Text` will you be asked to provide the message to send, the server domain/ip and a delay in seconds after which the message should be send.

You can also edit text using `Edit Text` or delete it using `Delete Text`.

### Hypixel.net
![hypixel]({{ "/assets/images/guides/5zig-options/server-options/hypixel.png" | relative_url }}){: .align-right }

Contains settings for the Hypixel server.

#### Auto API key
When enabled will 5zig Reborn automatically fetch an API key for Hypixel to use.

#### Guilds
Will open a prompt where you can get either your guild or the guild of a player.

#### API Key
Allows to manually input an API key for Hypixel.

#### Stats
Shows stats of a player on the Hypixel Server.

#### Friends
Shows your friends on the Hypixel server.

You can Show Stats, Add players as mods or add all requests.

### 2nd Chat
![2nd-chat]({{ "/assets/images/guides/5zig-options/server-options/2nd-chat.png" | relative_url }}){: .align-right }

The 2nd Chat option contains settings for a secondary chat that can be used.  
It will display messages that have been specified in the [Chat Message Filter](#chat-message-filter)

#### Visible
Whether the chat should be displayed or not (Should be enabled or not).

#### Scale
The scale in which the chat should be displayed.  
Can be between `0%` (off) and `100%` (Same as main chat).

#### Unfocused Height
Sets the height in pixel that chat messages should be displayed in while it's not focused (Text box isn't open).  
Can be between `20px` and `180px`.

#### Leftbound Text
If the text should be aligned to the left.  
When disabled will the text be displayed with a right alignment.

#### Opacity
How opaque the chat should be.  
Can be between `10%` and `100%`.

#### Focused Height
Set how high the chat should be when focused (Chatbar active).  
Can be between `20px` and `180px`.

#### Width
Set the width of the chat.  
Can be between `40px` and `320px`.

### Text Shortcuts
![text-shortcuts]({{ "/assets/images/guides/5zig-options/server-options/text-shortcuts.png" | relative_url }}){: .align-right }

Allows you to define Shortcuts to display larger amounts of text or special characters through specific phrases/placeholders.  
For example can you define `&shrug` which would be replaced with `¯\_(ツ)_/¯` when send.

When adding a new Shortcut using `Add Shortcut` can you set set the Message, the Replacement, if the Message should be ignored in commands and if it should also be replaced while in words.  
You can also edit or delete a shortcut using `Edit Shortcut` and `Delete Shortcut` respectively.

### Username History
![name-history]({{ "/assets/images/guides/5zig-options/server-options/name-history.png" | relative_url }}){: .align-right }

Displays your previously used usernames and allows you to search for them.