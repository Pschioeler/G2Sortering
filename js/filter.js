const searchBar = document.getElementById('search');

searchBar.onkeyup = () => {
    let userInput = searchBar.value.toLowerCase();
    let filteredPersons = persons.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(userInput);
    });
    console.log(filteredPersons);
    sortByName(filteredPersons);
    print(filteredPersons);
}
