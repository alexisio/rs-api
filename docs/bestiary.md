# Bestiary

Module containing Bestiary functions



* * *

### Bestiary.beast(id) 

Gets a beasts information by id (available for `rs`)

**Parameters**

**id**: `Number`, The beasts id

**Returns**: `Object`, Beast information

**Example**:
```js
// returns the beast information for beast id = 49api.rs.bestiary.beast(49).then(function(beast) { console.log(beast);}).catch(console.error);
```


### Bestiary.beastsByTerms(terms) 

Gets a list of beasts whose name contains specific terms (available for `rs`)

**Parameters**

**terms**: `String`, seperating terms with spaces or an array of terms

**Returns**: `Object`, List of beasts

**Example**:
```js
// returns list of beasts related to the term cow sheepapi.rs.bestiary.beastsByTerms('cow sheep').then(function(beasts) { console.log(beasts);}).catch(console.error);
```


### Bestiary.beastsByFirstLetter(letter) 

Gets a list of beasts that start with a specific letter (available for `rs`)

**Parameters**

**letter**: `String`, The letter to search for

**Returns**: `Object`, List of beasts that start with a specific letter

**Example**:
```js
// returns list of beasts who's first letter is Aapi.rs.bestiary.beastsByFirstLetter('A').then(function(beasts) { console.log(beasts);}).catch(console.error);
```


### Bestiary.areas() 

Gets a list of all possible area names (available for `rs`)

**Returns**: `Object`, List of area names

**Example**:
```js
// returns list of area namesapi.rs.bestiary.areas().then(function(areas) { console.log(areas);}).catch(console.error);
```


### Bestiary.beastsByArea(area) 

Gets a list of beasts by an area name (available for `rs`)

**Parameters**

**area**: `String`, The area name to search for

**Returns**: `Object`, Beasts located in a specific area

**Example**:
```js
// returns list of beasts in the shadow dungeonapi.rs.bestiary.beastsByArea('Shadow Dungeon').then(function(beasts) { console.log(beasts);}).catch(console.error);
```


### Bestiary.slayerCategories() 

Gets a list of all possible slayer categories (available for `rs`)

**Returns**: `Object`, Slayer categories

**Example**:
```js
// returns list of slayer categoriesapi.rs.bestiary.slayerCategories().then(function(categories) { console.log(categories);}).catch(console.error);
```


### Bestiary.beastsBySlayer(slayerId) 

Gets a list of beasts by a specific slayer category id (available for `rs`)

**Parameters**

**slayerId**: `Number`, A slayer category id

**Returns**: `Object`, List of beats in a slayer category

**Example**:
```js
// returns list of beasts by specific slayer category idapi.rs.bestiary.beastsBySlayer(42).then(function(beasts) { console.log(beasts);}).catch(console.error);
```


### Bestiary.weaknesses() 

Gets a list of all possible weaknesses (available for `rs`)

**Returns**: `Object`, List of possible weaknesses

**Example**:
```js
// returns list of all weaknessesapi.rs.bestiary.weaknesses().then(function(weaknesses) { console.log(weaknesses);}).catch(console.error);
```


### Bestiary.beastsByWeakness(weeknessId) 

Gets a list of beasts by a specific weekeness id (available for `rs`)

**Parameters**

**weeknessId**: `Number`, A weekeness id

**Returns**: `Object`, List of beasts weak to specific weakness

**Example**:
```js
// returns list of beasts weak to weakness of id 10api.rs.bestiary.beastsByWeakness(10).then(function(beasts) { console.log(beasts);}).catch(console.error);
```


### Bestiary.beastsByLevelRange(min, max) 

Gets a list of beasts by the specified level range(200-300) (available for `rs`)

**Parameters**

**min**: `Number`, The minimum level to lookup

**max**: `Number`, The maximum level to lookup

**Returns**: `Object`, List of beasts in a specific level range

**Example**:
```js
// beasts of a level range between 200 and 300api.rs.bestiary.beastsByLevelRange(200, 300).then(function(beasts) { console.log(beasts);}).catch(console.error);
```



* * *










