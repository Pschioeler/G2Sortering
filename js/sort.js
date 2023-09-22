// function to sort filmList by name
function sortByName() {
    filmList.sort((a, b) => {
      let filmA = a.filmName.toUpperCase();
      let filmB = b.filmName.toUpperCase();

      if (filmA < filmB) {
        return -1;
      }

      if (filmA > filmB) {
        return 1;
      }

      return 0;
    })

}