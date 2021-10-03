<!-- 5zig Reborn pages -->
[website]: https://5zigreborn.eu
[changelogs]: https://5zigreborn.eu/changelogs/
[guides]: https://5zigreborn.eu/guides/

<!-- Jekyll -->
[jekyll]: https://jekyllrb.com/
[jekyll-team]: https://jekyllrb.com/team/

<!-- Minimal Mistakes -->
[minimal-mistakes]: https://mmistakes.github.io/minimal-mistakes/
[mmistakes]: https://github.com/mmistakes

<!-- GitHub -->
[pages]: https://pages.github.com/
[github]: https://github.com

<!-- Other -->
[license]: https://github.com/5zig-reborn/5zig-reborn.github.io/blob/development/LICENSE

<!-- Start of README -->
# 5zig Reborn Website
This repository is the source of the 5zig Reborn website which can be found under [5zigreborn.eu][website].  
It is made using [Jekyll] with the [Minimal Mistakes][minimal-mistakes] Theme and is hosted through [GitHub Pages][pages].

## Structure
This repository has a specific folder, file and branch setup which are important if you want to PR changes to us.

### Branches
The repository has two specific branches: `development` and `master`.

`development` is the default branch and should always be targeted for Pull requests when you make changes to it.  
Every change made in the `site` directory will be transferred to the `master` branch to be handled.

`master` should **never** be manually edited. It is the branch used by GitHub Pages to actually publish the website and contains all required files to do so.

### Folders and files
There are many folders and files in this repository that all serve a different purpose.

#### `.github/workflows`
Contains the workflow used to push changes from `development`'s `site` directory over to the `master` branch for publishing.

#### `site`
Contains additional folders and files used for the actual website.  
Everything uploaded and edited in here will be transferred to the `master` branch and as a result published to GitHub Pages.

Here are a few more details and specifics about the folders:

- `_changelogs`  
  Contains the changelogs of 5zig Reborn that can be found under [5zigreborn.eu/changelogs][changelogs]
- `_data`  
  Contains the `navigation.yml` which is used for setting up the different navigations on the website.
- `_guides`  
  Home of multiple files that all can be found under [5zigreborn.eu/guides][guides]
- `_includes`  
  Used to store overrides of the Minimal Mistakes theme and also some additional header/footer HTML code.
- `_pages`  
  Contains the main pages found on the website.

In addition to these folders does the `site` directory also contain a `Gemfile`, which is used for managing Ruby and Jekyll dependencies and the `_config.yml` which is the main file for changing Settings of both Jekyll and the Minimal Mistakes theme.

## License
The content of this repository - and by extension the Website itself - is licensed under the `GNU AGPL-v3.0` License.  
Please read the [LICENSE] file for more details.

## Credits
Special thanks and credits go to the following groups and people:

- The [Jekyll Team][jekyll-team] for making and maintaining [Jekyll]
- [Michael Rose][mmistakes] for the [Minimal Mistakes][minimal-mistakes] theme
- The awesome people of [GitHub] for their [GitHub Pages][pages] service
- Every single contributor that PRed changes or will do that in the future
