## Object

### 1. Object is

`object.is()` merupakan metode menentukan apakah dua nilai adalah nilai yang sama.

sintaks :

```
Object.is(value1, value2);
```

Parameter :

- value1: Nilai pertama untuk membandingkan.
- value2: Nilai kedua untuk membandingkan.

<br />

Misalnya :

```
let x = NaN,
  y = 0,
  z = -0;

x === x;
y === z;
console.log(x === x); // false
console.log(y === z); // true

// If use object is
Object.is(x, x); // true
Object.is(y, z); // false
```
