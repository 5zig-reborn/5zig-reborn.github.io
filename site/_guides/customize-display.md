---
permalink: /guides/5zig-options/customize-display/

title: "Customize Display Options"
excerpt: "Detailed information about the 'Customize Display' Option of 5zig Reborn"
---

{% capture notice-text %}
This page is part of the [5zig Options Guide](/guide/5zig-options) explaining all the different options that 5zig Reborn offers.

This section has been separated because of its size and/or complexity.
{% endcapture %}

<div class="notice--info">
  <h4 class="no_toc"><i class="fas fa-info-circle"></i> Info</h4>
  {{ notice-text | markdownify }}
</div>

The `Customize Display...` option is, as the name suggests, a way to customize the display of the 5zig Reborn Mod in various ways.  
This page is dedicated towards explaining the various options and what they do.

## Overview
[![customize-display-screen]({{ "/assets/images/guides/5zig-options/customize-display.png" | relative_url }}){: .align-right width="50" }]({{ "/assets/images/guides/5zig-options/customize-display.png" | relative_url }}){: .image-popup }

When you look at the Option screen for the first time will it be a bit confusing at first, but after a while (And after reading through this page) should you have a fairly easy understanding of the screen and how to navigate through it.

## Options

### Modules
The `Modules` section on the left lists the different HUDs you currently have. By default are there already a few created that can be used ingame.  
To remove a module, select it and click the button with the hyphon/minus symbol (`-`) on it.

### Add new Module
With `Add new Module...` can you create a new module that should be displayed.  
When clicking it will a new module with the name `new-module` be added. If such a module already exists will a `-` be appended to the name.

After its creation can the module be configured by clicking on the [`Settings...`](#settings) button.

### Settings
The `Settings...` button allows you to configure your currently selected module.  
Clicking it will open a screen where you can configure the Module.

How you can configure a Module is covered in a dedicated section below.

[Go to Section](#editing-a-module){: .btn .btn--info }

### Enable/Disable
This button will display either `Enable` or `Disable` depending on the Module's current state. Clicking it will toggle the state of the current Module to enabled or disabled.

### Move Up
With `Move Up` can you move the module up one step on the list. The button is disabled (greyed out) when the module is at the very top.  
Theyr position in the list has no effect on how the module is displayed.

### Move Down
With `Move Down` can you move the module down one step on the list. The button is disabled (greyed out) when the module is at the very bottom.  
Theyr position in the list has no effect on how the module is displayed.

----

## Editing a Module
[![module-settings]({{ "/assets/images/guides/5zig-options/customize-display/module-settings" | relative_url }}){: .align-right width="50%" }]({{ "/assets/images/guides/5zig-options/customize-display/module-settings" | relative_url }}){: .image-popup }

When clicking the `Settings...` button will you be greeted with a new screen that contains a lot of buttons to change and edit.

### Id
The `Id` field contains the name under which the module is saved. Clicking it opens a textfield where you can edit and save the new name of the module.

### Name
`Name` is the text displayed above the different [items](#items) of the module.  
You can use the `%version%` placeholder to display the 5zig Reborn version.

### Translation-Key
The `Translation-Key` can be used to set a key from the currently used language file of 5zig Reborn. This will automatically display the translated text for the corresponding key.  
Example: Setting `armor.title` will display the text of `armor.title` from your currently set Language file, which would be `Armor HUD` for `en_US`.

### Items
[![items-screen]({{ "/assets/images/guides/5zig-options/customize-display/items-screen.png" | relative_url }}){: .align-right width="50%" }]({{ "/assets/images/guides/5zig-options/customize-display/items-screen.png" | relative_url }}){: .image-popup }

The `Items (<number>)...` button opens yet another screen where you have different options.

#### Items Field
The `Items` field on the left lists all currently added items for this module.  
You can use the [`Add new Item...`](#add-new-item) button to add another item or click the `-` button to remove the currently selected one.

#### Add new Item
[![items-new-item-screen]({{ "/assets/images/guides/5zig-options/customize-display/add-new-item-screen.png" | relative_url }}){: .align-right }]({{ "/assets/images/guides/5zig-options/customize-display/add-new-item-screen.png" | relative_url }}){: .image-popup }

With `Add new Item...` can you add an item to the list. You will have a screen with two sections in it.

On the left one can you see different categories such as `General`, `Equipment` or Server specific categories.  
On the right side will you see the different item types for that selected category. Hovering over an item will show a description of what it is and what it displays.

#### Settings
The `Settings` section will contain options relative to the currently selected item.  
For example will `Main Hand` and `Off Hand` have the options `Durability` and `Show Attributes`.

#### Color
With the `Color` option can you change how text should be displayed.

Clicking the option will open a screen with the following options:

- `Color`  
  Click to toggle between `Default` and `Custom`. Second one will unlock the other options.
- `Prefix Formatting`  
  Click to cycle between `Default` and the formatting options `RESET`, `BOLD`, `ITALIC` and `UNDERLINE`.
- `Prefix Color`  
  Hover over the coloured square to display all 16 available colours and click on the one you want to use.
- `Main Formatting`  
  Click to cycle between `Default` and the formatting options `RESET`, `BOLD`, `ITALIC` and `UNDERLINE`.
- `Main Color`  
  Hover over the coloured square to display all 16 available colours and click on the one you want to use.
- `Custom Prefix Color`  
  Click to set a HEX colour code to use. You don't have to add a `#` to it.
- `Custom Main Color`  
  Click to set a HEX colour code to use. You don't have to add a `#` to it.

#### Prefix
Click to toggle between showing and hiding the prefix.

#### Edit Prefix
Click to set a prefix. This may only work with specific items.

#### Up/Down arrows
Click the up/down arrow buttons to switch the position of the item in the list. The buttons may be disabled (greyed out) if they are at the very top or bottom in the list respectively.

The position of the item affects where it is displayed in the Module itself.

#### Preview window
The window at the bottom right will give you an example of what the item may display and how it may look like.

### Show Label
You can click the `Show Label` button to toggle between showing or hiding the module name. The name can either be the one you set through the [Name option](#name) or the one displayed through a [translation key](#translation-key).

### Label Color
Allows you to change the colour of the label.

Clicking it will open a window with the following options:

- `Color`  
  Click to toggle between `Default` and `Custom`. Second one will unlock the other options.
- `Main Formatting`  
  Click to cycle between `Default` and the formatting options `RESET`, `BOLD`, `ITALIC` and `UNDERLINE`.
- `Main Color`  
  Hover over the coloured square to display all 16 available colours and click on the one you want to use.
- `Custom Main Color`  
  Click to set a HEX colour code to use. You don't have to add a `#` to it.

### Location
[![location-screen]({{ "/assets/images/guides/5zig-options/customize-display/location-screen.png" | relative_url }}){: .align-right width="50%" }]({{ "/assets/images/guides/5zig-options/customize-display/location-screen.png" | relative_url }}){: .image-popup }

The `Location` option opens a new screen where you can set the location of the Module.

You can use the button on the very left to toggle the module's position between `Top Left`, `Top Right`, `Center Left`, `Center Right`, `Bottom Left`, `Bottom Right` and `Custom`.  
Last option, which can also be selected will both unlock the `Anchor` button and allow extremely precise positioning of the module through drag-and-drop method.

The `Anchor` button can be used to set the Alignment of the items relative to the module. For example will `Top Left` put the items on the very top-left of the module. The Anchor is indicated with a small red square at the red line.  
You can toggle between `Top Left`, `Top Center`, `Top Right`, `Center Left`, `Center`, `Center Right`, `Bottom Left`, `Bottom Center` and `Bottom Right`.

### Server
[![server-screen]({{ "/assets/images/guides/5zig-options/customize-display/server-screen.png" | relative_url }}){: .align-right width="50%" }]({{ "/assets/images/guides/5zig-options/customize-display/server-screen.png" | relative_url }}){: .image-popup }

`Server` opens a list of Server domains that you can choose from. Selecting one will set the module to only show when you join that particular server.
