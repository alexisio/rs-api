# Global





* * *

### category(key) 

Returns an object containing the number of items in the category for each starting letter

**Parameters**

**key**: `String | Number`, The category id or name

**Returns**: `Object`, Items in the category


### categoryPrices(key, prefix, page) 

Gets items in a category starting with a specific prefix

**Parameters**

**key**: `String | Number`, The category id or name

**prefix**: `String`, An item's prefix

**page**: `Number`, Page number

**Returns**: `Object`, Items starting with a specific prefix


### graphData(item) 

Gets the graph price information for each day for 180 days

**Parameters**

**item**: `Number`, An item id

**Returns**: `Object`, Graph price information over the last 180 days


### itemInformation(item) 

Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls.

**Parameters**

**item**: , As item id

**Returns**: `Object`, Item's pricing information


### itemId(name) 

Get rscripts data for item(s) matching the name passed in

**Parameters**

**name**: `String`, An item name or part of an item name

**Returns**: `Array`, Array contains item objects. Can return multiple items in the array.



* * *










