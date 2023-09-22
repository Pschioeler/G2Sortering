class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this. age =  age;
    }
}

const persons = [];

persons.push(new Person("Mathias", "Ulrich", 28));

console.log(persons);