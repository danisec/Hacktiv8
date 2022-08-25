## Classes

Class adalah template untuk membuat objek. Satu class mempunyai satu atau lebih properti atau fungsi. Satu class dapat menghasilkan banyak objek, semua objek mempunyai properti dan fungsi yang sama dan bisa mempunyai nilai properti yang berbeda.

Class dibuat dengan menggunakan keyword `class`. Class selalu mempunyai `constructor`.

Misalnya :

```
class person {
  constructor() {
    this.name = "person";
    this.height = 150;
  }
}
```

### Constructor

Setiap class harus mempunyai constructor. Constructor akan selalu dipanggil dan dieksekusi pada waktu objek dibuat dari suatu class. Constructor biasanya digunakan untuk inisialisasi nilai properti atau nilai variable tertentu.

Constructor mempunyai parameter seperti fungsi. Nilai pada parameter tersebut diberikan pada waktu objek dibuat dengan menggunakan keyword `new`.

Misalnya :

```
class Person {
  constructor() {
    this.name = "person";
    this.height = 150;
  }
  sayName() {
    console.log(this.name);
  }
}

class Developer extends Person {
  constructor(name, height) {
    super(name, height);
    this.name = "Developer";
  }
}

let kode = new Developer();
kode.sayName(); // Developer
```
