let display = document.getElementById("displayList");
function print(param){
    display.innerHTML = '';
    for (x of param) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Name: ${x.firstName} ${x.lastName}, Age: ${x.age}`;
        display.appendChild(paragraph);
    }
}