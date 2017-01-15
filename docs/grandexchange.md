# Global





* * *

### category(key) 

Returns an object containing the number of items in the category for each starting letter | available for `rs` / `osrs`

**Parameters**

**key**: `String | Number`, The category id or name

**Returns**: `Object`, Items in the category

**Example**:
```js
// returns items object for the Miscellaneous categoryrsapi.rs.ge.category('Miscellaneous').then(function(category) { console.log(category);}).catch(console.error);
```


### categoryPrices(key, prefix, page) 

Gets items in a category starting with a specific prefix | available for `rs` / `osrs`

**Parameters**

**key**: `String | Number`, The category id or name

**prefix**: `String`, An item's prefix

**page**: `Number`, Page number

**Returns**: `Object`, Items starting with a specific prefix

**Example**:
```js
// returns items object for items starting with Arsapi.rs.ge.categoryPrices(0, 'a', 1).then(function(category) { console.log(category);}).catch(console.error);
```


### graphData(item) 

Gets the graph price information for each day for 180 days | available for `rs` / `osrs`

**Parameters**

**item**: `Number`, An item id

**Returns**: `Object`, Graph price information over the last 180 days

**Example**:
```js
// returns items object for items starting with Arsapi.rs.ge.categoryPrices(0, 'a', 1).then(function(category) { console.log(category);}).catch(console.error);
```


### itemInformation(item) 

Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls | available for `rs` / `osrs`

**Parameters**

**item**: , As item id

**Returns**: `Object`, Item's pricing information

**Example**:
```js
api.rs.ge.graphData(4151).then(function(item) { console.log(item.daily, item.average);}).catch(console.error);
```


### itemId(name) 

Get rscripts data for item(s) matching the name passed in | available for `rs`

**Parameters**

**name**: `String`, An item name or part of an item name

**Returns**: `Array`, Array contains item objects. Can return multiple items in the array.

**Example**:
```js
//returns an array of all items found on the ge containing the word noxiousapi.rs.ge.itemId('noxious').then(function(item) { console.log(item.daily, item.average);}).catch(console.error);
```



* * *










