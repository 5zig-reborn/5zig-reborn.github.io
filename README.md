# 5zig Reborn Website
This is the source of the 5zig Reborn website located under https://5zigreborn.eu

If you would like to participate in keeping this website up to date should you know a few things.

## Repository Structure
The repository is structured in specific ways that may seem weird at first but become more clear once you understand them.

### Branch-Setup
The main branch of this repository is `development`. It contains all the files used for the website, which are located within the `site` directory.

Whenever changes are made to it will a GitHub-Action (`.github/workflows/publish.yml`) update the actual page located on the `master` branch.

### Folder-Setup
As mentioned in the previous section is there a `site` folder containing all the pages used for GitHub Pages.

The folder itself is split up into additional folders:

- `_changelogs` has the recent changelog files of the 5zig Reborn Mod.
- `_data` contains the file used for the navigation.
- `_includes` contains custom HTML file to add or override aspects of the website.
- `_pages` contains the main pages on the website.

Additionally is there the `_config.yml` containing settings for Jekyll and a `Gemfile` for Gem settings.