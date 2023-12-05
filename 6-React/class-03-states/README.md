# Class 03 States

## Immutability

An immutable value is one whose content cannot be changed without creating an entirely new value.

## Rendering Flow

- When the status changes
- When the property changes
- When parent component renders
- Passing function is different from executing (infinite rendering)

## Key Props

The key must be unique and not random

<pre>
["A", "B", "C", "D", "E"]
  0,   1,   2,   3,   4

["A", "B", "E", "D", "C"]
  0,   1,   2,   3,   4
</pre>

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
function incrementNum() {
  setNum(num + 1);
  setNum(num + 1);
}

// log: "2"

function incrementNum() {
  setNum((prevState) => prevState + 1);
}

// log: "3"
```