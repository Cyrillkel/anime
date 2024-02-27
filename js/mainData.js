const mainData = () => {
  fetch("https://anime-akira-default-rtdb.firebaseio.com/anime")
    .then((response) => response.json())
    .then((data) => console.log(data.anime));
};
mainData();
