## Default Parameter

Default paramater memungkinkan untuk memberikan value atau nilai yang diberikan ke sebuah fungsi, apabila fungsi tersebut tidak mendapatkan argument pada parameter tersebut, maka argument akan memberikan nilai default (undefined).

```
let Func = (a, b = 10) => a + b;

Func(20);

console.log(Func(20)); // 20 + 10 = 30
```

<br />

Jika parameter tidak memiliki nilai, maka nilai yang akan ke argumentnya adalah undefined. Sehinga output yang dihasilkan adalah NaN (Not a Number).

```
let notWorking = (a = 10, b) => a + b;
notWorking(20);

console.log(notWorking(20)); // NaN (Not a Number)
```
