// Destructing
function printBasicInfo({ firstName, secondName, profession }) {
  console.log(`${firstName} ${secondName} ${profession}`);
}

let person = {
  firstName: "Dani",
  secondName: "Aprilyanto",
  age: 33,
  children: 3,
  profession: "kode",
};

printBasicInfo(person);
