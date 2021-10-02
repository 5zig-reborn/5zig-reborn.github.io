---
permalink: /guide/5zig-options/display-options/

title: "Display Options"
excerpt: "Detailed information about the 'Display Options' of 5zig Reborn"
---

{% capture notice-text %}
This page is part of the [5zig Options Guide](/guide/5zig-options) explaining all the different options that 5zig Reborn offers.

This section has been separated because of its size and/or complexity.
{% endcapture %}

<div class="notice--info">
  <h4 class="no_toc"><i class="fas fa-info-circle"></i> Info</h4>
  {{ notice-text | markdownify }}
</div>

5zig Reborn offers a lot of customization through its `Display Options...` screen which will be covered in this page.

## Overview
![display-options]({{ "/assets/images/guides/5zig-options/display-options.png" | relative_url }}){: .align-right }

There are a lot of options to cover here.

## Options

### Formatting Options
![formatting-options]({{ "/assets/images/guides/5zig-options/display-options/formatting-options.png" | relative_url }}){: .align-right }

Behind this button are the main configuration options you can alter to your liking.

#### Foormatting of Prefix
Option to toggle between the different formatting option for the Prefix.  
Click to toggle between the options `Reset`, `Bold`, `Italic` and `Underline`.

The Prefix is the text shown before or in-between any brackets in a text-based module.  
Example: In `X> 0.0` would `X` be the prefix.

#### Prefix Color
Hover over the coloured square to see all 16 colours and click the one you want to use for the prefix.

#### Formatting of Main
Option to toggle between the different formatting option for the main text.  
Click to toggle between the options `Reset`, `Bold`, `Italic` and `Underline`.

The main text is the text shown after any brackets in a text-based module.  
Example: In `X> 0.0` would `0.0` be the main text.

#### Main Color
Hover over the coloured square to see all 16 colours and click the one you want to use for the main text.

#### Formatting of Brackets
Option to toggle between the different brackets you can use.  
Click to toggle between the options `>`, `<>`, `-`, none (empty), `[]`, `()` and `:`.

The brackets are the text shown around the prefix in a text-based module.  
Example: In `X> 0.0` would `>` be the bracket.

#### Brackets Color
Hover over the coloured square to see all 16 colours and click the one you want to use for the brackets.

#### Number Precision
With this slider can you set the precision of a number between 0 and 4 digits. For example will 1 display coordinates as `0.0` while 2 would display it as `0.00`.

#### Custom Main Color
Set a custom HEX colour for the main text. You don't have to prefix the value with a hashtag (`#`).

#### Custom Prefix Color
Set a custom HEX colour for the prefix. You don't have to prefix the value with a hashtag (`#`).

### Max Overlays
Sets the total amount of overlays that should be displayed at the same time.  
A overlay shows if you f.e. receive a message through the friend-system.

You can set between `1` and `10`.

### Zoom Factor
The factor by which the screen should be zoomed in when the zoom-key of the mod is pressed.

You can set between `2.0x` and `12.0x`

### Show Last Server
When enabled will a button be shown right next to the `Multiplayer` one that shows the domain/ip of the last server you joined. Clicking that button will connect you to that server directly.

### LED Keyboard Settings
![led-keyboard-settings]({{ "/assets/images/guides/5zig-options/display-options/led-keyboard-settings.png" | relative_url }}){: .align-right }

The `LED Keyboard Settings...` shows settings that allow you to connect a LED keyboard with minecraft.

#### Control Key LEDs
Click to toggle between different Keyboard types.  
Supported are `Razer`, `Roccat` and `Logitech`. Only the keyboard you actually use will unlock the other options.

#### LED Color
The standard LED colour used on your Keyboard.  
The format has to be `0xRRGGBB` (i.e. `0xffffff` for white).

#### Show Health
When enabled will your character's health be displayed in the function key row (f-keys) of your keyboard.

#### Show Potions
When enabled will your keyboard light up in the colour of any potion effect your character currently has.

#### Reset on Unfocus
When enabled will your keyboard's colours reset whenever you don't have the MC window focused.

#### Active LED Keys
Click to toggle between `Only WASD` and `All`.  
When `Only WASD` is selected will only the keys W, A, S and D and the Space bar light up in the colour you defined. When `All` is selected will the entire keyboard light up.

#### Show Armor
When enabled will the current armour of your character be displayed in the function key row (f-keys) of your keyboard.

#### Show Damage Flash
When enabled will your keyboard light up whenever your character takes damage.

### Static FOV
When enabled will sprinting or getting a speed/slowness potion effect not change your field-of-view.

### Transparent Chat Background
When enabled will the background of the Multiplayer chat be completely transparent.

### Show Own Nametag
When enabled will you be able to see your own nametag in Third-person.

### Hud Options
![hud-options]({{ "/assets/images/guides/5zig-options/display-options/hud-options.png" | relative_url }}){: .align-right }

Contains different settings for your HUD and Hotbar.

#### Vanilla Potion Indicator
Whether the 1.9+ Potion effect indicator should be displayed or not.

#### Colored Armor Durability
Whether the durability in your modules should be coloured based on their current stated.  
For example will `100%` show as green while `10%` would show as red.

#### Show Food Heal Amount
Whether the currently held food item's saturation amount should be displayed as half-transparent food-indicators.

#### Show Potion Indicator
When enabled will either a green or red vignette be displayed, based on if the player has a positive or negative potion effect applied.

#### Show Saturation
When enabled will a second row of icons be displayed above the food ones, showing the player's saturation.

#### Show Hotbar Numbers
Whether the hotbar slots should be numbered or not.

### Overlay Texture
Allows you to switch between 4 different overlay textures. The texture will be used for the Toast messages.

### Show more Chat Symbols
When enabled will a `+` be displayed above the chat-bar allowing you access to multiple Unicode icons, which you can insert into the chatbar by simply clicking on them.

### Show Custom Item Models
When enabled will custom item textures and models override any resourcepack ones.

### Chat Limit
Set how many lines you can scroll back in chat.  
You can set between `50` and `1000` lines and can be increased or decreased by `50`.

### Time in Chat Messages
![time-in-chat]({{ "/assets/images/guides/5zig-options/display-options/time-in-chat.png" | relative_url }}){: .align-right }

This option contains different options to enable and configure displaying the time of when a message was send in chat.

#### Enabled
Click to toggle between on and off.

#### Brackets Formatting
Click to toggle between the different bracket options.  
Available are `<>`, `-`, None (Empty), `[]`, `()`, `:` and `>`

#### Format
Set the format in which the time should be displayed.  
The format follows Java's SimpleDateFormat, meaning that `H` means hours, `m` means minutes and `s` means seconds.

#### Color
Sets the color for the time.  
Hover over the coloured square to show all 16 colours and click on the one you want to use.

#### Brackets Color
Sets the color for the brackets.  
Hover over the coloured square to show all 16 colours and click on the one you want to use.

### Transparent Pause Menu
Whether the Pause Menu should be transparent while you're in a world or server.

### Highligh Words Color
Set a color that should be used to highlight specific words you set in your keywords-settings.  
The format has to be `0xRRGGBB` (i.e. `0xffffff` for white).