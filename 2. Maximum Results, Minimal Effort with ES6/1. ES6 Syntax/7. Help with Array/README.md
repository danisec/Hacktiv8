## Array Helper

### 1. Filter

Metode `.filter()` akan membuat sebuah array baru berisi element yang sesuai dengan kondisi yang diberikan. Metode ini tidak akan mengubah array yang sebelumnya.

Misalnya :

```
let values = [1, 60, 34, 30, 20, 7];

function lessThan20(val) {
  return val < 20;
}

let valueLessThan20 = values.filter(lessThan20);

console.log(valueLessThan20); // [1, 7]
```

<br />

### 2. Find

Find() merupakan metode untuk menemukan elemen pertama dari array yang memenuhi fungsi pengujian yang disediakan.

Misalnya :

```
let people = [
  { name: "Dani", age: 24 },
  { name: "Nana", age: 23 },
  { name: "Danu", age: 30 },
  { name: "Sana", age: 18 },
  { name: "Randi", age: 19 },
];

function teenager(person) {
  return person.age > 10 && person.age < 20;
}

let firstTeenager = people.find(teenager);

console.log("Belia yang ditemukan adalah :", firstTeenager); // Belia yang ditemukan adalah : { name: 'Sana', age: 18 }
```

<br />

Dari contoh kode diatas dapat dilihat terdapat dua age yang diatas 10 dan dibawah 20. Karena find() hanya menemukan elemen pertama dari array, maka akan menghasilkan keluaran pertama saja yaitu `{ name: 'Sana', age: 18 }`

<br />

### 3. Every

Metode `every()` berfungsi untuk menguji apakah semua elemen dalam array mengembalikan nilai truthly berdasarkan fungsi callback pengujian yang disediakan.

Metode ini hanya akan mengembalikan nilai `true` jika semua element array yang diuji mengembalikan nilai truthly.

Jika salah satu elemen mengembalikan nilai falsy ketika diuji menggunakan fungsi yang disediakan, maka method ini akan mengembalikan false.

Misalnya :

```
let people = [
  { name: "Dani", age: 24 },
  { name: "Nana", age: 23 },
  { name: "Danu", age: 30 },
  { name: "Sana", age: 18 },
  { name: "Randi", age: 19 },
];

function teenager(person) {
  return person.age > 10 && person.age < 20;
}

let firstTeenager = people.every(teenager);

console.log("Semua yang ada di array adalah :", firstTeenager); // Semua yang ada di array adalah : false
```

<br />

### 4. Some

Metode `some()` berfungsi untuk menguji apakah setidaknya satu element array lulus ketika diuji dengan fungsi callback yang disediakan.

Metode ini akan mengembalikan nilai `true` jika setidaknya satu element array lulus atau mengembalikan nilai `false` jika semua element array tidak lulus.

Misalnya :

```
let people = [
  { name: "Dani", age: 24 },
  { name: "Nana", age: 23 },
  { name: "Danu", age: 30 },
  { name: "Sana", age: 18 },
  { name: "Randi", age: 19 },
];

function teenager(person) {
  return person.age > 10 && person.age < 20;
}

let firstTeenager = people.some(teenager);

console.log("Beberapa yang ada di array adalah belia :", firstTeenager); // Beberapa yang ada di array adalah belia : true 

```

<br />

### 5. Foreach

`foreach()` merupakan metode array di JavaScript yang mengeksekusi fungsi yang disediakan sekali untuk setiap element array. Metod ini mengembalikan nilai `undefined` dan tidak mengubah array asli, tetapi jika dibutuhkan kita dapat memodifikasi array sumber di dalam badan fungsi.

`foreach()` bisa menjadi alternatif perulangan `for`, kode kita akan menjadi lebih ringkas dibanding menggunakan `for`.

Misalnya :

```
let colors = ["red", "green", "blue"];

function print(val) {
  console.log(val); // red, green , blue
}

colors.forEach(print);
```

<br />

### 6. Map

`map()` merupakan metode array di JavaScript yang mengembalikan array baru berisi elemen yang dikembalikan oleh fungsi callback. Metode ini cocok digunakan ketika kita ingin memodifikasi elemen array tanpa mengubah array asli.

Misalnya :

```
let colors = ["red", "green", "blue"];

function kapital(val) {
  return val.toUpperCase();
}

let warnaKapital = colors.map(kapital);

console.log(warnaKapital); // [ 'RED', 'GREEN', 'BLUE' ]
```

<br />

### 7. Reduce

Metode `reduce()` akan menjalankan fungsi pada setiap element dimana pada setiap iterasinya menggunakan hasil `return` dari iterasi sebelumnya.

Misalnya :

```
let foods = [800, 200, 100, 300];

let total = foods.reduce(function (sum, item) {
  return sum + item;
});

console.log(total); // 1400
```
