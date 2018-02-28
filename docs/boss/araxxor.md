# Araxxor

Module containing Araxxor functions



* * *

### Araxxor.getRotation(onDate) 

Returns araxxor's current and upcoming rotations or araxxor's rotation on a lookup date (available for `rs`)

**Parameters**

**onDate**: `Date`, [Optional] Set date to lookup (MM/dd/YYYY)

**Returns**: `Promise`, Array of rotation

**Example**:

```js
// lookup upcoming rotation order (presorted in order)api.rs.boss.araxxor.getRotation().then(function(rotation) { console.log(rotation);}).catch(console.error);// lookup the rotation for provided dateapi.rs.boss.araxxor.getRotation('02/03/2017').then(function(rotation) { console.log(rotation);}).catch(console.error);
```



* * *










