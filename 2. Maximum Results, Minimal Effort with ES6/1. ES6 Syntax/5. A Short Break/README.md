## Rest dan Spread

Rest parameter berguna untuk menggabungkan semua parameter pada function ke dalam array. Dengan menggunakan rest parameter dapat membantu mendefinisikan function dengan rapih serta memberikan parameter yang tidak terbatas pada sebuah function.

Misalnya :

```
function foo(x, y, ...z) {
    console.log(x, y, z); // 1 2 [3, 4, 5], 1 2 [3, 4, 5]
  }

  foo(1, 2, 3, 4, 5);
```

<br />

Spread operator digunakan untuk membagi elemen array atau properti pada objek, sehingga elemen array dapat ditambahkan atau dimasukkan ke dalam array baru.

Misalnya :

```
let params = ["Hello", true, 7];
let other = [1, 2, ...params, 3];

console.log(other); // [1, 2, "Hello", true, 7, 3]
```

Dengan menambahkan (...) pada pemanggilan array yang ingin dimasukkan kita telah menggunakan spread operator. Sehingga elemen array dapat di tambahkan ke dalam array baru.

Kesimpulan :

- Rest paramater : menggabungkan semua parameter pada function ke dalam array.

- Spread operator : membagi elemen berbentuk array menjadi elemen tunggal.
