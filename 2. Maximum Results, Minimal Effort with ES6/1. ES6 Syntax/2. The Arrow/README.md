## The Arrow

Arrow function di JavaScript memungkinkan kita untuk menulis sintaks fungsi dengan cara lebih pendek.

Secara garis besar arrow function adalah fungsi yang dideklarasikan dengan tanda arrow(panah) "=>" tanpa menggunakan kata kunci "function" dalam syntax seperti cara penulisan fungsi sebelum ES6 rilis(ES 5 kebawah) yang kini juga disebut traditional function. Selain itu kita juga bisa menuliskannya tanpa fungsi "return" , kurung "()" dan kurung kurawal "{}" dengan aturan tertentu.

Misalnya :

```
const hitung = (angka1, angka2) => {
  return angka1 + angka2;
};
```

Fungsi arrow diatas dapat disederhanakan menjadi seperti ini.

```
const hitung = (angka1, angka2) => angka1 + angka2;
```
