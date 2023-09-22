const searchBar = document.getElementById('search');

searchBar.onkeyup = () => {
    let userInput = searchBar.value.toLowerCase();
    let test = persons.filter("??");
    console.log(test);
}