// function sortByName: takes an array and sorts its elements by last name, an possible first name
function sortByName(people) {
    people.sort((a, b) => {
      let personALS = a.lastName.toLowerCase();
      let personBLS = b.lastName.toLowerCase();
      let personAFN = a.firstName.toLowerCase();
      let personBFN = b.firstName.toLowerCase();

      if (personALS < personBLS) {
        return -1;
      } else if (personALS > personBLS) {
        return 1;
      } else if (personALS == personBLS) {
        if (personAFN < personBFN) {
          return -1;
        } else if (personAFN > personBFN) {
          return 1;
        } else {
          return 0;
        }
      }
      return 0;
    })
}

function sortByAgeDifference(people, x) {
  people.sort((a, b) => {
    let personAA = a.age;
    let personBA = b.age;
    let difference = x;

    if (Math.abs(personAA - difference) < Math.abs(personBA - difference)) {
      return -1;
    } else if (Math.abs(personAA - difference) > Math.abs(personBA - difference)) {
      return 1;
    } else {
      return 0;
    }
  })
}

