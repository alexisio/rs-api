## Usage
Install `rs-api` via `npm` using

`npm install rs-api --save`

Require `rs-api` in your node project using

`var rsapi = require('rs-api')`

## Generic example

### RuneScape
```javascript
rsapi.rs.player.hiscores('sync').then(
    function (stats) {
        console.log(stats)
}).catch(console.erro);
```

### Old School RuneScape
```javascript
rsapi.osrs.player.hiscores('sync').then(
    function (stats) {
        console.log(stats)
}).catch(console.erro);
```

## APIs

<dl>
    <dt>
        <a href="player">Player</a>
    </dt>
    <dd>
        Functions to look up information on a player
    </dd>
    <dt>
        <a href="grandexchange">Grand Exchange</a>
    </dt>
    <dd>  
          Functions to look up information that is found on the Grand Exchange
    </dd>
    <dt>
        <a href="boss">Bosses</a>
    </dt>
    <dd>
        Functions to look up information on bosses such as their current rotation
    </dd>
    <dt>
        <a href="bestiary">Bestiary</a>
    </dt>
    <dd> 
           Functions to look up generic monster information on the bestiary
    </dd>
    <dt>
        <a href="clan">Clans</a>
    </dt>
    <dd>   
         Functions to look up information on clans
    </dd>
    <dt>
        <a href="distraction">Distractions</a>
    </dt>
    <dd>
        Functions to look up information on distractions and minigames, such as spotlight rotations
    </dd>
    <dt>
        <a href="skilling">Skilling</a>
    </dt>
    <dd>
        Functions to look up information on skilling, such as current voice of seren and portables
    </dd>
</dl>