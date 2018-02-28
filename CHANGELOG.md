2.5.3 - 2018-02-28
=======================
### Fixed
* NaN issue with overall rank conversion fixed

2.5.2 - 2018-02-28
=======================
### Fixed
* Profile now properly converts numbers from strings for overall

2.5.1 - 2018-02-28
=======================
### Fixed
* Added decimal point that jagex decided not to put in the stats for profile via runemetrics

2.5.0 - 2018-02-28
=======================
### Changed
* Made profile stats schema match the hiscores stats schema

2.4.5 - 2017-07-27
=======================
### Fixed
* Typo in Rago

2.4.4 - 2017-07-27
=======================
### Added
* Raven now exists

2.4.3 - 2017-07-14
=======================
### Fixed
* Vorago phases 10 and 11 fixed from east / west

2.3.0 - 2017-07-14
=======================
### Added
* Added Circus lookup

2.2.5 - 2017-07-14
=======================
### Changed
* toTitleCase function to exclude caps of words like 'of', 'an', etc to help with wiki ge lookups on words like `Staff of Sliske`

2.2.4 - 2017-07-13
=======================
### Fixed
* Request security vulnerability

2.2.3 - 2017-07-13
=======================
### Fixed
* Removed some dumb console.logs that annoyed me

2.2.2 - 2017-07-13
=======================
### Fixed
* Made RS Wiki API ge lookup first try check string as is (only replacing spaces for underscores)

2.2.1 - 2017-07-10
=======================
### Fixed
* Made RS Wiki API return correct types

2.2.0 - 2017-07-10
=======================
### Added
* Method to look up prices by name with RS Wiki since RScript seems to be lacking newer items ids. Note, did not remove the RScript functionality.
* Method to look up player profile from the RuneMetrics API


2.1.3 - 2017-02-13
=======================
### Fixed
* Player Details by adding method to get a session
* Must have node environment variables set for username and password. These need to be a valid runescape login to create the session.


2.1.0 - 2017-02-13
=======================
### Added
* News feed

2.0.12 - 2017-01-26
=======================
### Fixed
* Removed the Header from returning in the member list for a clan

2.0.11 - 2017-01-26
=======================
### Added
* Alternative runes to Viswax lookup

2.0.10 - 2017-01-19
=======================
### Fixed
* RSS feed to json error handling

2.0.9 - 2017-01-19
=======================
### Fixed
* No return issue

2.0.8 - 2017-01-19
=======================
### Fixed
* Events log not being populated [#2](/alexisio/rs-api/issues/2)

2.0.7 - 2017-01-19
=======================
### Added
* Username to Events result for consistency [#1](/alexisio/rs-api/issues/1) 

2.0.6 - 2017-01-19
=======================
### Fixed
* Typo in hardmode vorago rotations

2.0.5 - 2017-01-16
=======================
### Added
* Skilling module which houses:
  * Voice of Seren lookup
  * Portables Lookup
* Warbands and Viswax lookup to Distraction module

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
