
//Template for each person
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age =  age;
    }
}

const persons = [];

//Adding default person
  persons.push(new Person("Mathias", "Ulrich", 28));
  persons.push(new Person("Bo", "Lig", 14));
  persons.push(new Person("Ib", "A", 19));
  persons.push(new Person("Hans", "Grete", 89));
  persons.push(new Person("Inger", "Iør", 67));
  persons.push(new Person("Maja", "Smith", 42));
  persons.push(new Person("Kost", "Eskab", 8));
  persons.push(new Person("Camilla", "Ibsen", 99));
  persons.push(new Person("Åge", "Låge", 75));
  persons.push(new Person("Karl", "Ach", 120));
  persons.push(new Person("Elena", "Anele", 50));


//Fetching elements from HTML
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let addPersonButton = document.getElementById("addPerson");

//Function to add a new person
function addPerson() {
    persons.push(new Person(firstNameInput.value, lastNameInput.value, parseInt(ageInput.value, 10)));
    console.log(persons);
    sortByName(persons);
    print(persons);
  }

//Adding function to the submit button
addPersonButton.addEventListener('click', addPerson);
