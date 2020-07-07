'use strict'

const divToe = document.getElementsByClassName("toe");
const spanPlayer = document.getElementsByTagName("kbd")[0];

const indexWinner = [];

    indexWinner[0] = [0, 1, 2];
    indexWinner[1] = [3, 4, 5];
    indexWinner[2] = [6, 7, 8];
    indexWinner[3] = [0, 3, 6];
    indexWinner[4] = [1, 4, 7];
    indexWinner[5] = [2, 5, 8];
    indexWinner[6] = [0, 4, 8];
    indexWinner[7] = [6, 4, 2];



const players = {
  one: "✖",
  two: "〇",
  turn: 0,
  win: "",
  reset: false
};

const board = {
  dash: [
    divToe[0],
    divToe[1],
    divToe[2],
    divToe[3],
    divToe[4],
    divToe[5],
    divToe[6],
    divToe[7],
    divToe[8],
  ],

  game: (dash_) => {
    let cont = 0;
    for (const index in dash_) {
  
      dash_[index].addEventListener("click", () => {
    
        players.turn === 0
          ? dash_[index].textContent === ""
            ? ((dash_[index].textContent = players.one),
              (dash_[index].style.color = "red"),
              players.turn++, cont++,
              (spanPlayer.textContent = "O"))
            : console.log(`not available`)
          : dash_[index].textContent === ""
          ? ((dash_[index].textContent = players.two),
            players.turn--, cont++,
            (spanPlayer.textContent = "X"))
          : console.log(`not available`);

        winner(dash_);

        players.win
          ? (alert(`${players.win} has won!`), reset(), location.reload())
          : cont === 9 ? (alert("Cats game!"),reset(), location.reload()) : false
          
      });

      
    }

    function winner(d) {
      for (const i in indexWinner) {
        d[indexWinner[i][0]].textContent === players.one &&
        d[indexWinner[i][1]].textContent === players.one &&
        d[indexWinner[i][2]].textContent === players.one
          ? (players.win = players.one)
          : false,
          d[indexWinner[i][0]].textContent === players.two &&
          d[indexWinner[i][1]].textContent === players.two &&
          d[indexWinner[i][2]].textContent === players.two
            ? (players.win = players.two)
            : false;
      }
    }

    function reset() {
      for (const key in dash_) {
        dash_[key].textContent = "";
      }
      players.win = ""
    }
    
  }
};

board.game(board.dash);
