# @m1yh3m/pad.string.node.lib

- library functions
- PaddableString class

## installation

```bash

npm i @m1yh3m/pad.string.node.lib

```

## usage

### default usage

```javascript
const lib = require('@m1yh3m/pad.string.node.lib')

lib
{ around: [Function: around],
  aroundAsymmetric: [Function: aroundAsymmetric],
  aroundAsymmetricOnce: [Function: aroundAsymmetricOnce],
  aroundOnce: [Function: aroundOnce],
  left: [Function: left],
  leftOnce: [Function: leftOnce],
  right: [Function: right],
  rightOnce: [Function: rightOnce],
  isString: [Function: isString],
  isNotString: [Function: isNotString],
  segmentLeft: [Function: segmentLeft],
  segmentRight: [Function: segmentRight],
  PaddableString: [Function: PaddableString] }
```

### as library

```javascript
const {
  around,
  aroundAsymmetric,
  aroundAsymmetricOnce,
  aroundOnce,
  left,
  leftOnce,
  right,
  rightOnce,
  isString,
  isNotString,
  segmentLeft,
  segmentRight
} = require("@m1yh3m/pad.string.node.lib");

// All the functions are self explanatory, look into tests for documentation

leftOnce("!", "a"); // or left('!', 1, 'a')
// !a

rightOnce("!", "a"); // or right('!', 1, 'a')
// a!

aroundOnce("!", "a"); // or around('!', 1, 'a')
// !a!

// ... so on
```

### as class

```javascript
const { PaddableString } = require("@m1yh3m/pad.string.node.lib");

// similar functionality as library but via chainable object method calls
// all the functionalities of library exist in the object

var p = new PaddableString("abc");

// use .get() to get the value out of the object

p.leftOnce("!")
  .rightOnce("!")
  .get();
// !abc!

// ... so on
```
