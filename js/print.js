let display = document.getElementById("displayList");

for (x in filteredPersons) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `Name: ${person.firstName} ${person.LastName}, Age: ${person.LastName}`;
    display.appendChild(paragraph);
}