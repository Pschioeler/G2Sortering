const searchBar = document.getElementById('search');

searchBar.onkeyup = () => {
    let userInput = searchBar.value.toLowerCase();
    let filteredPersons = persons.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        console.log(fullName);
        return fullName.includes(userInput);
    });
    console.log(filteredPersons);
}
