let hands= ["rock", "paper", "scissors"];
let score: {playerOne: number, playerTwo: number} = {
  playerOne: 0,
  playerTwo: 0,
};

function getHand(hands: string[]): string {
  return hands[parseInt((Math.random() * 10).toString()) % 3];
}


let playerOne: {name: string, play: string}={
  name: "Sally",
  play: "",
};

let playerTwo: {name: string, play: string} = {
  name: "Susan",
  play: "",
};

function playRound(playerOne: {name: string, play: string}, playerTwo: {name: string, play: string}) {
  playerOne.play = getHand(hands);
  playerTwo.play = getHand(hands);

  if (
    (playerOne.play == hands[0] && playerTwo.play == hands[2]) ||
    (playerOne.play == hands[2] && playerTwo.play == hands[1]) ||
    (playerOne.play == hands[1] && playerTwo.play == hands[0])
  ) {
    score.playerOne++;
    return playerOne.name + " wins with " + playerOne.play;
  } else if (
    (playerTwo.play == hands[0] && playerOne.play == hands[2]) ||
    (playerTwo.play == hands[2] && playerOne.play == hands[1]) ||
    (playerTwo.play == hands[1] && playerOne.play == hands[0])
  ) {
    score.playerTwo++;
    return playerTwo.name + " wins with " + playerTwo.play;
  } else if (
    (playerTwo.play == hands[0] && playerOne.play == hands[0]) ||
    (playerTwo.play == hands[1] && playerOne.play == hands[1]) ||
    (playerTwo.play == hands[2] && playerOne.play == hands[2])
  ) {
    return "It's a tie";
  } else {
    return null;
  }
}

function playerInfo(): void {
  (document.getElementById("playerOneName") as HTMLElement).innerHTML = playerOne.name;
  (document.getElementById("playerTwoName") as HTMLElement).innerHTML = playerTwo.name;
  (document.getElementById("playerOnePlay") as HTMLElement).innerHTML = playerOne.play;
  (document.getElementById("playerTwoPlay") as HTMLElement).innerHTML = playerTwo.play;
}

function playerResult(result: string | null): void {
  if(result !== null) {
    (document.getElementById("result") as HTMLElement).innerHTML = result;
  }
  (document.getElementById("playerOneScore") as HTMLElement).innerHTML = score.playerOne.toString();
  (document.getElementById("playerTwoScore") as HTMLElement).innerHTML = score.playerTwo.toString();
}

function playGame() :void {
  let result: string | null = playRound(playerOne, playerTwo);
  playerInfo();
  playerResult(result);
}

let playButton = document.getElementById("playButton");
if(playButton) { 
playButton.addEventListener("click", playGame);
}