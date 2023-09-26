// function to sort filmList by name
function sortByName(people) {
    people.sort((a, b) => {
      let personA = a.lastName.toUpperCase();
      let personB = b.lastName.toUpperCase();

      if (personA < personB) {
        return -1;
      }

      if (personA > personB) {
        return 1;
      }

      return 0;
    })
}

function sortByAge(people) {
    persons.sort((a, b) => {
      let personA = a.age;
      let personB = b.age;

      if (personA < personB) {
        return -1;
      }

      if (personA > personB) {
        return 1;
      }

      return 0;
    })
}