
[TOC]

## ES-halfmoon

New ES6+ has many amazing features like `filter`,` map` etc. But it's not enough. `ES-halfmoon` is about to provide some prototype methods for ES not covered yet.

*All features will only be attached when ES does not provide, `ES-halfmoon` never overrides native ES methods*

### Features

* `Array.get()` like map
* `Array.forEachRight()` loop reversed

### Install

Install it via npm

```shell
npm i @youngbeen/es-halfmoon
```

### Usage

#### `Array.get()`

`Array.get(value, [keyName])`

> Tip: if `keyName` not set, default *get* priority is `id > key > value`

e.g.


```javascript
const fruits = [
  { id: 'apple', name: 'Apple' },
  { id: 'orange', name: 'Orange' },
  { id: 'banana', name: 'Banana' }
]
// finding item by specific value
fruits.get('orange') // -> { id: 'orange', name: 'Orange' }
// which equivalent
fruits.get('orange', 'id')

const myFruits = [
  { type: 'apple', name: 'Apple' },
  { type: 'orange', name: 'Orange' },
  { type: 'banana', name: 'Banana' }
]
// specify keyName
fruits.get('orange', 'type')
```



### `Array.forEachRight()`

`Array.forEachRight(callback(item, [index]))`

This method is useful when you are looping array for removing some item

e.g.

```javascript
const array = ['h', 'e', 'l', 'l', 'o']
array.forEachRight((item, index) => {
  console.log(item, index)
})
// 'o' 4
// 'l' 3
// 'l' 2
// 'e' 1
// 'h' 0
```

