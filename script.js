document
  .getElementById("card")
  .style.setProperty("display", "none", "important");

//${randomNumber}/

randomGenerator = () => {
  document
    .getElementById("card")
    .style.setProperty("display", "block", "important");
  document
    .getElementById("botao1")
    .style.setProperty("display", "none", "important");

  let randomNumber = getRandomInt(82);
  if (randomNumber === 0 || randomNumber === 17) randomNumber++;
  let finalURL = `https://swapi.dev/api/people/${randomNumber}/`;

  fetch(finalURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let nomePersonagem = document.getElementById("nomePersonagem");
      let fatoUm = document.getElementById("fato1");
      let fatoDois = document.getElementById("fato2");
      let fatoTres = document.getElementById("fato3");
      let fatoQuatro = document.getElementById("fato4");

      nomePersonagem.innerHTML = data.name;
      fatoUm.innerHTML = data.gender;
      fatoDois.innerHTML = data.height;
      fatoTres.innerHTML = data.starships.length;
      fatoQuatro.innerHTML = data.films.length;
    });
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
