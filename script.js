const PlayersArray = [];
const fN = document.getElementById("firstName");
  const lN = document.getElementById("lastName");
  const cO = document.getElementById("country");
  const sc = document.getElementById("score");

  



function addPlayer(event) {
  event.preventDefault(); //to stop default behaviour of html

  const playerList = document.getElementById("playerList");

  const firstName = fN.value;
  const lastName = lN.value;
  const country = cO.value;
  const score = sc.value;

  fN.value="";
  lN.value="";
  cO.value="";
  sc.value="0";


  const playerData = {
    name: firstName + " " + lastName,
    country: country,
    score: Number(score),
  };
  PlayersArray.push(playerData);
  PlayersArray.sort(
    (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
  );

  
  playerList.innerHTML = "";

  for (let index = 0; index < PlayersArray.length; index++) {
    const player = PlayersArray[index];

    const li = document.createElement("li");
    const name = document.createElement("span");
    const countryContent = document.createElement("span");
    const scoreContent = document.createElement("span");
    const deleteButton = document.createElement("button");
    const increbutton = document.createElement("button");
    const decrebutton = document.createElement("button");

    increbutton.innerText = "+";
    decrebutton.innerText = "-";
    increbutton.setAttribute("onclick", `increaseScore(${index})`);
    decrebutton.setAttribute("onclick", `decreaseScore(${index})`);

    scoreContent.innerText = player.score;
    countryContent.innerText = player.country;
    name.innerText = player.name;

    deleteButton.innerHTML = `<i class="fa-solid fa-trash" onclick="deletePlayer(${index})"></i>`;

    li.append(
      name,
      countryContent,
      scoreContent,
      deleteButton,
      increbutton,
      decrebutton
    );

    playerList.append(li);
  }
}

function refreshArray1() {
  const playerList = document.getElementById("playerList");
  
  PlayersArray.sort(
    (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
  );

 
  playerList.innerHTML = "";

  for (let index = 0; index < PlayersArray.length; index++) {
    const player = PlayersArray[index];

    const li = document.createElement("li");
    const name = document.createElement("span");
    const countryContent = document.createElement("span");
    const scoreContent = document.createElement("span");
    const deleteButton = document.createElement("button");
    const increbutton = document.createElement("button");
    const decrebutton = document.createElement("button");

    increbutton.innerText = "+";
    decrebutton.innerText = "-";
    increbutton.setAttribute("onclick", `increaseScore(${index})`);
    decrebutton.setAttribute("onclick", `decreaseScore(${index})`);

    scoreContent.innerText = player.score;
    countryContent.innerText = player.country;
    name.innerText = player.name;

    deleteButton.innerHTML = `<i class="fa-solid fa-trash" onclick="deletePlayer(${index})"></i>`;

    li.append(
      name,
      countryContent,
      scoreContent,
      deleteButton,
      increbutton,
      decrebutton
    );

    playerList.append(li);
  }
}

function deletePlayer(index) {
  PlayersArray.splice(index, 1);
  refreshArray1();
}

function increaseScore(index) {
  PlayersArray[index].score += 5;
  refreshArray1();
}

function decreaseScore(index) {
  PlayersArray[index].score -= 5;
  refreshArray1();
}
