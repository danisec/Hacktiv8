## Module

Module adalah file JavaScript yang didalamnya terdapat value dari objek, function, dan variable. Kemudian file tersebut dapat di eksport dan di import oleh file lain. Di mana file lain yang mengimportnya dapat menggunakan value yang ada di file tersebut.

Misalnya :

luas.js

```
function lingkaran(radius) {
  return radius * radius * 3.14;
}

function persegi(sisi) {
  return sisi * sisi;
}

function persegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

function segitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}

export { lingkaran, persegi, persegiPanjang, segitiga };

```

Dalam contoh diatas, file melakukan export pada fungsi yang namanya dilampirkan dalam objek yang di eksport.

<br />

Sekarang saatnya mengimport, file akan mengimportnya pada file `main.js` yang dalam kasus ini file berada dalam direktori yang sama dengan `luas.js`

main.js

```
import { lingkaran, persegi, persegiPanjang, segitiga } from "./luas.js";

console.log(lingkaran(7)); // 153.86
console.log(persegi(8)); // 64
console.log(persegiPanjang(3, 10)); // 30
console.log(segitiga(4, 10)); // 20

```

<br />

Apabila `main.js` dijalankan maka file akan dieksekusi dengan lancar menggunakan fungsi yang diimport dari `luas.js` meskipun fungsi tersebut tidak dideklarasikan sebelumnya.

Import juga dapat memberikan `alias` pada sebuah fungsi dengan menggunakan `as`.

Misalnya :

```
import {persegi as luasPersegi} from './luas.js';
import {persegi as kelilingPersegi} from './keliling.js';

console.log(luasPersegi(4));
console.log(kelilingPersegi(4));
```

<br />

### Kenapa harus menggunakan Export dan Import?

Export dan Import digunakan dengan tujuan memisahkan file berdasarkan tanggung jawabnya dan hanya memanggil yang dibutuhkan saja. Tujuannya adalah menerapkan prinsip `Single Responsibility` dalam penulisan kode.

Dengan Export dan import, memungkinkan juga untuk bisa menggunakan module atau library yang disediakan developer lain.
