
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

//Fetching elements from HTML
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let addPersonButton = document.getElementById("addPerson");

//Function to add a new person
function addPerson() {
    persons.push(new Person(firstNameInput.value, lastNameInput.value, parseInt(ageInput.value, 10)));
    console.log(persons);
  }

//Adding function to the submit button
addPersonButton.addEventListener('click', addPerson);