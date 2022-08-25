## Array

### 1. Array From

`Array.from()` memungkinkan membuat array dari objek yang dapat diubah (objek seperti `Map` dan `Set`) atau jka objek dapat diubah. Objek seperti array (objek dengan `length` properti dan element yang di indeks).

`Array.from()` memiliki parameter opsional `mapFn`, yang memungkinkan untuk mengeksekusi fungsi `map()` pada setiap element array yang dibuat.

Misalnya :

```
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

<br />

### 2. Array Copywithin

Metode `copyWithin` melakukan penyalinan dangkal (shallow copy) bagian array ke lokasi (indeks) lain dalam array yang sama dan mengembalikan hasilnya tanpa memodifikasi panjang array.

Sintaks :

```
copyWithin(target, start, end);
```

Keterangan :

- target: indeks berbasis nol untuk menyalin urutan atau menentukan ke indeks berapa elemen yang disalin ditempatkan.
- start (opsional): indeks elemen pertama yang akan disalin, default 0.
- end (opsional): indeks elemen yang menjadi batas penyalinan start, elemen yang berada tepat di indeks end tidak ikut disalin, default sesuai panjang array (arr.length).

<br />

Misalnya :

```
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));
// {0: 1, 3: 1, length: 5}

```

<br />

### 3. Array Fill

`fill()` metode mengubah semua element dalam array ke nilai statis, dari indeks awal (default 0) ke indeks akhir (default `array.length`). Hal ini akan mengembalikan array yang di modifikasi.

Sintaks :

```
fill(value, start, end)
```

Keterangan :

- value: Nilai untuk mengisi array.
- start: Mulai indeks (inklusif), default 0.
- end: Indeks akhir (eksklusif), default arr.length.

<br />

Misalnya :

```
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

<br />

### 4. Array Keys

`keys()` metode mengembalikan array iterator yang berisi kunci untuk setiap indeks dalam array.

Misalnya :

```
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

<br />

### 5. Array Entries

`entries()` metode mengembalikan array iterator yang berisi pasangan kunci/nilai untuk setiap indeks di Himpunan.

Misalnya :

```
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```
