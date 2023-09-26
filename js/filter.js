const searchBar = document.getElementById('search');
const dropDown = document.getElementById('dropdown')

searchBar.onkeyup = () => {
    let userInput = searchBar.value.toLowerCase();
    let filteredPersons;

   

    if (isNaN(Number(userInput))) { //Tjekker om brugerens input er et nummer
        dropDown.disabled = true;
        filteredPersons = persons.filter((person) => {
            const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
            return fullName.includes(userInput);
        });
        sortByName(filteredPersons);
    } else {
        userInput = Number(userInput);
        dropDown.disabled = false;
        filteredPersons = persons.filter((person) => {
        
        switch(dropDown.value) {
            case "1":
            return person.age === userInput;
            
            case "2":
            return person.age < userInput;
            
            case "3":
            
            return person.age > userInput;
        }
        
        
        });
        sortByAgeDifference(filteredPersons, userInput);
    }

    console.log(filteredPersons);
    print(filteredPersons);

}
