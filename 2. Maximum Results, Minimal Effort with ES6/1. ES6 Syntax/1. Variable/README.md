## Variable

Variabel adalah penanda identitas yang digunakan untuk menampung suatu nilai. Secara teknis, variabel merujuk ke sebuah alamat di memory komputer (RAM). Ketika kita membuat sebuah variabel, satu 'slot' memory akan disiapkan untuk menampung nilai tersebut.

### Variable JavaScript

1. Let dan Const menganut sistem block scope, yang mana cakupan variabelnya hanya bisa diakses di dalam blocknya saja.

2. Var menganut sistem functional scope, yang mana variabelnya dapat diakses dari dalam maupun dari luar block kecuali di luar function.

3. Data pada Let dan Var bisa diubah.

4. Data pada Const tidak bisa diubah.

5. Selalu gunakan let atau const jika tidak ingin terjadi keracuan data atau nilai ketika kita mengakses variable yang ternyata sudah ada di dalam block lain.

6. Gunakan const ketika datanya tetap.
