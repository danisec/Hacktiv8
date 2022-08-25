## Variable

Variable adalah sebuah nama yang mewakili sebuah nilai. Variable bisa diisi dengan berbagai macam nilai seperti “string”, “number”, “object”, “array”, dan sebagainya.

Terdapat 3 cara untuk mendeklarasikan variable di JavaScript :

1. Var. Membuat variable dengan menggunakan `var` lalu diikuti dengan nama variable dan nilainya. Penggunaan variable `var` pada JavaScript ES6 sudah sangat jarang digunakan.

   Misalnya:

   ```
   var titleSite = “Learn Pemrograman JavaScript”
   ```

   Pada contoh diatas pembuatan nama variable menggunakan camelCase yaitu menggunakan huruf besar atau kapital untuk nama variable yang terdiri dari dua suku kata.

<br />

2.  Let. Let adalah sebuah kata kunci untuk mendeklarasikan variable dengan lingkup blok. Lingkup blok berarti variable yang dideklarasikan tidak dapat diakses diluar blok.

    Misalnya :

    ```
       var x = 10; // x adalah 10

       {
       let y = 2; // y adalah 2
       console.log(y); // 2
       {
       console.log(x); // 10
       console.log(y); // ReferenceError: y is not defined
    ```

<br />

3. Const. const digunakan untuk mendeklarasikan sebuah variable yang sifatnya immutable atau tidak perlu diinisialisasikan kembali. Jika kita menginisialisasi kembali nilai variable yang menggunakan `const`, maka akan mendapatkan error “TypeError: Assignment to constant variable.”. Const mirip dengan variable `let`, hanya saja nilainya tidak dapat diubah.

   Misalnya :

   ```
   const z = 100;
   console.log(z);

   z = 200;
   console.log(z) // TypeError: Assignment to constant variable.
   ```

<br />

**Kesimpulan :**

1. Let dan const menganut sistem block scope, yang mana cakupan variablenya hanya bisa diakses didalam block.
2. Var menganut sistem functional scope, yang mana variablenya dapat diakses dari dalam maupun dari luar block kecuali di luar function.
3. Data pada let dan var bisa diubah.
4. Data pada const tidak bisa diubah atau tetap.
5. Selalu gunakan let atau const jika tidak ingin terjadi kerancuan data atau nilai ketika kita mengakses variable yang ternyata sudah ada di dalam block lain.
