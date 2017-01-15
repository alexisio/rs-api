# Spotlight

Module containing Spotlight functions



* * *

### Spotlight.getRotation(onDate) 

Returns spotlight's current and upcoming rotations or the spotlight on a lookup date (available for `rs`)

**Parameters**

**onDate**: `Date`, [Optional] Set date to lookup

**Returns**: `Promise`, Array of rotation

**Example**:

```js
// lookup upcoming minigame spotlight order (presorted in order)api.rs.distraction.spotlight.getRotation().then(function(spotlight) { console.log(spotlight);}).catch(console.error);// lookup the minigame on spotlight for provided dateapi.rs.distraction.spotlight.getRotation('02/03/2017').then(function(spotlight) { console.log(spotlight);}).catch(console.error);
```


### Spotlight.getMinigameNext(minigame) 

Gets the next time the minigame will be on spotlight (available for `rs`)

**Parameters**

**minigame**: `String`, Mainigame to lookup

**Returns**: `Promise`, Object of minigame information

**Example**:

```js
// lookup the next time Barb Assault is on spotlightvar spotlight = api.rs.distraction.spotlight;spotlight.getMinigameNext(spotlight.BARBARIAN_ASSAULT).then(function(minigame) { console.log(minigame);}).catch(console.error);
```



* * *










