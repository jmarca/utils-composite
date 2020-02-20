# @activimetrics/utils-composite

> Composite utilities (immutability, fp helpers)
>
> **NOTE**: All the functions described in [API](#API) are curried
>
> **NOTE**: forked from jumpn/utils-composite in order to upgrade dependencies

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc -->

- [Installation](#installation)
  - [Using npm](#using-npm)
  - [Using yarn](#using-yarn)
- [Types](#types)
- [API](#api)
  - [get](#get)
    - [Parameters](#parameters)
  - [getIn](#getin)
    - [Parameters](#parameters-1)
  - [getKeys](#getkeys)
    - [Parameters](#parameters-2)
  - [hasIn](#hasin)
    - [Parameters](#parameters-3)
  - [hasKey](#haskey)
    - [Parameters](#parameters-4)
  - [haveSameProps](#havesameprops)
    - [Parameters](#parameters-5)
  - [is](#is)
    - [Parameters](#parameters-6)
  - [isEmpty](#isempty)
    - [Parameters](#parameters-7)
  - [map](#map)
    - [Parameters](#parameters-8)
  - [arrayRemove](#arrayremove)
    - [Parameters](#parameters-9)
  - [remove](#remove)
    - [Parameters](#parameters-10)
  - [removeIn](#removein)
    - [Parameters](#parameters-11)
  - [set](#set)
    - [Parameters](#parameters-12)
  - [setIn](#setin)
    - [Parameters](#parameters-13)
  - [shallowCopy](#shallowcopy)
    - [Parameters](#parameters-14)
  - [shallowEqual](#shallowequal)
    - [Parameters](#parameters-15)
  - [toUndefinedIfEmpty](#toundefinedifempty)
    - [Parameters](#parameters-16)
  - [updateIn](#updatein)
    - [Parameters](#parameters-17)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Using [npm](https://docs.npmjs.com/cli/npm)

    $ npm install --save @activimetrics/utils-composite

### Using [yarn](https://yarnpkg.com)

    $ yarn add @activimetrics/utils-composite

## Types

```flowtype
type Composite = Array<*> | Object;

type Key = number | string;

type Path = Array<Key>;
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### get

Get property value of given key.

#### Parameters

-   `key` **Key** 
-   `composite` **Composite** 

Returns **any** 

### getIn

Returns value located at the given path or undefined otherwise.

#### Parameters

-   `path` **Path** 
-   `composite` **Composite** 

Returns **any** 

### getKeys

Get own enumerable keys.

#### Parameters

-   `composite` **Composite** 

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Key>** 

### hasIn

Returns true if value located at given path is deeply equal to the one
specified.

#### Parameters

-   `path` **Path** 
-   `value` **any** 
-   `composite` **Composite** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### hasKey

Returns true if key is included in composite's own enumerable ones,
or false otherwise.

#### Parameters

-   `key` **Key** 
-   `composite` **Composite** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### haveSameProps

Returns true if both composites have the same props or false otherwise.

#### Parameters

-   `c1` **Composite** 
-   `c2` **Composite** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### is

Returns true if parameter is a Composite or false otherwise

#### Parameters

-   `thing` **any** 

### isEmpty

Returns true if composite has no own enumerable keys (is empty) or false
otherwise

#### Parameters

-   `composite` **Composite** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### map

Maps values of the given composite using mapper

#### Parameters

-   `mapper` **function (value: any, key: Key, composite: $Supertype&lt;C>): any** 
-   `composite` **C** 

Returns **$Supertype&lt;C>** 

### arrayRemove

Returns a new Array with the result of having removed the specified amount
(count) of elements at the given index.

#### Parameters

-   `index` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `count` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `array` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Element](https://developer.mozilla.org/docs/Web/API/Element)>** 

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Element](https://developer.mozilla.org/docs/Web/API/Element)>** 

### remove

Returns a new composite with the result of having removed the property with
the given key.

#### Parameters

-   `key` **Key** 
-   `composite` **Composite** 

Returns **Composite** 

### removeIn

Returns a new composite with the result of having removed the property
located at the given path.

(This does the same as calling **updateIn** with updater:
`() => updateIn.remove`)

#### Parameters

-   `path` **Path** 
-   `composite` **Composite** 

Returns **Composite** 

### set

Returns a new composite with the result of having updated the property with
the given key with the specified value.

#### Parameters

-   `key` **Key** 
-   `value` **any** 
-   `composite` **Composite** 

Returns **Composite** 

### setIn

Returns a new composite with the result of having updated the property
located at the given path with the specified value.

(This does the same as calling **updateIn** with updater: `() => value`)

#### Parameters

-   `path` **Path** 
-   `value` **any** 
-   `composite` **Composite** 

Returns **Composite** 

### shallowCopy

Returns a new composite with the same own enumerable props of the one given.

#### Parameters

-   `composite` **C** 

Returns **C** 

### shallowEqual

Returns true if both composites are of the same type (Array or Object) and
their properties are strictly equal.

#### Parameters

-   `c1` **Composite** 
-   `c2` **Composite** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### toUndefinedIfEmpty

Returns given composite if it has any own enumerable keys (is not empty) or
undefined otherwise

#### Parameters

-   `composite` **Composite** 

Returns **Composite** 

### updateIn

Returns a new composite with the result of having updated the property value
at the given path with the result of the call to updater function.

Entry removal is supported by returning `updateIn.remove` symbol on updater
function.

#### Parameters

-   `path` **Path** 
-   `updater` **function (prev: any): any** 
-   `composite` **Composite** 

Returns **Composite** 

## License

[MIT](LICENSE.txt) :copyright: 2020 **James Marca** /  (),  2017 **Jumpn Limited**
