# Player

Module containing Player functions



* * *

### Player.hiscores(username, type) 

Gets a users hiscores and activities (available for `rs` / `osrs`)

**Parameters**

**username**: `String`, Display name of the user

**type**: `String`, [Optional] normal, ironman, hardcore/ultimate

**Returns**: `Promise`, Object of the users hiscores and activities

**Example**:

```js
// returns Sync's RS stats and activitiesrsapi.rs.player.hiscores('sync').then(function(stats) { console.log(stats);}).catch(console.error);// returns Sausage's RS stats and activities from the ironman game typeapi.rs.hiscores.player('sausage', 'ironman').then(function(stats) {  console.log(stats)}).catch(console.error);// returns Sausage's RS stats and activities from the hardcore ironman game typeapi.rs.hiscores.player('sausage', 'hardcore').then(function(stats) {  console.log(stats)}).catch(console.error);// returns hey jase's Old School RS stats and activitiesapi.osrs.hiscores.player('hey jase').then(function(stats) {  console.log(stats)}).catch(console.error);// returns lezley's Old School RS stats and activities from the ironman game typeapi.osrs.hiscores.player('lezley', 'ironman').then(function(stats) {  console.log(stats)}).catch(console.error);// returns perm iron's Old School RS stats and activities from the ultimate ironman game typeapi.osrs.hiscores.player('perm iron', 'ultimate').then(function(stats) {  console.log(stats)}).catch(console.error);
```


### Player.events(username) 

Gets a users events log (aka adventure log) (available for `rs`)

**Parameters**

**username**: `String`, Display name of the user

**Returns**: `Promise`, Object of the users events log

**Example**:

```js
// returns Sync's events / adventure logrsapi.rs.player.events('sync').then(function(stats) { console.log(stats);}).catch(console.error);
```


### Player.details(usernames) 

Returns the input user(s) clan, title, if the clan is recruiting, and if the title is a suffix

**Parameters**

**usernames**: `string | array`, String of a single username or array of multiple to lookup

**Returns**: `Promise`, Object of the users player details

**Example**:

```js
rsapi.rs.player.details(['sync','xredfoxx']).then(function(details) { console.log(details);}).catch(console.error);
```



* * *










