## Destructuring

Destructuring adalah memecah komponen yang kompleks menjadi komponen yang lebih kecil. Hal ini untuk mempermudah dalam pengolahan komponen tersebut sesuai dengan kebutuhan.

Misalnya :

```
function printBasicInfo({ firstName, secondName, profession }) {
  console.log(`${firstName} ${secondName} ${profession}`);
}

let person = {
  firstName: "Dani",
  secondName: "Aprilyanto",
  age: 33,
  children: 3,
  profession: "Web Development",
};

printBasicInfo(person); // Dani Aprilyanto Web Development
```

Dengan adanya destructing objek, kita dapat mudah dalam mengolah properti objek dan mendapatkan value dari objek tersebut.
