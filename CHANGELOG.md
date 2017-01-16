2.0.4 - 2017-01-15
=======================
### Fixed
* Issue with jsonp library causing tests to fail

2.0.3 - 2017-01-15
=======================
### Added
* Player Details lookup to the Player API

### Fixed
* Issue with Grand Exchange test

2.0.2 - 2017-01-14
=======================
### Added
* GitHub Pages Documentation
* Better JSDoc comments with examples

2.0.1 - 2017-01-13
=======================
### Fixed
* Fixed some issues with calculating rotations in the boss and distractions apis

2.0.0 - 2017-01-12
=======================

### Breaking Changes
- `rs` / `osrs` Refactored hiscores API to be Player api
- `rs` Moved clan lookup from hiscores to own module 

### Added
* `rs` / `osrs` Username to the player information object returned from the player api hiscore lookup
* `rs` Event Log lookup to player api
* `rs` Lookup id by name for grand exchange api (via rscript.org) 
* `rs` Boss api with rotation lookups for:
  * Araxxor
  * RoTS
  * Vorago
* `rs` Add Distractions api (D&D + Minigames). Current coverage:
  * Spotlight
  
## From forked directory 
######(https://github.com/Joshua-F/runescape-api)

[1.0.9] - 2016-08-20
=======================

### Added
* Add LMS Rank to activities for Oldschool RuneScape hiscores.

[1.0.8] - 2016-08-01
=======================

### Fixed
* Fix an error when loading an oldschool players hiscores.

[1.0.7] - 2016-04-28
=======================

### Added
* Invention support to RuneScape hiscores (#3)
* Deadman and Deadman Seasonal support for Oldschool RuneScape hiscores

[1.0.6] - 2015-08-06
=======================

### Added
* Add Oldschool Grand Exchange support (#2)

[1.0.5] - 2015-06-27
=======================

### Changed
* Structure cleanup (95ca423)
* Better error handling (50101ee)

[1.0.4] - 2015-06-23
=======================

### Added
* Grand Exchange API (#1)

[1.0.3] - 2015-06-04
=======================

### Added
* Tests + Travis support added

### Fixed
* Fixed an issue when using an array with `bestiary.beastsByTerms()`

[1.0.2] - 2015-06-02
=======================

### Added
* Hiscores support
* README.md

[1.0.1] - 2015-06-02
=======================

First release

[1.0.9]: https://github.com/Joshua-F/runescape-api/compare/1.0.8...1.0.9
[1.0.8]: https://github.com/Joshua-F/runescape-api/compare/1.0.7...1.0.8
[1.0.7]: https://github.com/Joshua-F/runescape-api/compare/1.0.6...1.0.7
[1.0.6]: https://github.com/Joshua-F/runescape-api/compare/1.0.5...1.0.6
[1.0.5]: https://github.com/Joshua-F/runescape-api/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/Joshua-F/runescape-api/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/Joshua-F/runescape-api/compare/1.0.2...1.0.3
[1.0.3]: https://github.com/Joshua-F/runescape-api/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/Joshua-F/runescape-api/compare/0fdebdb...1.0.2
[1.0.1]: https://github.com/Joshua-F/runescape-api/commits/0fdebdb
